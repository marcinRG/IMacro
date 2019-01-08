import {DirectionsRadioBtnsGroup, IDirectionsRadioBtnsGroupProperties, IList, ISubscribe} from 'crappyuielements';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {IEvent} from '../model/interfaces/IEvent';

export class RxDirectionsRadioGroup extends DirectionsRadioBtnsGroup implements ISubscribe<any> {
    private subject: Subject<IEvent> = new Subject();

    constructor(properties: IDirectionsRadioBtnsGroupProperties, public list: IList<any>,
                private propertyName: string) {
        super(properties, list);
    }

    public changeToSelected(ID: string) {
        const index = this.list.getIndex(ID);
        this.list.selected = this.list.values[index];
        this.subject.next({
            name: this.propertyName,
            value: this.list.selected,
        });
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }
}
