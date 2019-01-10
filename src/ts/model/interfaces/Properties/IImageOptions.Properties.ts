import {IComponentProperties} from 'crappyuielements';
import {IMinMaxValue} from '../IMinMaxValue';

export interface IImageOptionsProperties extends IComponentProperties {
    componentLabel?: string;
    positionLabel?: string;
    rotationLabel?: string;
    rotationCenterLabel?: string;
    sizeLabel?: string;
    transparencyLabel?: string;
    componentSettings: {
        directions: {
            array: string[],
            selected?: string,
        },
        rotations: {
            array: string[],
            selected?: string,
        }
        minMaxTransparency: IMinMaxValue,
        minMaxSize: IMinMaxValue,
        minMaxRotation: IMinMaxValue,
    };
}
