import {IColor, IComponentProperties} from 'crappyuielements';
import {IMinMaxValue} from '../IMinMaxValue';

export interface ITextPropertiesProperties extends IComponentProperties {
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
    componentSettings: {
        textColor: {
            colors: IColor[],
            selected?: IColor,
        }
        shadowColor: {
            colors: IColor[],
            selected?: IColor,
        }
        minMaxPositionX: IMinMaxValue,
        minMaxPositionY: IMinMaxValue,
        minMaxRotation: IMinMaxValue,
        minMaxShadowBlur: IMinMaxValue,
        minMaxShadowOffsetX: IMinMaxValue,
        minMaxShadowOffsetY: IMinMaxValue,
        minMaxFontSize: IMinMaxValue,
    };
}
