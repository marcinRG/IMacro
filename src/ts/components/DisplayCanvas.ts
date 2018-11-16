import {IDisplayCanvasProperties} from '../model/interfaces/Properties/IDisplayCanvas.Properties';
import {ITextProperties} from '../model/interfaces/ITextProperties';
import {IGlobalCanvasSettings} from '../model/interfaces/IGlobalCanvasSettings';

export class DisplayCanvas {
    private htmlCanvasElement;
    private context2d;
    private shadowsAndAlphaSettings: IGlobalCanvasSettings;

    constructor(properties: IDisplayCanvasProperties) {
        this.setElements(properties);
    }

    public writeText(text: ITextProperties) {
        if (this.context2d) {
            this.saveShadowAndAlphaSettings();
            this.context2d.fillStyle = text.fillStyle;
            this.context2d.globalAlpha = text.alpha;
            this.context2d.font = `${text.fontStyle} ${text.fontWeight} ${text.fontSize} ${text.fontFamily}`;
            if ((text.shadowColor) && (text.shadowColor !== '')) {
                this.context2d.shadowColor = text.shadowColor;
                this.context2d.shadowBlur = text.shadowBlur;
                this.context2d.shadowOffsetX = text.shadowOffsetX;
                this.context2d.shadowOffsetY = text.shadowOffsetY;
            }
            if (text.fill) {
                this.context2d.fillText(text.text, text.x, text.y);
            } else {
                this.context2d.lineWidth = text.lineWidth;
                this.context2d.strokeText(text.text, text.x, text.y);
            }
            this.restoreShadowAndAlphaSettings();
        }
    }

    private setElements(properties: IDisplayCanvasProperties) {
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
            shadowOffsetX: this.context2d.shadowCffsetX,
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
