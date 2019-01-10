import {
    ColorRenderer,
    IColor,
    IdArrayWithSingleSelection,
    MinMaxValue,
    PlainTextArrayWithFilterSingleSelection,
} from 'crappyuielements';
import {RxSlider} from '../rxUiElements/RxSlider';
import {RxMultiUseComboBox} from '../rxUiElements/RxMultiUseComboBox';
import {RxDirectionsRadioGroup} from '../rxUiElements/RxDirectionsRadioGroup';

export function createSlider(min, max, value, propertyName, selector) {
    const minMax = new MinMaxValue(value, min, max);
    const slider = new RxSlider({
        querySelectorString: selector,
        elementClass: 'slider-cuie',
        pointerWidth: 5,
    }, minMax, propertyName);
    return slider;
}

export function createColorBox(selector: string, propertyName: string, colors: IColor[], selectedColor: IColor = null) {
    const colorRenderer = new ColorRenderer('color-box', 'name-txt');
    const colorArrayId = new IdArrayWithSingleSelection<IColor>(colors, colorRenderer, 'name', selectedColor);
    const colorComboBox = new RxMultiUseComboBox({
        querySelectorString: selector,
        elementClass: 'multi-combo-box-cuie',
        containerClass: 'color-container',
        maxSize: 5,
        menuZIndex: 50,
    }, colorArrayId, propertyName);
    return colorComboBox;
}

export function createDirectionsRadioGroup(selector: string, propertyName: string,
                                           groupName: string, directions: string[], selected: string = null) {
    const txtArray = new PlainTextArrayWithFilterSingleSelection(directions, selected);
    const positionBox = new RxDirectionsRadioGroup({
        elementClass: 'radio-btn-group-cuie',
        querySelectorString: selector,
        radioGroupName: groupName,
    }, txtArray, propertyName);
    return positionBox;
}

export function getMaxCanvasSize() {
    const elem = document.querySelector('.canvas-image');
    const rect = elem.getBoundingClientRect();
    return {
        maxWidth: Math.floor(rect.width - 30),
        maxHeight: Math.floor(rect.height - 30),
    };
}
