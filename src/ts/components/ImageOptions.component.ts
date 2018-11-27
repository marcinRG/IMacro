export class ImageOptionsComponent {
    constructor() {
        console.log('image options component');
    }

    private createHTML() {
        const positionLabel = 'position';
        const innerHTML = `
                <h2>Image options</h2>
                <label>position</label>
                <div class="radio-btn-group-cuie">
                    <div class='btn-wrapper top-left'><input type="radio" name="gr" class="input-rbtn"
                                                             value="something"></div>
                    <div class="btn-wrapper top-center"><input type="radio" name="gr" class="input-rbtn"></div>
                    <div class="btn-wrapper top-right"><input type="radio" name="gr" class="input-rbtn"></div>
                    <div class="btn-wrapper center-left"><input type="radio" name="gr" class="input-rbtn"></div>
                    <div class="btn-wrapper center-center"><input type="radio" name="gr" class="input-rbtn"></div>
                    <div class="btn-wrapper center-right"><input type="radio" name="gr" class="input-rbtn"></div>
                    <div class="btn-wrapper bottom-left"><input type="radio" name="gr" class="input-rbtn"></div>
                    <div class="btn-wrapper bottom-center"><input type="radio" name="gr" class="input-rbtn"></div>
                    <div class="btn-wrapper bottom-right"><input type="radio" name="gr" class="input-rbtn"></div>
                </div>
                <label>rotation</label>
                <div class="slider-cuie">
                    <div class="click-field">
                        <div class="beam">
                            <div class="beam-fill"></div>
                        </div>
                        <div class="pointer"></div>
                    </div>
                </div>
                <label>size</label>
                <div class="slider-cuie">
                    <div class="click-field">
                        <div class="beam">
                            <div class="beam-fill"></div>
                        </div>
                        <div class="pointer"></div>
                    </div>
                </div>
                <label>transparency</label>
                <div class="slider-cuie">
                    <div class="click-field">
                        <div class="beam">
                            <div class="beam-fill"></div>
                        </div>
                        <div class="pointer"></div>
                    </div>
                </div>     
        `.trim();
    }

}
