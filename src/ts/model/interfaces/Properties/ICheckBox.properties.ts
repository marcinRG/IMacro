import {IComponentProperties} from 'crappyuielements';
import {TextPropertyNames} from '../../enums/TextPropertyNames';

export interface ICheckBoxProperties extends IComponentProperties{
    propertyName: TextPropertyNames;
    checkBoxLabel: string;
}
