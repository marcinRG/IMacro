import {ITextProperties} from '../model/interfaces/ITextProperties';
import {IGlobalCanvasSettings} from '../model/interfaces/IGlobalCanvasSettings';
import {IComponentProperties} from 'crappyuielements';
import {ICanvasProperties} from '../model/interfaces/ICanvasProperties';
import {IImageProperties} from '../model/interfaces/Properties/IImageProperties';

export class DisplayCanvas {
    private htmlCanvasElement;
    private context2d;
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
                const canvasBounds = this.getWidthHeight();
                const imgBounds = this.calculateImageSize(image);
                const imgPosition = this.calculateImagePosition(image.position, imgBounds, canvasBounds);
                console.log(Math.floor(image.transparency / 100));
                this.context2d.globalAlpha = image.transparency / 100;
                this.context2d.drawImage(image.image, imgPosition.x, imgPosition.y, imgBounds.width, imgBounds.height);
            }
            this.restoreShadowAndAlphaSettings();
        }
    }

    private calculateImagePosition(position: string, imageBounds: any, canvasBounds: any) {
        switch (position) {
            case 'top-left': {
                return {x: 0, y: 0};
            }
            case 'top-center': {
                return {
                    y: 0,
                    x: Math.round(canvasBounds.width / 2 - imageBounds.width / 2),
                };
            }
            case 'top-right': {
                return {
                    y: 0,
                    x: Math.round(canvasBounds.width - imageBounds.width),
                };
            }
            case 'left-center': {
                return {
                    x: 0,
                    y: Math.round(canvasBounds.height / 2 - imageBounds.height / 2),
                };
            }
            case 'center-center': {
                return {
                    x: Math.round(canvasBounds.width / 2 - imageBounds.width / 2),
                    y: Math.round(canvasBounds.height / 2 - imageBounds.height / 2),
                };
            }
            case 'right-center': {
                return {
                    x: Math.round(canvasBounds.width - imageBounds.width),
                    y: Math.round(canvasBounds.height / 2 - imageBounds.height / 2),
                };
            }
            case 'bottom-left': {
                return {
                    x: 0,
                    y: Math.round(canvasBounds.height - imageBounds.height),
                };
            }
            case 'bottom-center': {
                return {
                    x: Math.round(canvasBounds.width / 2 - imageBounds.width / 2),
                    y: Math.round(canvasBounds.height - imageBounds.height),
                };
            }
            case 'bottom-right': {
                return {
                    x: Math.round(canvasBounds.width - imageBounds.width),
                    y: Math.round(canvasBounds.height - imageBounds.height),
                };
            }
        }
    }

    private calculateImageSize(image: IImageProperties) {
        const img = image.image;
        return {
            width: this.calculateSize(img.width, image.scale),
            height: this.calculateSize(img.height, image.scale),
        };
    }

    private addText(text: ITextProperties) {
        this.addShadow(text);
        this.context2d.fillStyle = text.color;
        this.context2d.font = `normal normal ${text.fontSize}px ${text.fontFamily}`;
        const canvasBounds = this.getWidthHeight();
        this.context2d.fillText(text.text,
            this.calculateSize(text.positionX, canvasBounds.width),
            this.calculateSize(text.positionY, canvasBounds.height));
    }

    private addShadow(text: ITextProperties) {
        if (text.shadowEnabled) {
            this.context2d.shadowColor = text.shadowColor;
            this.context2d.shadowBlur = text.shadowBlur;
            this.context2d.shadowOffsetX = text.shadowOffsetX;
            this.context2d.shadowOffsetY = text.shadowOffsetY;
        }
    }

    private getWidthHeight() {
        const rect = this.htmlCanvasElement.getBoundingClientRect();
        return {
            width: rect.width,
            height: rect.height,
        };
    }

    private calculateSize(value: number, max: number) {
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

//     if (text.fill) {
//         this.context2d.fillText(text.text, text.x, text.y);
//     } else {
//         this.context2d.lineWidth = text.lineWidth;
//         this.context2d.strokeText(text.text, text.x, text.y);
//     }
// }
