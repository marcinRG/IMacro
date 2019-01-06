import {IComponentProperties} from 'crappyuielements';

export interface IImageOptionsProperties extends IComponentProperties {
    componentLabel?: string;
    positionLabel?: string;
    rotationLabel?: string;
    rotationCenterLabel?: string;
    sizeLabel?: string;
    transparencyLabel?: string;
    directionsArray: string[];
    rotationsCenterArray: string[];
}
