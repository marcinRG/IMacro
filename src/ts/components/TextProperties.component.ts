import {RxSlider} from '../rxUiElements/RxSlider';
import * as utils from './../utils/Utils';
import {RxMultiUseComboBox} from '../rxUiElements/RxMultiUseComboBox';
import {ITextPropertiesProperties} from '../model/interfaces/Properties/ITextProperties.properties';
import {ISubscribe} from 'crappyuielements';
import {Observable, Observer, Subject} from 'rxjs';
import {TextPropertyNames} from '../model/enums/TextPropertyNames';

export class TextPropertiesComponent implements ISubscribe<any> {
    private componentLabel: string;
    private positionXLabel: string;
    private textLabel: string;
    private positionYLabel: string;
    private fontColorLabel: string;
    private rotationLabel: string;
    private shadowLabel: string;
    private shadowColorLabel: string;
    private shadowBlurLabel: string;
    private shadowOffsetXLabel: string;
    private shadowOffsetYLabel: string;
    private htmlElement;
    private positionXSlider: RxSlider;
    private positionYSlider: RxSlider;
    private fontColorBox: RxMultiUseComboBox;
    private rotationSlider: RxSlider;
    private shadowColorBox: RxMultiUseComboBox;
    private shadowBlurSlider: RxSlider;
    private shadowOffsetXSlider: RxSlider;
    private shadowOffsetTSlider: RxSlider;
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: ITextPropertiesProperties) {
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
        this.positionXSlider.subscribe(this.subject);
        this.positionYSlider.subscribe(this.subject);
        this.fontColorBox.subscribe(this.subject);
        this.rotationSlider.subscribe(this.subject);
        this.shadowColorBox.subscribe(this.subject);
        this.shadowBlurSlider.subscribe(this.subject);
        this.shadowOffsetXSlider.subscribe(this.subject);
        this.shadowOffsetTSlider.subscribe(this.subject);
    }

    private setProperties(properties: ITextPropertiesProperties) {
        this.componentLabel = properties.componentLabel || 'Text properties';
        this.textLabel = properties.textLabel || 'Text';
        this.positionXLabel = properties.positionXLabel || 'position x';
        this.positionYLabel = properties.positionYLabel || 'position y';
        this.fontColorLabel = properties.fontColorLabel || 'font color';
        this.rotationLabel = properties.rotationLabel || 'rotation';
        this.shadowLabel = properties.shadowLabel || 'shadow';
        this.shadowColorLabel = properties.shadowColorLabel || 'shadow color';
        this.shadowBlurLabel = properties.shadowBlurLabel || 'shadow blur';
        this.shadowOffsetXLabel = properties.shadowOffsetXLabel || 'offset x';
        this.shadowOffsetYLabel = properties.shadowOffsetYLabel || 'offset y';
    }

    private setHTMLElements(properties: ITextPropertiesProperties) {
        const positionXSliderSelector = `${properties.querySelectorString} .positionx-slider-text`;
        this.positionXSlider = utils.createSlider(0, 100, 50,
            TextPropertyNames.TEXT_POSITION_X, positionXSliderSelector);
        const positionYSliderSelector = `${properties.querySelectorString} .positiony-slider-text`;
        this.positionYSlider = utils.createSlider(0, 100, 50,
            TextPropertyNames.TEXT_POSITION_Y, positionYSliderSelector);
        const fontColorCBoxSelector = `${properties.querySelectorString} .font-color-combo-box-text`;
        this.fontColorBox = utils.createColorBox(fontColorCBoxSelector, TextPropertyNames.TEXT_COLOR,
            properties.fontColorsArray);
        const rotationSliderSelector = `${properties.querySelectorString} .rotation-slider-text`;
        this.rotationSlider = utils.createSlider(0, 100, 50,
            TextPropertyNames.TEXT_ROTATION, rotationSliderSelector);
        const shadowColorCBoxSelector = `${properties.querySelectorString} .shadow-color-combo-box-text`;
        this.shadowColorBox = utils.createColorBox(shadowColorCBoxSelector, TextPropertyNames.TEXT_SHADOW_COLOR,
            properties.shadowColorsArray);
        const shadowBlurSliderSelector = `${properties.querySelectorString} .shadow-blur-slider-text`;
        this.shadowBlurSlider = utils.createSlider(0, 100, 50,
            TextPropertyNames.TEXT_SHADOW_BLUR, shadowBlurSliderSelector);
        const shadowOffsetXSliderSelector = `${properties.querySelectorString} .offsetx-slider-text`;
        this.shadowOffsetXSlider = utils.createSlider(0, 100, 50,
            TextPropertyNames.TEXT_SHADOW_OFFSET_X, shadowOffsetXSliderSelector);
        const shadowOffsetYSliderSelector = `${properties.querySelectorString} .offsety-slider-text`;
        this.shadowOffsetTSlider = utils.createSlider(0, 100, 50,
            TextPropertyNames.TEXT_SHADOW_OFFSET_Y, shadowOffsetYSliderSelector);
    }

    private createHTMLElement() {
        const innerHTML = `
            <h2>${this.componentLabel}</h2>
            <label>${this.textLabel}</label>
            <input type="text" class="txt-field">
            <label>${this.positionXLabel}</label>
            <div class="positionx-slider-text"></div>
            <label>${this.positionYLabel}</label>
            <div class="positiony-slider-text"></div>
            <label>${this.fontColorLabel}</label>
            <div class="font-color-combo-box-text"></div>
            <label>${this.rotationLabel}</label>
            <div class="rotation-slider-text"></div>
            <label>${this.shadowLabel}</label>
            <label>${this.shadowColorLabel}</label>
            <div class="shadow-color-combo-box-text"></div>
            <label>${this.shadowBlurLabel}</label>
            <div class="shadow-blur-slider-text"></div>
            <label>${this.shadowOffsetXLabel}</label>
            <div class="offsetx-slider-text"></div>
            <label>${this.shadowOffsetYLabel}</label>
            <div class="offsety-slider-text"></div>`.trim();
        return innerHTML;
    }
}
