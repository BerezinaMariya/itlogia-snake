import {Game} from "./modules/game.js";

class App {
    settings = {
        positionsCount: 30, // количество квадратиков в сетке
        positionsSize: 20   // размер одного квадратика (20х20px)
    }

    constructor() {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', (this.settings.positionsCount * this.settings.positionsSize).toString());
        canvas.setAttribute('height', (this.settings.positionsCount * this.settings.positionsSize).toString());

        document.getElementById('container').appendChild(canvas);

        const context = canvas.getContext('2d');

        new Game(context, this.settings);
    }
}

(new App());
