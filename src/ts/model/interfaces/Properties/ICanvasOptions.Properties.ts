import {IComponentProperties} from
        'crappyuielements/CrappyUIElements/Interfaces/Component.Properties/IComponent.Properties';
import {IColor} from 'crappyuielements';

export interface ICanvasOptionsProperties extends IComponentProperties {
    componentLabel?: string;
    colorLabel?: string;
    widthLabel?: string;
    heightLabel?: string;
    colors: IColor[];
}
