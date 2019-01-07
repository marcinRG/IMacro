import {IColor, IComponentProperties} from 'crappyuielements';

export interface  ITextPropertiesProperties extends IComponentProperties {
    componentLabel?: string;
    textLabel?: string;
    positionXLabel?: string;
    positionYLabel?: string;
    fontColorLabel?: string;
    rotationLabel?: string;
    shadowLabel?: string;
    shadowColorLabel?: string;
    shadowBlurLabel?: string;
    shadowOffsetXLabel?: string;
    shadowOffsetYLabel?: string;
    fontColorsArray: IColor[];
    shadowColorsArray: IColor[];
}