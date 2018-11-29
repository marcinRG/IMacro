import {ICanvasOtionsProperties} from '../model/interfaces/Properties/ICanvasOtions.Properties';

export class CanvasOptionsComponent {
    private htmlElement;
    private componentLabel: string;
    private colorLabel: string;
    private widthLabel: string;
    private heightLabel: string;

    constructor(properties: ICanvasOtionsProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.setProperties(properties);
            this.htmlElement.innerHTML = this.createHTMLElement();
            this.htmlElement.classList.add(properties.elementClass);
            this.setHTMLElements();
        }
    }

    private setProperties(properties: ICanvasOtionsProperties) {
        this.componentLabel = properties.componentLabel || 'Canvas options';
        this.colorLabel = properties.colorLabel || 'background-color';
        this.widthLabel = properties.widthLabel || 'width';
        this.heightLabel = properties.heightLabel || 'height';
    }

    private setHTMLElements() {
        console.log('not implemented');
    }

    private createHTMLElement() {
        const innerHTML = `
            <div class="canvas-options">
                <h2>${this.componentLabel}</h2>
                <label>${this.colorLabel}</label>
                <div class="color-controller-co">
                </div>
                <label>${this.widthLabel}</label>
                <div class="width-controller-co"></div>
                <label>${this.heightLabel}</label>
                <div class="height-controller"></div>
            </div>
                `.trim();
    }
}
