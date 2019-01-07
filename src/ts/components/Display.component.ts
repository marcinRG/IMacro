import {Observer} from 'rxjs/Observer';
import {IDisplayComponentProperties} from '../model/interfaces/Properties/IDisplayComponent.Properties';
import {DisplayCanvas} from './DisplayCanvas';

export class DisplayComponent implements Observer<any> {
    private htmlElement;
    private canvasComponent;
    private canvasClass: string;
    private canvasHeight: string;
    private canvasWidth: string;
    private canvasProperties: object = {};
    private imageProperties: object = {};

    constructor(properties: IDisplayComponentProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.setProperties(properties);
            this.htmlElement.innerHTML = this.createHTMLElement();
            this.setHTMLElements(properties);
        }
    }

    public next(value: any) {
        console.log('next');
        console.log(value + '');
        this.handleCanvasEvents(value);
        this.handleImageEvents(value);
    }

    public error(err: any) {
        console.log('error ocurred' + err);
    }

    public complete() {
        console.log('completed');
    }

    private handleCanvasEvents(value: any) {
        console.log('handle canvas events');
    }

    private  handleImageEvents(value: any) {
        console.log('handle image events');
    }

    private setProperties(properties: IDisplayComponentProperties) {
        this.canvasClass = properties.canvasClass || 'canvas-output';
        this.canvasHeight = 600 + '';
        this.canvasWidth = 600 + '';
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
        <canvas class="${this.canvasClass}" width="${this.canvasWidth}" height="${this.canvasHeight}"></canvas>`.trim();
        return innerHTML;
    }
}
