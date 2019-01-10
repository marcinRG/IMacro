import {IComponentProperties} from
        'crappyuielements/CrappyUIElements/Interfaces/Component.Properties/IComponent.Properties';
import {IColor} from 'crappyuielements';
import {IMinMaxValue} from '../IMinMaxValue';

export interface ICanvasOptionsProperties extends IComponentProperties {
    componentLabel?: string;
    colorLabel?: string;
    widthLabel?: string;
    heightLabel?: string;
    componentSettings: {
        colorSettings: {
            colors: IColor[],
            selected?: IColor,
        },
        minMaxWidth: IMinMaxValue,
        minMaxHeight: IMinMaxValue,
    };
}
