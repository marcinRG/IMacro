import {ITextProperties} from '../model/interfaces/ITextProperties';
import {IGlobalCanvasSettings} from '../model/interfaces/IGlobalCanvasSettings';
import {IComponentProperties} from 'crappyuielements';
import {ICanvasProperties} from '../model/interfaces/ICanvasProperties';
import {IImageProperties} from '../model/interfaces/Properties/IImageProperties';
import {IXY} from '../model/interfaces/IXY';

export class DisplayCanvas {
    private htmlCanvasElement;
    private context2d: CanvasRenderingContext2D;
    private shadowsAndAlphaSettings: IGlobalCanvasSettings;

    constructor(properties: IComponentProperties) {
        this.setElements(properties);
    }

    public writeText(text: ITextProperties) {
        if (this.context2d) {
            this.saveShadowAndAlphaSettings();
            if ((text.text) && (text.text !== '')) {
                this.addText(text);
            }
            this.restoreShadowAndAlphaSettings();
        }
    }

    public paintBackground(canvasOptions: ICanvasProperties) {
        const height = this.calculateSize(canvasOptions.height, canvasOptions.maxBounds.maxHeight);
        const width = this.calculateSize(canvasOptions.width, canvasOptions.maxBounds.maxWidth);
        this.htmlCanvasElement.height = height + '';
        this.htmlCanvasElement.width = width + '';
        if (this.context2d) {
            this.saveShadowAndAlphaSettings();
            this.context2d.fillStyle = canvasOptions.color;
            this.context2d.fillRect(0, 0, width, height);
            this.restoreShadowAndAlphaSettings();
        }
    }

    public paintImage(image: IImageProperties) {
        if (this.context2d) {
            this.saveShadowAndAlphaSettings();
            if (image.image) {
                const canvasBounds: IXY = this.getWidthHeight();
                const imgBounds: IXY = this.calculateImageSize(image);
                const tempPosition: IXY = this.calculateTemporaryPosition(image.position, imgBounds, canvasBounds);
                const rotationCenter: IXY = this.calculateRotationCenter(image.rotationCenter, tempPosition, imgBounds);
                const imagePosition: IXY = this.calculateImagePosition(image.rotationCenter, imgBounds);
                this.context2d.save();
                this.context2d.globalAlpha = image.transparency / 100;
                this.rotateImage(image.rotation, rotationCenter);
                this.context2d.drawImage(image.image, imagePosition.x, imagePosition.y, imgBounds.x, imgBounds.y);
                this.context2d.restore();
            }
            this.restoreShadowAndAlphaSettings();
        }
    }

    private rotateImage(rotation: number, rotationCenter: IXY) {
        this.context2d.translate(rotationCenter.x, rotationCenter.y);
        this.context2d.rotate(rotation * Math.PI / 180);
    }

    private calculateImagePosition(rotationCenter: string, imgBounds: IXY): IXY {
        switch (rotationCenter) {
            case 'top-left': {
                return {
                    x: 0,
                    y: 0,
                };
            }
            case 'top-right': {
                return {
                    x: -imgBounds.x,
                    y: 0,
                };
            }
            case 'center-center': {
                return {
                    x: -imgBounds.x / 2,
                    y: -imgBounds.y / 2,
                };
            }
            case 'bottom-left': {
                return {
                    x: 0,
                    y: -imgBounds.y,
                };
            }
            case 'bottom-right': {
                return {
                    x: -imgBounds.x,
                    y: -imgBounds.y,
                };
            }
        }
    }

    private calculateRotationCenter(rotationCenter: string, imgPosition: IXY, imgBounds: IXY): IXY {
        switch (rotationCenter) {
            case 'top-left': {
                return {
                    x: imgPosition.x,
                    y: imgPosition.y,
                };
            }
            case 'top-right': {
                return {
                    x: imgPosition.x + imgBounds.x,
                    y: imgPosition.y,
                };
            }
            case 'center-center': {
                return {
                    x: imgPosition.x + imgBounds.x / 2,
                    y: imgPosition.y + imgBounds.y / 2,
                };
            }
            case 'bottom-left': {
                return {
                    x: imgPosition.x,
                    y: imgPosition.y + imgBounds.y,
                };
            }
            case 'bottom-right': {
                return {
                    x: imgPosition.x + imgBounds.x,
                    y: imgPosition.y + imgBounds.y,
                };
            }
        }
    }

    private calculateTemporaryPosition(position: string, imageBounds: IXY, canvasBounds: IXY): IXY {
        switch (position) {
            case 'top-left': {
                return {x: 0, y: 0};
            }
            case 'top-center': {
                return {
                    y: 0,
                    x: Math.round(canvasBounds.x / 2 - imageBounds.x / 2),
                };
            }
            case 'top-right': {
                return {
                    y: 0,
                    x: Math.round(canvasBounds.x - imageBounds.x),
                };
            }
            case 'left-center': {
                return {
                    x: 0,
                    y: Math.round(canvasBounds.y / 2 - imageBounds.y / 2),
                };
            }
            case 'center-center': {
                return {
                    x: Math.round(canvasBounds.x / 2 - imageBounds.x / 2),
                    y: Math.round(canvasBounds.y / 2 - imageBounds.y / 2),
                };
            }
            case 'right-center': {
                return {
                    x: Math.round(canvasBounds.x - imageBounds.x),
                    y: Math.round(canvasBounds.y / 2 - imageBounds.y / 2),
                };
            }
            case 'bottom-left': {
                return {
                    x: 0,
                    y: Math.round(canvasBounds.y - imageBounds.y),
                };
            }
            case 'bottom-center': {
                return {
                    x: Math.round(canvasBounds.x / 2 - imageBounds.x / 2),
                    y: Math.round(canvasBounds.y - imageBounds.y),
                };
            }
            case 'bottom-right': {
                return {
                    x: Math.round(canvasBounds.x - imageBounds.x),
                    y: Math.round(canvasBounds.y - imageBounds.y),
                };
            }
        }
    }

    private calculateImageSize(image: IImageProperties): IXY {
        const img = image.image;
        return {
            x: this.calculateSize(img.width, image.scale),
            y: this.calculateSize(img.height, image.scale),
        };
    }

    private addText(text: ITextProperties) {
        this.addShadow(text);
        this.context2d.fillStyle = text.color;
        this.context2d.font = `normal normal ${text.fontSize}px ${text.fontFamily}`;
        const canvasBounds = this.getWidthHeight();
        this.context2d.fillText(text.text,
            this.calculateSize(text.positionX, canvasBounds.x),
            this.calculateSize(text.positionY, canvasBounds.y));
    }

    private addShadow(text: ITextProperties) {
        if (text.shadowEnabled) {
            this.context2d.shadowColor = text.shadowColor;
            this.context2d.shadowBlur = text.shadowBlur;
            this.context2d.shadowOffsetX = text.shadowOffsetX;
            this.context2d.shadowOffsetY = text.shadowOffsetY;
        }
    }

    private getWidthHeight(): IXY {
        const rect = this.htmlCanvasElement.getBoundingClientRect();
        return {
            x: rect.width,
            y: rect.height,
        };
    }

    private calculateSize(value: number, max: number): number {
        return Math.floor((max * value) / 100);
    }

    private setElements(properties: IComponentProperties) {
        this.htmlCanvasElement = <HTMLCanvasElement> document.querySelector(properties.querySelectorString);
        if (this.htmlCanvasElement) {
            this.context2d = this.htmlCanvasElement.getContext('2d');
            this.saveShadowAndAlphaSettings();
        }
    }

    private saveShadowAndAlphaSettings() {
        this.shadowsAndAlphaSettings = {
            shadowColor: this.context2d.shadowColor,
            shadowBlur: this.context2d.shadowBlur,
            shadowOffsetX: this.context2d.shadowOffsetX,
            shadowOffsetY: this.context2d.shadowOffsetY,
            globalAlpha: this.context2d.globalAlpha,
        };
    }

    private restoreShadowAndAlphaSettings() {
        this.context2d.shadowColor = this.shadowsAndAlphaSettings.shadowColor;
        this.context2d.shadowBlur = this.shadowsAndAlphaSettings.shadowBlur;
        this.context2d.shadowOffsetX = this.shadowsAndAlphaSettings.shadowOffsetX;
        this.context2d.shadowOffsetY = this.shadowsAndAlphaSettings.shadowOffsetY;
        this.context2d.globalAlpha = this.shadowsAndAlphaSettings.globalAlpha;
    }
}
