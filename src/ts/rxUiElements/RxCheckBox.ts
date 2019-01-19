import {ISubscribe} from 'crappyuielements';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {ICheckBoxProperties} from '../model/interfaces/Properties/ICheckBox.properties';

export class RxCheckBox implements ISubscribe<any> {
    private checkBoxLabel;
    private htmlElement;
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: ICheckBoxProperties) {
        this.htmlElement = document.querySelector(properties.querySelectorString);
        if (this.htmlElement) {
            this.setProperties(properties);
            this.htmlElement.innerHTML = this.createHTMLElements();
            this.htmlElement.classList.add(properties.elementClass);
            this.addCheckboxListener(properties);
        }
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }

    private setProperties(properties: ICheckBoxProperties) {
        this.checkBoxLabel = properties.checkBoxLabel;
    }

    private addCheckboxListener(properties: ICheckBoxProperties) {
        const checkboxSelector = `.input-checkbox-text`;
        const elem = this.htmlElement.querySelector(checkboxSelector);
        const observable = Observable.fromEvent(elem, 'click').map((value: Event) => {
            const checkbox = <HTMLInputElement> value.srcElement;
            return {
                name: properties.propertyName,
                value: checkbox.checked,
            };
        });
        observable.subscribe(this.subject);
    }

    private createHTMLElements() {
        const innerHTML = `
          <span class="checkbox-span"><input type="checkbox" class="input-checkbox-text"></span>
          <span class="checkbox-label">${this.checkBoxLabel}</span>
        `.trim();
        return innerHTML;
    }
}
