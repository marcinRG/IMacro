import {ImageUploaderComponent} from './components/ImageUploader.component';
import {Observer} from 'rxjs';

// window.addEventListener('load', () => {
//     const displayCanvas = new DisplayCanvas({querySelectorString: '.display'});
//     displayCanvas.writeText({
//         text: 'Something something',
//         fillStyle: 'yellow',
//         x: 20,
//         y: 50,
//         fill: true,
//         fontWeight: 'normal',
//         fontSize: '35px',
//         fontStyle: 'normal',
//         fontFamily: 'Arial',
//         shadowColor: 'green',
//         shadowOffsetY: 10,
//         shadowOffsetX: 10,
//         shadowBlur: 25,
//         alpha: 1,
//     });
//     displayCanvas.writeText({
//         text: 'Something else',
//         fillStyle: 'black',
//         x: 40,
//         y: 70,
//         fill: true,
//         fontWeight: 'normal',
//         fontSize: '35px',
//         fontStyle: 'normal',
//         fontFamily: 'Tahoma',
//         alpha: 0.25,
//     });
//     displayCanvas.writeText({
//         text: 'Text',
//         fillStyle: 'red',
//         x: 70,
//         y: 80,
//         fill: false,
//         lineWidth: 1,
//         fontWeight: 'normal',
//         fontSize: '45px',
//         fontStyle: 'normal',
//         fontFamily: 'Arial',
//         shadowColor: 'red',
//         shadowOffsetY: 2,
//         shadowOffsetX: 2,
//         shadowBlur: 5,
//         alpha: 0.75,
//     });
// });

const imageUploader = new ImageUploaderComponent('.image-uploader', 'Załaduj obraz z pliku', 'Wybierz plik');

class MyObserver implements Observer<any> {
    public next(value: any) {
        console.log('next');
        showImage(value);
    }

    public error(err: any) {
        console.log('error ocurred' + err);
    }

    public complete() {
        console.log('completed');
    }
}

imageUploader.subscribe(new MyObserver());

const canvas = <HTMLCanvasElement> document.querySelector('.display');
const context = canvas.getContext('2d');
function showImage(img) {
    console.log(img.width);
    console.log(img.height);
    const imgHeight = ((600 / img.width) * img.height);
    console.log(imgHeight);
    canvas.height = imgHeight;
    context.drawImage(img, 0, 0, 600, imgHeight);
}

