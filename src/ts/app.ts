import {ImageUploaderComponent} from './components/ImageUploader.component';
import {Observer} from 'rxjs/Observer';
import {DisplayCanvas} from './components/DisplayCanvas';

window.addEventListener('load', () => {
    const displayCanvas = new DisplayCanvas({querySelectorString: '.display'});
    displayCanvas.writeText({
        text: 'Something something',
        fillStyle: 'yellow',
        x: 20,
        y: 50,
        fill: true,
        fontWeight: 'normal',
        fontSize: '35px',
        fontStyle: 'normal',
        fontFamily: 'Arial',
    });
    displayCanvas.writeText({
        text: 'Something else',
        fillStyle: 'black',
        x: 40,
        y: 70,
        fill: true,
        fontWeight: 'normal',
        fontSize: '35px',
        fontStyle: 'normal',
        fontFamily: 'Tahoma',
        shadowColor: 'red',
        shadowOffsetY: 3,
        shadowOffsetX: 3,
        shadowBlur: 12,
    });
    displayCanvas.writeText({
        text: 'Text',
        fillStyle: 'red',
        x: 70,
        y: 80,
        fill: false,
        lineWidth: 1,
        fontWeight: 'normal',
        fontSize: '45px',
        fontStyle: 'normal',
        fontFamily: 'Arial',
        shadowColor: 'blue',
        shadowOffsetY: 2,
        shadowOffsetX: 2,
        shadowBlur: 5,
    });
});

// const imageUploader = new ImageUploaderComponent('.image-uploader', 'Załaduj obraz z pliku', 'Wybierz plik');
//
// class MyObserver implements Observer<any> {
//     public next(value: any) {
//         console.log(value);
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
//
// imageUploader.subscribe(new MyObserver());
