import {CanvasOptionsComponent} from './components/CanvasOptions.component';
import {IColor} from 'crappyuielements';
import {ImageOptionsComponent} from './components/ImageOptions.component';
import {TextPropertiesComponent} from './components/TextProperties.component';
import {DisplayComponent} from './components/Display.component';

const colorsList: IColor[] = [
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
const directions: string[] = [
    'top-left',
    'top-center',
    'top-right',
    'left-center',
    'center-center',
    'right-center',
    'bottom-left',
    'bottom-center',
    'bottom-right'];
const rotationsCenter = [
    'top-left',
    'right-center',
    'center',
    'bottom-left',
    'bottom-right'];

window.addEventListener('load', () => {
    const canvasOptions = new CanvasOptionsComponent({
        querySelectorString: '.canvas-options-1',
        elementClass: 'canvas-settings',
        colors: colorsList,
    });
    const imageOptions = new ImageOptionsComponent({
        elementClass: 'image-options',
        querySelectorString: '.image-options-1',
        directionsArray: directions,
        rotationsCenterArray: rotationsCenter,
    });
    const textProperties = new TextPropertiesComponent({
        elementClass: 'text-properties',
        querySelectorString: '.text-1-props',
        fontColorsArray: colorsList,
        shadowColorsArray: colorsList,
    });

    const display = new DisplayComponent({
        querySelectorString: '.canvas-image',
        elementClass: '',
    });
    canvasOptions.subscribe(display);
    imageOptions.subscribe(display);
    textProperties.subscribe(display);
});

// const canvas = <HTMLCanvasElement> document.querySelector('.canvas-image .canvas-output');
// const context = canvas.getContext('2d');
//
// function showImage(img: HTMLImageElement) {
//     console.log(img.width);
//     console.log(img.height);
//     const imgHeight = ((600 / img.width) * img.height);
//     console.log(imgHeight);
//     canvas.height = imgHeight;
//     context.drawImage(img, 0, 0, 600, imgHeight);
// }
//
