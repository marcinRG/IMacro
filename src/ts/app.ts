import {ImageUploaderComponent} from './components/ImageUploader.component';
import {Observer} from 'rxjs/Observer';

console.log('app start');
const imageUploader = new ImageUploaderComponent('.image-uploader', 'Załaduj obraz z pliku', 'Wybierz plik');

class MyObserver implements Observer<any> {
    public next(value: any) {
        console.log(value);
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
console.log(canvas);

const context = canvas.getContext('2d');

context.fillStyle = '#ff4632';
context.shadowColor = '#85858d';
context.shadowBlur = 20;
context.shadowOffsetX = 15;
context.shadowOffsetY = 15;
context.fillRect(0, 0, 500, 300);

context.font = 'italic bold 30px Arial';
context.fillStyle = 'yellow';
context.shadowColor = '#232323';
context.shadowBlur = 20;
context.shadowOffsetX = 4;
context.shadowOffsetY = 4;
context.fillText('Something', 10, 50);
