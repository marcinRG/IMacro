import {IImageOptionsProperties} from '../model/interfaces/Properties/IImageOptions.Properties';
import {ImageUploaderComponent} from './ImageUploader.component';
import {RxDirectionsRadioGroup} from '../rxUiElements/RXDirectionsRadioGroup';
import {RxSlider} from '../rxUiElements/RxSlider';
import * as utils from './../utils/Utils';
import {ISubscribe} from 'crappyuielements';
import {Observable, Observer, Subject} from 'rxjs';
import {ImagePropertyNames} from '../model/enums/ImagePropertyNames';

export class ImageOptionsComponent implements ISubscribe<any> {
    private htmlElement;
    private imageUploader: ImageUploaderComponent;
    private imagePositionBox: RxDirectionsRadioGroup;
    private imageRotationCenter: RxDirectionsRadioGroup;
    private imageRotationSlider: RxSlider;
    private imageSizeSlider: RxSlider;
    private imageTransparencySlider: RxSlider;
    private componentLabel: string;
    private positionLabel: string;
    private rotationLabel: string;
    private rotationCenterLabel: string;
    private sizeLabel: string;
    private transparencyLabel: string;
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: IImageOptionsProperties) {
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
        this.imageUploader.subscribe(this.subject);
        this.imagePositionBox.subscribe(this.subject);
        this.imageRotationCenter.subscribe(this.subject);
        this.imageRotationSlider.subscribe(this.subject);
        this.imageSizeSlider.subscribe(this.subject);
        this.imageTransparencySlider.subscribe(this.subject);
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
        this.imageUploader = this.createImageUploader(properties);
        this.imagePositionBox = this.createPositionBtnGroup(properties);
        this.imageRotationCenter = this.createRotationBtnGroup(properties);
        this.imageRotationSlider = this.createRotationSlider(properties);
        this.imageSizeSlider = this.createSizeSlider(properties);
        this.imageTransparencySlider = this.createTransparencySlider(properties);
    }

    private createRotationSlider(properties) {
        const rotationSliderSelector = `${properties.querySelectorString} .rotation-slider-image`;
        const rot = properties.componentSettings.minMaxRotation;
        return utils.createSlider(rot.min, rot.max, rot.defaultVal,
            ImagePropertyNames.IMAGE_ROTATION, rotationSliderSelector);
    }

    private createSizeSlider(properties) {
        const sizeSliderSelector = `${properties.querySelectorString} .size-slider-image`;
        const size = properties.componentSettings.minMaxSize;
        return utils.createSlider(size.min, size.max, size.defaultVal,
            ImagePropertyNames.IMAGE_SCALE, sizeSliderSelector);
    }

    private createTransparencySlider(properties) {
        const transparencySliderSelector = `${properties.querySelectorString} .transparency-slider-image`;
        const trans = properties.componentSettings.minMaxTransparency;
        return utils.createSlider(trans.min, trans.max, trans.defaultVal,
            ImagePropertyNames.IMAGE_TRANSPARENCY, transparencySliderSelector);
    }

    private createImageUploader(properties) {
        const imageUploaderSelector = `${properties.querySelectorString} .img-uploader-1`;
        return new ImageUploaderComponent({
            querySelectorString: imageUploaderSelector,
            elementClass: 'image-uploader',
        });
    }

    private createPositionBtnGroup(properties) {
        const positionBtnGroupSelector = `${properties.querySelectorString} .position-radio-group-image`;
        const directions = properties.componentSettings.directions.array;
        const selectedDirection = properties.componentSettings.directions.selected;
        return utils.createDirectionsRadioGroup(
            positionBtnGroupSelector, ImagePropertyNames.IMAGE_POSITION,
            'directrion-group', directions, selectedDirection);
    }

    private createRotationBtnGroup(properties) {
        const rotationBtnGroupSelector = `${properties.querySelectorString} .rotation-radio-group-image`;
        const rotations = properties.componentSettings.rotations.array;
        const selectedRotation = properties.componentSettings.rotations.selected;
        return utils.createDirectionsRadioGroup(rotationBtnGroupSelector,
            ImagePropertyNames.IMAGE_ROTATION_CENTER, 'rotation-group', rotations, selectedRotation);
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
