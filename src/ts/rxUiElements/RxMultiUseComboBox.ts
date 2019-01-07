import {
    IFilteredValuesList, IGetText,
    IHasID,
    IList,
    IMultiUseComboBoxProperties,
    ISubscribe,
    MultiUseComboBox,
} from 'crappyuielements';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

export class RxMultiUseComboBox extends MultiUseComboBox implements ISubscribe<any> {
    private subject: Subject<any> = new Subject<any>();

    constructor(properties: IMultiUseComboBoxProperties,
                public selectableList: IFilteredValuesList<IHasID> & IList<IHasID> & IGetText<IHasID>,
                private propertyName: string) {
        super(properties, selectableList);
    }

    public changeValue(ID: string) {
        const index = this.selectableList.getIndex(ID);
        this.selectableList.selected = this.selectableList.values[index];
        this.subject.next(this.selectableList.selected);
    }

    public getObservable(): Observable<any> {
        return this.subject;
    }

    public subscribe(observer: Observer<any>) {
        this.subject.subscribe(observer);
    }
}
