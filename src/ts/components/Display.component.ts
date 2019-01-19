import {Observer} from 'rxjs/Observer';
import {IDisplayComponentProperties} from '../model/interfaces/Properties/IDisplayComponent.Properties';
import {DisplayCanvas} from './DisplayCanvas';
import {IEvent} from '../model/interfaces/IEvent';
import {CanvasPropertyNames} from '../model/enums/CanvasPropertyNames';
import {IColor} from 'crappyuielements';
import {ImagePropertyNames} from '../model/enums/ImagePropertyNames';
import {TextPropertyNames} from '../model/enums/TextPropertyNames';
import * as utils from '../utils/Utils';
import {ICanvasProperties} from '../model/interfaces/ICanvasProperties';
import {ITextProperties} from '../model/interfaces/ITextProperties';
import {IIMageFile} from '../model/interfaces/IImageFile';
import {IImageProperties} from '../model/interfaces/Properties/IImageProperties';

export class DisplayComponent implements Observer<IEvent> {
    private htmlElement;
    private canvasComponent: DisplayCanvas;
    private canvasClass: string;
    private canvasHeight: string;
    private canvasWidth: string;
    private canvasProperties: ICanvasProperties = <ICanvasProperties> {};
    private imageProperties: IImageProperties = <IImageProperties> {};
    private textProperties: ITextProperties = <ITextProperties> {};

    constructor(properties: IDisplayComponentProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.setProperties(properties);
            this.htmlElement.innerHTML = this.createHTMLElement();
            this.setHTMLElements(properties);
        }
    }

    public init(settings) {
        this.initCanvasProperties(settings);
        this.initTextProperties(settings);
        this.initImageProperties(settings);
        this.redrawCanvas();
    }

    public next(value: IEvent) {
        this.handleCanvasEvents(value);
        this.handleImageEvents(value);
        this.handleTextEvents(value);
        this.redrawCanvas();
    }

    public error(err: any) {
        console.log('error ocurred' + err);
    }

    public complete() {
        console.log('completed');
    }

    private initImageProperties(settings) {
        this.imageProperties.scale = settings.image.minMaxScale.defaultVal;
        this.imageProperties.transparency = settings.image.minMaxTransparency.defaultVal;
        this.imageProperties.rotation = settings.image.minMaxRotation.defaultVal;
        this.imageProperties.rotationCenter = settings.image.rotations.selected;
        this.imageProperties.position = settings.image.directions.selected;
    }

    private initCanvasProperties(settings) {
        this.canvasProperties.maxBounds = utils.getMaxCanvasSize();
        this.canvasProperties.width = settings.canvas.minMaxWidth.defaultVal;
        this.canvasProperties.height = settings.canvas.minMaxHeight.defaultVal;
        this.canvasProperties.color = settings.canvas.colorSettings.selected.value;
    }

    private initTextProperties(settings) {
        this.textProperties.shadowBlur = settings.text.minMaxShadowBlur.defaultVal;
        this.textProperties.shadowOffsetY = settings.text.minMaxShadowOffsetY.defaultVal;
        this.textProperties.shadowOffsetX = settings.text.minMaxShadowOffsetX.defaultVal;
        this.textProperties.fontSize = settings.text.fontSize.value;
        this.textProperties.fontFamily = settings.text.fontFamily.selected.value;
        this.textProperties.color = settings.text.textColor.selected.value;
        this.textProperties.shadowColor = settings.text.shadowColor.selected.value;
        this.textProperties.positionX = settings.text.minMaxPositionX.defaultVal;
        this.textProperties.positionY = settings.text.minMaxPositionY.defaultVal;
        this.textProperties.shadowEnabled = false;
        this.textProperties.strokeEnabled = false;
        this.textProperties.strokeColor = settings.text.strokeColor.selected.value;
        this.textProperties.strokeWidth = settings.text.strokeWidth.value;
    }

    private redrawCanvas() {
        this.canvasComponent.paintBackground(this.canvasProperties);
        this.canvasComponent.paintImage(this.imageProperties);
        this.canvasComponent.writeText(this.textProperties);
    }

    private handleCanvasEvents(event: IEvent) {
        switch (event.name) {
            case CanvasPropertyNames.CANVAS_COLOR: {
                const color: IColor = event.value;
                this.canvasProperties.color = color.value;
                break;
            }
            case CanvasPropertyNames.CANVAS_HEIGHT: {
                this.canvasProperties.height = event.value;
                break;
            }
            case CanvasPropertyNames.CANVAS_WIDTH: {
                this.canvasProperties.width = event.value;
                break;
            }
        }
    }

    private handleImageEvents(event: IEvent) {
        switch (event.name) {
            case ImagePropertyNames.IMAGE_ROTATION_CENTER: {
                this.imageProperties.rotationCenter = event.value;
                break;
            }
            case ImagePropertyNames.IMAGE_POSITION: {
                this.imageProperties.position = event.value;
                break;
            }
            case ImagePropertyNames.IMAGE_ROTATION: {
                this.imageProperties.rotation = event.value;
                break;
            }
            case ImagePropertyNames.IMAGE_TRANSPARENCY: {
                this.imageProperties.transparency = event.value;
                break;
            }
            case ImagePropertyNames.IMAGE_SCALE: {
                this.imageProperties.scale = event.value;
                break;
            }
            case ImagePropertyNames.IMAGE: {
                this.imageProperties.image = event.value;
                break;
            }
        }
    }

    private handleTextEvents(event: IEvent) {
        switch (event.name) {
            case TextPropertyNames.TEXT_SHADOW_COLOR: {
                const color: IColor = event.value;
                this.textProperties.shadowColor = color.value;
                break;
            }
            case TextPropertyNames.TEXT_COLOR: {
                const color: IColor = event.value;
                this.textProperties.color = color.value;
                break;
            }
            case TextPropertyNames.TEXT_SHADOW_OFFSET_Y: {
                this.textProperties.shadowOffsetY = event.value;
                break;
            }
            case TextPropertyNames.TEXT_SHADOW_OFFSET_X: {
                this.textProperties.shadowOffsetX = event.value;
                break;
            }
            case TextPropertyNames.TEXT_SHADOW_BLUR: {
                this.textProperties.shadowBlur = event.value;
                break;
            }
            case TextPropertyNames.TEXT_POSITION_X: {
                this.textProperties.positionX = event.value;
                break;
            }
            case TextPropertyNames.TEXT_POSITION_Y: {
                this.textProperties.positionY = event.value;
                break;
            }
            case TextPropertyNames.TEXT_SHADOW_ENBLED: {
                this.textProperties.shadowEnabled = event.value;
                break;
            }
            case TextPropertyNames.TEXT_FONT_FAMILY: {
                this.textProperties.fontFamily = event.value.value;
                break;
            }
            case TextPropertyNames.TEXT: {
                this.textProperties.text = event.value;
                break;
            }
            case TextPropertyNames.TEXT_SIZE: {
                this.textProperties.fontSize = event.value;
                break;
            }
            case TextPropertyNames.TEXT_STROKE_ENABLED: {
                this.textProperties.strokeEnabled = event.value;
                break;
            }
            case TextPropertyNames.TEXT_STROKE_COLOR: {
                const color: IColor = event.value;
                this.textProperties.strokeColor = color.value;
                break;
            }
            case TextPropertyNames.TEXT_STROKE_WIDTH: {
                this.textProperties.strokeWidth = event.value;
                break;
            }
        }
    }

    private setProperties(properties: IDisplayComponentProperties) {
        this.canvasClass = properties.canvasClass || 'canvas-output';
    }

    private setHTMLElements(properties: IDisplayComponentProperties) {
        const canvasSelector = `${properties.querySelectorString} .${this.canvasClass}`;
        this.canvasComponent = new DisplayCanvas({
            querySelectorString: canvasSelector,
            elementClass: this.canvasClass,
        });
    }

    private createHTMLElement() {
        const innerHTML = `
        <canvas class="${this.canvasClass}" width="${this.canvasWidth}" height="${this.canvasHeight}"></canvas>
        `.trim();
        return innerHTML;
    }
}
