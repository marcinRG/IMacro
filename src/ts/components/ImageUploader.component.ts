import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import {ISubscribe} from 'crappyuielements';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/mergeMap';
import {IImageUploaderProperties} from '../model/interfaces/Properties/IImageUploader.Properties';
import {IEvent} from '../model/interfaces/IEvent';
import {ImagePropertyNames} from '../model/enums/ImagePropertyNames';

export class ImageUploaderComponent implements ISubscribe<any> {
    private htmlElement;
    private htmlUploadButton;
    private htmlUploadInput;
    private labelButton;
    private labelForm;
    private labelImage;
    private labelImageName;
    private labelImageSize;
    private fileEventSource: Observable<any>;

    constructor(properties: IImageUploaderProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.setProperties(properties);
            this.htmlElement.innerHTML = this.createHTMLElement();
            this.htmlElement.classList.add(properties.elementClass);
            this.setHTMLElements();
        }
    }

    public getObservable(): Observable<any> {
        return this.fileEventSource;
    }

    public subscribe(observer: Observer<any>) {
        this.fileEventSource.subscribe(observer);
    }

    private setProperties(properties: IImageUploaderProperties) {
        this.labelForm = properties.labelForm || 'image uploader';
        this.labelButton = properties.labelButton || 'upload an image';
        this.labelImage = properties.labelImage || 'image';
        this.labelImageName = properties.labelImageName || 'image name';
        this.labelImageSize = properties.labelImageSize || 'image size';
    }

    private setHTMLElements() {
        this.htmlUploadInput = this.htmlElement.querySelector('.upload-input');
        this.htmlUploadButton = this.htmlElement.querySelector('.upload-button');
        this.htmlUploadButton.addEventListener('click', () => {
            this.htmlUploadInput.click();
        });
        this.fileEventSource = Observable.fromEvent(this.htmlUploadInput, 'change')
            .flatMap((event: Event) => this.loadImage(event));
    }

    private createImageThumbnail() {
        const innerHTML = `
            <label>${this.labelImage}</label>
            <img src="img/img-template.png" class="upload-image">
            <label>${this.labelImageName}</label>
            <span class='upload-text'></span>
            <label>${this.labelImageSize}</label>
            <span class="upload-image-properties"></span>
        `.trim();
        return innerHTML;
    }

    private createHTMLElement() {
        const innerHTML = `
        <div class="image-uploader">
           <form class='upload-form'>
                <label>${this.labelForm}</label>
                <input class='upload-button' type='button' value='${this.labelButton}'>
                <input class='upload-input' type='file' accept='image/x-png,image/jpeg' style='display:none'>
                <div class="image-thumbnail">
                </div>
            </form>
        </div>`.trim();
        return innerHTML;
    }

    private loadImage(event: Event) {
        return Observable.create((observer) => {
            const file: File = (<HTMLInputElement> event.target).files[0];
            if (file) {
                const fileReader = new FileReader();
                fileReader.addEventListener('load', () => {
                    const img: HTMLImageElement = new Image();
                    img.src = fileReader.result;
                    img.addEventListener('load', () => {
                        this.addImgThumbnail(file.name, fileReader.result, img);
                        observer.next({name: ImagePropertyNames.IMAGE, value: img});
                        observer.complete();
                    });
                });
                fileReader.readAsDataURL(file);
            }
        });
    }

    private addImgThumbnail(fileName: string, imgFile: HTMLImageElement, img: any) {
        const imgThumbnail = this.htmlElement.querySelector('.image-thumbnail');
        imgThumbnail.innerHTML = this.createImageThumbnail();
        const imgName = this.htmlElement.querySelector('.upload-text');
        const imgImage = this.htmlElement.querySelector('.upload-image');
        const imgSize = this.htmlElement.querySelector('.upload-image-properties');
        imgName.textContent = fileName;
        imgImage.src = imgFile;
        imgSize.textContent = img.width + ' x ' + img.height;
    }
}
