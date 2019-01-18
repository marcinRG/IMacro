import {CanvasOptionsComponent} from './components/CanvasOptions.component';
import {ImageOptionsComponent} from './components/ImageOptions.component';
import {TextPropertiesComponent} from './components/TextProperties.component';
import {DisplayComponent} from './components/Display.component';
import {settings} from './settings/app.settings';

window.addEventListener('load', () => {
    const canvasOptions = new CanvasOptionsComponent({
        querySelectorString: '.canvas-options-1',
        elementClass: 'canvas-settings',
        componentSettings: settings.canvas,
    });
    const imageOptions = new ImageOptionsComponent({
        elementClass: 'image-options',
        querySelectorString: '.image-options-1',
        componentSettings: settings.image,
    });
    const textProperties = new TextPropertiesComponent({
        elementClass: 'text-properties',
        querySelectorString: '.text-1-props',
        componentSettings: settings.text,
    });

    const display = new DisplayComponent({
        querySelectorString: '.canvas-image',
        elementClass: '',
    });
    canvasOptions.subscribe(display);
    imageOptions.subscribe(display);
    textProperties.subscribe(display);
    display.init(settings);
});
