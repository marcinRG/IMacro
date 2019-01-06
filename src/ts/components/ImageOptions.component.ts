import {IImageOptionsProperties} from '../model/interfaces/Properties/IImageOptions.Properties';
import {ImageUploaderComponent} from './ImageUploader.component';
import {DirectionsRadioBtnsGroup, MinMaxValue, PlainTextArrayWithFilterSingleSelection, Slider} from 'crappyuielements';

export class ImageOptionsComponent {
    private htmlElement;
    private imageUploader;
    private imagePositionBox;
    private imageRotationCenter;
    private imageRotationSlider;
    private imageSizeSlider;
    private imageTransparencySlider;
    private componentLabel: string;
    private positionLabel: string;
    private rotationLabel: string;
    private rotationCenterLabel: string;
    private sizeLabel: string;
    private transparencyLabel: string;

    constructor(properties: IImageOptionsProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.setProperties(properties);
            this.htmlElement.innerHTML = this.createHTMLElement();
            this.htmlElement.classList.add(properties.elementClass);
            this.setHTMLElements(properties);
        }
    }

    private setProperties(properties: IImageOptionsProperties) {
        this.componentLabel = properties.componentLabel || 'Image options';
        this.positionLabel = properties.positionLabel || 'image position';
        this.rotationLabel = properties.rotationLabel || 'rotation';
        this.rotationCenterLabel = properties.rotationCenterLabel || 'rotation center';
        this.sizeLabel = properties.sizeLabel || 'size';
        this.transparencyLabel = properties.transparencyLabel || 'transparency';
    }

    private setHTMLElements(properties: IImageOptionsProperties) {
        const imageUploaderSelector = `${properties.querySelectorString} .img-uploader-1`;
        const postionBtnGroupSelector = `${properties.querySelectorString} .position-radio-group-image`;
        const rotationSliderSelector = `${properties.querySelectorString} .rotation-slider-image`;
        const rotationBtnGroupSelector = `${properties.querySelectorString} .rotation-radio-group-image`;
        const sizeSliderSelector = `${properties.querySelectorString} .size-slider-image`;
        const transparencySliderSelector = `${properties.querySelectorString} .transparency-slider-image`;
        this.imageUploader = new ImageUploaderComponent({
            querySelectorString: imageUploaderSelector,
            elementClass: 'image-uploader',
        });
        const txtArray = new PlainTextArrayWithFilterSingleSelection(properties.directionsArray);
        this.imagePositionBox = new DirectionsRadioBtnsGroup({
            elementClass: 'radio-btn-group-cuie',
            querySelectorString: postionBtnGroupSelector,
            radioGroupName: 'directrion-group',
        }, txtArray);

        const txtArray2 = new PlainTextArrayWithFilterSingleSelection(properties.rotationsCenterArray);
        this.imageRotationCenter = new DirectionsRadioBtnsGroup({
            elementClass: 'radio-btn-group-cuie',
            querySelectorString: rotationBtnGroupSelector,
            radioGroupName: 'directrion-group',
        }, txtArray2);
        this.imageRotationSlider = this.createSlider(rotationSliderSelector);
        this.imageSizeSlider = this.createSlider(sizeSliderSelector);
        this.imageTransparencySlider = this.createSlider(transparencySliderSelector);
    };

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
                <h2>${this.componentLabel}</h2>
                <div class="img-uploader-1"></div>
                <label>${this.positionLabel}</label>
                <div class="position-radio-group-image"></div>
                <label>${this.rotationCenterLabel}</label>
                <div class="rotation-radio-group-image"></div>
                <label>${this.rotationLabel}</label>
                <div class="rotation-slider-image"></div>
                <label>${this.sizeLabel}</label>
                <div class="size-slider-image"></div>
                <label>${this.transparencyLabel}</label>
                <div class="transparency-slider-image"></div>`.trim();
        return innerHTML;
    }
}
