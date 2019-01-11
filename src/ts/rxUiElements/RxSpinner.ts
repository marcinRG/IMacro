import {IIterable, ISpinnerProperties, ISubscribe, Spinner} from 'crappyuielements';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {IEvent} from '../model/interfaces/IEvent';

export class RxSpinner extends Spinner implements ISubscribe<any> {
    private subject: Subject<IEvent> = new Subject();

    constructor(properties: ISpinnerProperties, public iterable: IIterable<any>, private propertyName: string) {
        super(properties, iterable);
    }

    public changeValue(direction: string) {
        if (direction === 'next') {
            if (!this.iterable.isAtEnd()) {
                this.iterable.next();
            }
        }
        if (direction === 'previous') {
            if (!this.iterable.isAtStart()) {
                this.iterable.previous();
            }
        }
        this.subject.next({
            name: this.propertyName,
            value: this.iterable.selected,
        });
        return this.iterable.selected;
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }
}
