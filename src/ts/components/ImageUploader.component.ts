import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import {ISubscribe} from '../model/interfaces/ISubscribe';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/mergeMap';

export class ImageUploaderComponent implements ISubscribe<any> {
    private htmlElement;
    private inputUpload;
    private upLoadName;
    //private thumbnail;
    private fileEventSource: Observable<any>;

    constructor(elementQuery: string, labelTxt: string, btnTxt: string) {
        this.htmlElement = document.querySelector(elementQuery);
        if (this.htmlElement) {
            this.htmlElement.innerHTML = null;
            this.createElement(labelTxt, btnTxt);
        }
    }

    public getObservable(): Observable<any> {
        return this.fileEventSource;
    }

    public subscribe(observer: Observer<any>) {
        this.fileEventSource.subscribe(observer);
    }

    private createElement(labelText: string, buttonText: string) {
        const innerHTML = `
        <form class='upload-form'>
           <label class='upload-label'>${labelText}</label>
           <input class='upload-button' type='button' value='${buttonText}'>
           <input class='upload-input' type='file' accept='image/x-png,image/jpeg' style='display:none'>
           <span class='upload-text'></span>
        </form>`.trim();
        this.htmlElement.innerHTML = innerHTML;
        this.inputUpload = this.htmlElement.querySelector('.upload-input');
        this.upLoadName = this.htmlElement.querySelector('.upload-text');
        const btn = this.htmlElement.querySelector('.upload-button');

        btn.addEventListener('click', () => {
            this.inputUpload.click();
        });

        this.fileEventSource = Observable.fromEvent(this.inputUpload, 'change')
            .flatMap((event: Event) => this.loadImage(event));
    }

    private loadImage(event: Event) {
        return Observable.create((observer) => {
            const file: File = (<HTMLInputElement> event.target).files[0];
            if (file) {
                this.addFileName(file);
                const fileReader = new FileReader();
                fileReader.addEventListener('load', () => {
                    const img = new Image();
                    img.src = fileReader.result;
                    img.addEventListener('load', () => {
                        this.addImgThumbnail();
                        observer.next(img);
                        observer.complete();
                    });
                });
                fileReader.readAsDataURL(file);
            }
        });
    }

    private addImgThumbnail() {
       console.log('not implemented');
    }

    private addFileName(file: File) {
        this.upLoadName.textContent = file.name;
    }
}
