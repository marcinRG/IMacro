import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {ISliderProperties, ISubscribe, IValueTransformation, Slider} from 'crappyuielements';
import {IEvent} from '../model/interfaces/IEvent';

export class RxSlider extends Slider implements ISubscribe<any> {
    private subject: Subject<IEvent> = new Subject();

    constructor(properties: ISliderProperties, public minMaxValue: IValueTransformation<any>,
                private propertyName: string) {
        super(properties, minMaxValue);
    }

    public changeValue(x: number, min: number, max: number) {
        this.minMaxValue.value = this.minMaxValue.reverseTransformation(
            x, min, max);
        this.subject.next({
            name: this.propertyName,
            value: this.minMaxValue.value,
        });
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }
}
