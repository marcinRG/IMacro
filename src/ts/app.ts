import {ImageUploaderComponent} from './components/ImageUploader.component';
import {Observer} from 'rxjs';
import {CanvasOptionsComponent} from './components/CanvasOptions.component';
import {IColor} from 'crappyuielements';
import {ImageOptionsComponent} from './components/ImageOptions.component';
//
// // window.addEventListener('load', () => {
// //     const displayCanvas = new DisplayCanvas({querySelectorString: '.display'});
// //     displayCanvas.writeText({
// //         text: 'Something something',
// //         fillStyle: 'yellow',
// //         x: 20,
// //         y: 50,
// //         fill: true,
// //         fontWeight: 'normal',
// //         fontSize: '35px',
// //         fontStyle: 'normal',
// //         fontFamily: 'Arial',
// //         shadowColor: 'green',
// //         shadowOffsetY: 10,
// //         shadowOffsetX: 10,
// //         shadowBlur: 25,
// //         alpha: 1,
// //     });
// //     displayCanvas.writeText({
// //         text: 'Something else',
// //         fillStyle: 'black',
// //         x: 40,
// //         y: 70,
// //         fill: true,
// //         fontWeight: 'normal',
// //         fontSize: '35px',
// //         fontStyle: 'normal',
// //         fontFamily: 'Tahoma',
// //         alpha: 0.25,
// //     });
// //     displayCanvas.writeText({
// //         text: 'Text',
// //         fillStyle: 'red',
// //         x: 70,
// //         y: 80,
// //         fill: false,
// //         lineWidth: 1,
// //         fontWeight: 'normal',
// //         fontSize: '45px',
// //         fontStyle: 'normal',
// //         fontFamily: 'Arial',
// //         shadowColor: 'red',
// //         shadowOffsetY: 2,
// //         shadowOffsetX: 2,
// //         shadowBlur: 5,
// //         alpha: 0.75,
// //     });
// // });
//

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

    // class MyObserver implements Observer<any> {
    //     public next(value: any) {
    //         console.log('next');
    //         showImage(value);
    //     }
    //
    //     public error(err: any) {
    //         console.log('error ocurred' + err);
    //     }
    //
    //     public complete() {
    //         console.log('completed');
    //     }
    // }

    //imageUploader.subscribe(new MyObserver());

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
});
