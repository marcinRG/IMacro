import {ICanvasOptionsProperties} from '../model/interfaces/Properties/ICanvasOptions.Properties';
import {RxSlider} from '../rxUiElements/RxSlider';
import {RxMultiUseComboBox} from '../rxUiElements/RxMultiUseComboBox';
import * as utils from './../utils/Utils';
import {ISubscribe} from 'crappyuielements';
import {Observable, Observer, Subject} from 'rxjs';
import {CanvasPropertyNames} from '../model/enums/CanvasPropertyNames';

export class CanvasOptionsComponent implements ISubscribe<any> {
    private htmlElement;
    private colorBox: RxMultiUseComboBox;
    private heightSlider: RxSlider;
    private widthSlider: RxSlider;
    private componentLabel: string;
    private colorLabel: string;
    private widthLabel: string;
    private heightLabel: string;
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: ICanvasOptionsProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.setProperties(properties);
            this.htmlElement.innerHTML = this.createHTMLElement();
            this.htmlElement.classList.add(properties.elementClass);
            this.setHTMLElements(properties);
            this.subscribeToUIComponents();
        }
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }

    private subscribeToUIComponents() {
        this.heightSlider.subscribe(this.subject);
        this.widthSlider.subscribe(this.subject);
        this.colorBox.subscribe(this.subject);
    }

    private setProperties(properties: ICanvasOptionsProperties) {
        this.componentLabel = properties.componentLabel || 'Canvas options';
        this.colorLabel = properties.colorLabel || 'background-color';
        this.widthLabel = properties.widthLabel || 'width';
        this.heightLabel = properties.heightLabel || 'height';
    }

    private setHTMLElements(properties: ICanvasOptionsProperties) {
        const colorBoxSelector = `${properties.querySelectorString} .color-controller-canvas`;
        this.colorBox = utils.createColorBox(colorBoxSelector,
            CanvasPropertyNames.CANVAS_COLOR, properties.colors);
        const widthSelector = `${properties.querySelectorString} .width-controller-canvas`;
        this.widthSlider = utils.createSlider(0, 100, 50,
            CanvasPropertyNames.CANVAS_WIDTH, widthSelector);
        const heightSelector = `${properties.querySelectorString} .height-controller-canvas`;
        this.heightSlider = utils.createSlider(0, 100, 50,
            CanvasPropertyNames.CANVAS_HEIGHT, heightSelector);
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
