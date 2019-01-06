import {ICanvasOptionsProperties} from '../model/interfaces/Properties/ICanvasOptions.Properties';
import {
    ColorRenderer,
    IColor,
    IdArrayWithSingleSelection,
    MinMaxValue,
    MultiUseComboBox,
    Slider,
} from 'crappyuielements';

export class CanvasOptionsComponent {
    private htmlElement;
    private colorBox;
    private heightSlider;
    private widthSlider;
    private componentLabel: string;
    private colorLabel: string;
    private widthLabel: string;
    private heightLabel: string;

    constructor(properties: ICanvasOptionsProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.setProperties(properties);
            this.htmlElement.innerHTML = this.createHTMLElement();
            this.htmlElement.classList.add(properties.elementClass);
            this.setHTMLElements(properties);
        }
    }

    private setProperties(properties: ICanvasOptionsProperties) {
        this.componentLabel = properties.componentLabel || 'Canvas options';
        this.colorLabel = properties.colorLabel || 'background-color';
        this.widthLabel = properties.widthLabel || 'width';
        this.heightLabel = properties.heightLabel || 'height';
    }

    private setHTMLElements(properties: ICanvasOptionsProperties) {
        const colorBoxSelector = `${properties.querySelectorString} .color-controller-canvas`;
        this.colorBox = this.createColorBox(colorBoxSelector, properties.colors);
        const widthSelector = `${properties.querySelectorString} .width-controller-canvas`;
        this.widthSlider = this.createSlider(widthSelector);
        const heightSelector = `${properties.querySelectorString} .height-controller-canvas`;
        this.heightSlider = this.createSlider(heightSelector);
    }

    private createColorBox(selector: string, colors: IColor[]) {
        const colorRenderer = new ColorRenderer('color-box', 'name-txt');
        const colorArrayId = new IdArrayWithSingleSelection<IColor>(colors, colorRenderer, 'name', colors[0]);
        const colorComboBox = new MultiUseComboBox({
            querySelectorString: selector,
            elementClass: 'multi-combo-box-cuie',
            containerClass: 'color-container',
            maxSize: 5,
            menuZIndex: 50,
        }, colorArrayId);
        return colorComboBox;
    }

    private createSlider(selector: string) {
        const minMax = new MinMaxValue(50, 0, 100);
        const slider = new Slider({
            querySelectorString: selector,
            elementClass: 'slider-cuie',
            pointerWidth: 5,
        }, minMax);
        return slider;
    }

    private createHTMLElement() {
        const innerHTML = `
            <div class="canvas-options">
                <h2>${this.componentLabel}</h2>
                <label>${this.colorLabel}</label>
                <div class="color-controller-canvas">
                </div>
                <label>${this.widthLabel}</label>
                <div class="width-controller-canvas"></div>
                <label>${this.heightLabel}</label>
                <div class="height-controller-canvas"></div>
            </div>
                `.trim();
        return innerHTML;
    }
}
