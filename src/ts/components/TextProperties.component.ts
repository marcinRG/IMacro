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
    private shadowOffsetYSlider: RxSlider;
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
        this.shadowOffsetYSlider.subscribe(this.subject);
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

    private createPositionXSlider(properties) {
        const positionXSliderSelector = `${properties.querySelectorString} .positionx-slider-text`;
        const xpos = properties.componentSettings.minMaxPositionX;
        return utils.createSlider(xpos.min, xpos.max, xpos.defaultVal,
            TextPropertyNames.TEXT_POSITION_X, positionXSliderSelector);
    }

    private createPositionYSlider(properties) {
        const positionYSliderSelector = `${properties.querySelectorString} .positiony-slider-text`;
        const ypos = properties.componentSettings.minMaxPositionY;
        return utils.createSlider(ypos.min, ypos.max, ypos.defaultVal,
            TextPropertyNames.TEXT_POSITION_Y, positionYSliderSelector);
    }

    private createRotationSlider(properties) {
        const rotationSliderSelector = `${properties.querySelectorString} .rotation-slider-text`;
        const rot = properties.componentSettings.minMaxRotation;
        return utils.createSlider(rot.min, rot.max, rot.defaultVal,
            TextPropertyNames.TEXT_ROTATION, rotationSliderSelector);
    }

    private createBlurSlider(properties) {
        const blur = properties.componentSettings.minMaxShadowBlur;
        const shadowBlurSliderSelector = `${properties.querySelectorString} .shadow-blur-slider-text`;
        return utils.createSlider(blur.min, blur.max, blur.defaultVal,
            TextPropertyNames.TEXT_SHADOW_BLUR, shadowBlurSliderSelector);
    }

    private createOffsetXSlider(properties) {
        const shadowOffsetXSliderSelector = `${properties.querySelectorString} .offsetx-slider-text`;
        const offsetX = properties.componentSettings.minMaxShadowOffsetX;
        return utils.createSlider(offsetX.min, offsetX.max, offsetX.defaultVal,
            TextPropertyNames.TEXT_SHADOW_OFFSET_X, shadowOffsetXSliderSelector);
    }

    private createOffsetYSlider(properties) {
        const shadowOffsetYSliderSelector = `${properties.querySelectorString} .offsety-slider-text`;
        const offsetY = properties.componentSettings.minMaxShadowOffsetY;
        return utils.createSlider(offsetY.min, offsetY.max, offsetY.defaultVal,
            TextPropertyNames.TEXT_SHADOW_OFFSET_Y, shadowOffsetYSliderSelector);
    }

    private createFontColorCBox(properties) {
        const fontColorCBoxSelector = `${properties.querySelectorString} .font-color-combo-box-text`;
        const fontCol = properties.componentSettings.textColor;
        return utils.createColorBox(fontColorCBoxSelector, TextPropertyNames.TEXT_COLOR,
            fontCol.colors, fontCol.selected);
    }

    private createShadowColorCBox(properties) {
        const shadowColorCBoxSelector = `${properties.querySelectorString} .shadow-color-combo-box-text`;
        const shadowCol = properties.componentSettings.shadowColor;
        return utils.createColorBox(shadowColorCBoxSelector, TextPropertyNames.TEXT_SHADOW_COLOR,
            shadowCol.colors, shadowCol.selected);
    }

    private setHTMLElements(properties: ITextPropertiesProperties) {
        this.positionXSlider = this.createPositionXSlider(properties);
        this.positionYSlider = this.createPositionYSlider(properties);
        this.rotationSlider = this.createRotationSlider(properties);
        this.shadowBlurSlider = this.createBlurSlider(properties);
        this.shadowOffsetXSlider = this.createOffsetXSlider(properties);
        this.shadowOffsetYSlider = this.createOffsetYSlider(properties);
        this.fontColorBox = this.createFontColorCBox(properties);
        this.shadowColorBox = this.createShadowColorCBox(properties);
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
