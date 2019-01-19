import {IColor, IComponentProperties, IFont} from 'crappyuielements';
import {IMinMaxValue} from '../IMinMaxValue';

export interface ITextPropertiesProperties extends IComponentProperties {
    componentLabel?: string;
    textLabel?: string;
    positionXLabel?: string;
    positionYLabel?: string;
    fontColorLabel?: string;
    rotationLabel?: string;
    shadowLabel?: string;
    fontSizeLabel?: string;
    fontFamilyLabel?: string;
    shadowColorLabel?: string;
    shadowBlurLabel?: string;
    strokeLabel?: string;
    strokeCheckBoxLabel?: string;
    shadowCheckBoxLabel?: string;
    strokeColorLabel?: string;
    strokeWidthLabel?: string;
    shadowOffsetXLabel?: string;
    shadowOffsetYLabel?: string;
    componentSettings: {
        textColor: {
            colors: IColor[],
            selected?: IColor,
        },
        shadowColor: {
            colors: IColor[],
            selected?: IColor,
        },
        strokeColor: {
            colors: IColor[],
            selected?: IColor,
        }
        strokeWidth: {
            min: number,
            max: number,
            value: number,
            delta: number,
        }
        fontFamily: {
            fonts: IFont[],
            selected?: IFont,
        },
        fontSize: {
            min: number,
            max: number,
            value: number,
            delta: number,
        },
        minMaxPositionX: IMinMaxValue,
        minMaxPositionY: IMinMaxValue,
        minMaxRotation: IMinMaxValue,
        minMaxShadowBlur: IMinMaxValue,
        minMaxShadowOffsetX: IMinMaxValue,
        minMaxShadowOffsetY: IMinMaxValue,
        minMaxFontSize: IMinMaxValue,
    };
}
