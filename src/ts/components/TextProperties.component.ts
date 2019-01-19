import {RxSlider} from '../rxUiElements/RxSlider';
import * as utils from './../utils/Utils';
import {RxMultiUseComboBox} from '../rxUiElements/RxMultiUseComboBox';
import {ITextPropertiesProperties} from '../model/interfaces/Properties/ITextProperties.properties';
import {ISubscribe} from 'crappyuielements';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import {TextPropertyNames} from '../model/enums/TextPropertyNames';
import {RxSpinner} from '../rxUiElements/RxSpinner';
import {RxCheckBox} from '../rxUiElements/RxCheckBox';

export class TextPropertiesComponent implements ISubscribe<any> {
    private componentLabel: string;
    private positionXLabel: string;
    private textLabel: string;
    private fontSizeLabel: string;
    private fontFamilyLabel: string;
    private positionYLabel: string;
    private fontColorLabel: string;
    private shadowLabel: string;
    private shadowColorLabel: string;
    private shadowBlurLabel: string;
    private shadowOffsetXLabel: string;
    private shadowOffsetYLabel: string;
    private shadowCheckboxLabel: string;
    private strokeLabel: string;
    private strokeCheckBoxLabel: string;
    private strokeColorLabel: string;
    private strokeWidthLabel: string;
    private htmlElement;
    private positionXSlider: RxSlider;
    private positionYSlider: RxSlider;
    private fontColorBox: RxMultiUseComboBox;
    private fontFamilyCBox: RxMultiUseComboBox;
    private fontSizeSpinner: RxSpinner;
    private strokeWidthSpinner: RxSpinner;
    private strokeColorComboBox: RxMultiUseComboBox;
    private shadowColorBox: RxMultiUseComboBox;
    private shadowCheckBox: RxCheckBox;
    private strokeCheckBox: RxCheckBox;
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
            this.addTextInputListener(properties);
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
        this.shadowColorBox.subscribe(this.subject);
        this.shadowBlurSlider.subscribe(this.subject);
        this.shadowOffsetXSlider.subscribe(this.subject);
        this.shadowOffsetYSlider.subscribe(this.subject);
        this.fontSizeSpinner.subscribe(this.subject);
        this.fontFamilyCBox.subscribe(this.subject);
        this.shadowCheckBox.subscribe(this.subject);
        this.strokeColorComboBox.subscribe(this.subject);
        this.strokeCheckBox.subscribe(this.subject);
        this.strokeWidthSpinner.subscribe(this.subject);
    }

    private setProperties(properties: ITextPropertiesProperties) {
        this.componentLabel = properties.componentLabel || 'Text properties';
        this.textLabel = properties.textLabel || 'Text';
        this.fontSizeLabel = properties.fontSizeLabel || 'font size';
        this.fontFamilyLabel = properties.fontFamilyLabel || 'font family';
        this.positionXLabel = properties.positionXLabel || 'position x';
        this.positionYLabel = properties.positionYLabel || 'position y';
        this.fontColorLabel = properties.fontColorLabel || 'font color';
        this.shadowLabel = properties.shadowLabel || 'shadow';
        this.shadowColorLabel = properties.shadowColorLabel || 'shadow color';
        this.shadowBlurLabel = properties.shadowBlurLabel || 'shadow blur';
        this.shadowOffsetXLabel = properties.shadowOffsetXLabel || 'offset x';
        this.shadowOffsetYLabel = properties.shadowOffsetYLabel || 'offset y';
        this.shadowCheckboxLabel = properties.shadowCheckBoxLabel || 'add shadow';
        this.strokeLabel = properties.strokeLabel || 'stroke';
        this.strokeCheckBoxLabel = properties.strokeCheckBoxLabel || 'add stroke';
        this.strokeColorLabel = properties.strokeColorLabel || 'stroke color';
        this.strokeWidthLabel = properties.strokeWidthLabel || 'stroke width';

    }

    private addTextInputListener(properties) {
        const txtInputSelector = `${properties.querySelectorString} .txt-field`;
        const elem = document.querySelector(txtInputSelector);
        const observable = Observable.fromEvent(elem, 'input').map((value: Event) => {
            const inputTxt = <HTMLInputElement> value.srcElement;
            return {
                name: TextPropertyNames.TEXT,
                value: inputTxt.value,
            };
        }).debounceTime(500);
        observable.subscribe(this.subject);
    }

    private createFontFamilyComboBox(properties) {
        const fontFamilyCBoxSelector = `${properties.querySelectorString} .font-family-cbox-text`;
        const fontSett = properties.componentSettings.fontFamily;
        return utils.createFontBox(fontFamilyCBoxSelector, TextPropertyNames.TEXT_FONT_FAMILY,
            fontSett.fonts, fontSett.selected);
    }

    private createStrokeColorComboBox(properties) {
        const selector = `${properties.querySelectorString} .stroke-color-combo-box-text`;
        const sets = properties.componentSettings.strokeColor;
        return utils.createColorBox(selector, TextPropertyNames.TEXT_STROKE_COLOR,
            sets.colors, sets.selected);
    }

    private createFontSizeSpinner(properties) {
        const fontSizeSelector = `${properties.querySelectorString} .font-size-spinner-text`;
        const sizeSett = properties.componentSettings.fontSize;
        return utils.createSpinner(sizeSett.min, sizeSett.max, sizeSett.value, sizeSett.delta,
            TextPropertyNames.TEXT_SIZE, fontSizeSelector);
    }

    private createStrokeWidthSpinner(properties) {
        const strokeWidthSelector = `${properties.querySelectorString} .stroke-width-spinner-text`;
        const sets = properties.componentSettings.strokeWidth;
        return utils.createSpinner(sets.min, sets.max, sets.value, sets.delta,
            TextPropertyNames.TEXT_STROKE_WIDTH, strokeWidthSelector);
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

    private createStrokeCheckBox(properties) {
        const checkBoxSelector = `${properties.querySelectorString} .stroke-enabled-text`;
        const checkBox = new RxCheckBox(
            {
                querySelectorString: checkBoxSelector,
                elementClass: 'checkbox-div',
                propertyName: TextPropertyNames.TEXT_STROKE_ENABLED,
                checkBoxLabel: this.strokeCheckBoxLabel,
            });
        return checkBox;
    }

    private createShadowCheckBox(properties) {
        const checkBoxSelector = `${properties.querySelectorString} .shadow-enabled-text`;
        const checkBox = new RxCheckBox(
            {
                querySelectorString: checkBoxSelector,
                elementClass: 'checkbox-div',
                propertyName: TextPropertyNames.TEXT_SHADOW_ENBLED,
                checkBoxLabel: this.shadowCheckboxLabel,
            });
        return checkBox;
    }

    private setHTMLElements(properties: ITextPropertiesProperties) {
        this.positionXSlider = this.createPositionXSlider(properties);
        this.positionYSlider = this.createPositionYSlider(properties);
        this.shadowBlurSlider = this.createBlurSlider(properties);
        this.shadowOffsetXSlider = this.createOffsetXSlider(properties);
        this.shadowOffsetYSlider = this.createOffsetYSlider(properties);
        this.fontColorBox = this.createFontColorCBox(properties);
        this.shadowColorBox = this.createShadowColorCBox(properties);
        this.fontFamilyCBox = this.createFontFamilyComboBox(properties);
        this.fontSizeSpinner = this.createFontSizeSpinner(properties);
        this.shadowCheckBox = this.createShadowCheckBox(properties);
        this.strokeCheckBox = this.createStrokeCheckBox(properties);
        this.strokeWidthSpinner = this.createStrokeWidthSpinner(properties);
        this.strokeColorComboBox = this.createStrokeColorComboBox(properties);
    }

    private createHTMLElement() {
        const innerHTML = `
            <h2>${this.componentLabel}</h2>
            <label>${this.textLabel}</label>
            <input type="text" class="txt-field">
            <label>${this.fontSizeLabel}</label>
            <div class="font-size-spinner-text"></div>
            <label>${this.fontFamilyLabel}</label>
            <div class="font-family-cbox-text"></div>
            <label>${this.positionXLabel}</label>
            <div class="positionx-slider-text"></div>
            <label>${this.positionYLabel}</label>
            <div class="positiony-slider-text"></div>
            <label>${this.fontColorLabel}</label>
            <div class="font-color-combo-box-text"></div>
            <label>${this.strokeLabel}</label>
            <div class="stroke-enabled-text"></div>
            <label>${this.strokeColorLabel}</label>
            <div class="stroke-color-combo-box-text"></div>
            <label>${this.strokeWidthLabel}</label>
            <div class="stroke-width-spinner-text"></div>
            <label>${this.shadowLabel}</label>
            <div class="shadow-enabled-text"></div>
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
