import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {ISliderProperties, ISubscribe, IValueTransformation, Slider} from 'crappyuielements';

export class RxSlider extends Slider implements ISubscribe<any> {
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: ISliderProperties, public minMaxValue: IValueTransformation<any>) {
        super(properties, minMaxValue);
    }

    public changeValue(x: number, min: number, max: number) {
        this.minMaxValue.value = this.minMaxValue.reverseTransformation(
            x, min, max);
        this.subject.next(this.minMaxValue.value);
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }
}
