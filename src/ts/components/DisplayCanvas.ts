import {IDisplayCanvasProperties} from '../model/interfaces/Properties/IDisplayCanvas.Properties';
import {ITextProperties} from '../model/interfaces/ITextProperties';

export class DisplayCanvas {
    private htmlCanvasElement;
    private context2d;

    constructor(properties: IDisplayCanvasProperties) {
        this.setElements(properties);
    }

    public writeText(text: ITextProperties) {
        if (this.context2d) {
            this.context2d.fillStyle = text.fillStyle;
            this.context2d.font = `${text.fontStyle} ${text.fontWeight} ${text.fontSize} ${text.fontFamily}`;
            if ((text.shadowColor) && (text.shadowColor !== '')) {
                this.context2d.shadowColor = text.shadowColor;
                this.context2d.shadowBlur = text.shadowBlur;
                this.context2d.shadowCffsetX = text.shadowOffsetX;
                this.context2d.shadowOffsetY = text.shadowOffsetY;
            }
            if (text.fill) {
                this.context2d.fillText(text.text, text.x, text.y);
            } else {
                this.context2d.lineWidth = text.lineWidth;
                this.context2d.strokeText(text.text, text.x, text.y);
            }
            console.log(this.context2d.measureText(text.text));
        }
    }

    private setElements(properties: IDisplayCanvasProperties) {
        this.htmlCanvasElement = <HTMLCanvasElement> document.querySelector(properties.querySelectorString);
        if (this.htmlCanvasElement) {
            this.context2d = this.htmlCanvasElement.getContext('2d');
        }
    }
}
