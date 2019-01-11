import {IColor, IFont} from 'crappyuielements';
import {IMinMaxValue} from '../model/interfaces/IMinMaxValue';

const colors: IColor[] = [
    {
        id: '1',
        name: 'blue',
        value: '#1515b6',
    },
    {
        id: '2',
        name: 'white',
        value: '#d3e3ff',
    },
    {
        id: '3',
        name: 'black',
        value: '#000',
    },
    {
        id: '4',
        name: 'grey',
        value: '#555555',
    },
    {
        id: '5',
        name: 'red',
        value: '#ff2121',
    },
    {
        id: '6',
        name: 'yellow',
        value: '#fffc1b',
    },

];
const fontsList: IFont[] = [
    {
        id: '1',
        name: 'Arial',
        value: 'Arial, sans-serif',
    },
    {
        id: '2',
        name: 'Georgia',
        value: 'Georgia,serif',
    },
    {
        id: '3',
        name: 'Papyrus',
        value: 'Papyrus, fantasy',
    },
    {
        id: '4',
        name: 'Cambria',
        value: 'Cambria,serif',
    },
    {
        id: '5',
        name: 'Titan One',
        value: '\'Titan One\', cursive',
    },
    {
        id: '6',
        name: 'Lobster',
        value: '\'Lobster\', cursive',
    },
    {
        id: '7',
        name: 'Shrikhand',
        value: '\'Shrikhand\', cursive',
    },
    {
        id: '8',
        name: 'Bangers',
        value: '\'Bangers\', cursive',
    },
    {
        id: '9',
        name: 'Parisienne',
        value: '\'Parisienne\', cursive',
    },
    {
        id: '10',
        name: 'Playball',
        value: '\'Playball\', cursive',
    },

];

const directionsArray: string[] = [
    'top-left',
    'top-center',
    'top-right',
    'left-center',
    'center-center',
    'right-center',
    'bottom-left',
    'bottom-center',
    'bottom-right'];

const defaultMinMaxValue: IMinMaxValue = {
    min: 0,
    max: 100,
    defaultVal: 50,
};

const rotationsCenterArray: string[] = [
    directionsArray[0], directionsArray[2], directionsArray[4], directionsArray[5], directionsArray[7],
];

const CanvasOptionsSettings: any = {
    colorSettings: {
        colors,
        selected: colors[2],
    },
    minMaxWidth: defaultMinMaxValue,
    minMaxHeight: defaultMinMaxValue,
};
const ImageOptionsSettings: any = {
    directions: {
        array: directionsArray,
        selected: directionsArray[4],
    },
    rotations: {
        array: rotationsCenterArray,
        selected: rotationsCenterArray[2],
    },
    minMaxRotation: defaultMinMaxValue,
    minMaxSize: {min: 10, max: 400, defaultVal: 100},
    minMaxTransparency: defaultMinMaxValue,
};
const TextOptionsSettings: any = {
    textColor: {
        colors,
        selected: colors[1],
    },
    shadowColor: {
        colors,
        selected: colors[4],
    },
    fontFamily: {
        fonts: fontsList,
        selected: fontsList[4],
    },
    fontSize: {
        min: 6,
        max: 48,
        value: 12,
        delta: 2,
    },
    minMaxPositionX: defaultMinMaxValue,
    minMaxPositionY: defaultMinMaxValue,
    minMaxRotation: defaultMinMaxValue,
    minMaxShadowBlur: defaultMinMaxValue,
    minMaxShadowOffsetX: defaultMinMaxValue,
    minMaxShadowOffsetY: defaultMinMaxValue,
    minMaxFontSize: defaultMinMaxValue,
};
export const settings: any = {
    canvas: CanvasOptionsSettings,
    image: ImageOptionsSettings,
    text: TextOptionsSettings,
};
