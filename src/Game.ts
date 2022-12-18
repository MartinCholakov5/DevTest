
import * as PIXI from 'pixi.js';
import { GameObject } from "./GameObject";
import { GameApplication } from './GameApplication'
import { table } from 'console';
import { Container } from 'pixi.js';
import { create } from 'domain';

export class Game extends PIXI.Container {
    private gameObjects: Map<string, GameObject>;
    private ticker: PIXI.Ticker;

    private gameObjectContainer: PIXI.Container;
    private uiContainer: PIXI.Container;

    constructor() {
        super()
        this.init()
    }
    private init() {
        this.createTicker();
        this.createGameObjContaier();
        this.createUIContainer();

        this.createGameObjList();
        this.createButtonActive();
        this.createButton();
        this.createBackground();
        this.createTable();
        this.addAllSymbols();

    }
    private createGameObjList() {
        // this.gameObjects = new Map<string, GameObject>;
    }
    private createGameObjContaier() {
        this.gameObjectContainer = new PIXI.Container();
        this.addChild(this.gameObjectContainer)
    }
    private createUIContainer() {
        this.uiContainer = new PIXI.Container()
        this.addChild(this.uiContainer)
    }
    private createTicker() {
        this.ticker = new PIXI.Ticker();
        this.ticker.add(this.update, this);
        this.ticker.start();
    }

    private update(delta: number) {
        this.gameObjects.forEach(gameObj => {
            gameObj.update(delta);
        })
    }
    private createBackground() {
        const background = PIXI.Texture.from('/assets/SlotFrame.png')
        let addBackground = new PIXI.Sprite(background);
        addBackground.width = 800;
        addBackground.height = 500;
        this.addChild(addBackground);

    }
    private createTable() {
        const table = new PIXI.Graphics();

        const cellWidth = 150;
        const cellHeight = 150;

        table.lineStyle(0, 0x6B16B6);

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 5; j++) {
                table.drawRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
            }
        }
        table.position.set(28, 25);
        this.addChild(table);


    }

    private addAllSymbols() {

        const loader = new PIXI.Loader();
        loader.add('symbol1', 'assets/Symbol_1.png');
        loader.add('symbol2', 'assets/Symbol_2.png');
        loader.add('symbol3', 'assets/Symbol_3.png');
        loader.add('symbol4', 'assets/Symbol_4.png');
        loader.add('symbol5', 'assets/Symbol_5.png');
        loader.add('symbol6', 'assets/Symbol_6.png');
        loader.add('symbol7', 'assets/Symbol_7.png');
        loader.add('symbol8', 'assets/Symbol_8.png');
        loader.add('symbol9', 'assets/Symbol_3.png');
        loader.add('symbol10', 'assets/Symbol_5.png');
        loader.add('symbol11', 'assets/Symbol_2.png');
        loader.add('symbol12', 'assets/Symbol_1.png');
        loader.add('symbol13', 'assets/Symbol_6.png');
        loader.add('symbol14', 'assets/Symbol_7.png');
        loader.add('symbol15', 'assets/Symbol_8.png');

        loader.load(() => {

            const sprite1 = PIXI.Sprite.from('symbol1');
            const sprite2 = PIXI.Sprite.from('symbol2');
            const sprite3 = PIXI.Sprite.from('symbol3');
            const sprite4 = PIXI.Sprite.from('symbol4');
            const sprite5 = PIXI.Sprite.from('symbol5');
            const sprite6 = PIXI.Sprite.from('symbol6');
            const sprite7 = PIXI.Sprite.from('symbol7');
            const sprite8 = PIXI.Sprite.from('symbol8');
            const sprite9 = PIXI.Sprite.from('symbol9');
            const sprite10 = PIXI.Sprite.from('symbol10');
            const sprite11 = PIXI.Sprite.from('symbol11');
            const sprite12 = PIXI.Sprite.from('symbol12');
            const sprite13 = PIXI.Sprite.from('symbol13');
            const sprite14 = PIXI.Sprite.from('symbol14');
            const sprite15 = PIXI.Sprite.from('symbol15');


            sprite1.position.set(0, 0);
            sprite1.width = 200;
            sprite1.height = 200;

            sprite2.position.set(150, 0);
            sprite2.width = 200;
            sprite2.height = 200;

            sprite3.position.set(300, 0);
            sprite3.width = 200;
            sprite3.height = 200;

            sprite4.position.set(450, 0);
            sprite4.width = 200;
            sprite4.height = 200;

            sprite5.position.set(600, 0);
            sprite5.width = 200;
            sprite5.height = 200;

            sprite6.position.set(0, 150);
            sprite6.width = 200;
            sprite6.height = 200;

            sprite7.position.set(150, 150);
            sprite7.width = 200;
            sprite7.height = 200;

            sprite8.position.set(300, 150);
            sprite8.width = 200;
            sprite8.height = 200;

            sprite9.position.set(450, 150);
            sprite9.width = 200;
            sprite9.height = 200;

            sprite10.position.set(600, 150);
            sprite10.width = 200;
            sprite10.height = 200;

            sprite11.position.set(0, 300);
            sprite11.width = 200;
            sprite11.height = 200;

            sprite12.position.set(150, 300);
            sprite12.width = 200;
            sprite12.height = 200;

            sprite13.position.set(300, 300);
            sprite13.width = 200;
            sprite13.height = 200;

            sprite14.position.set(450, 300);
            sprite14.width = 200;
            sprite14.height = 200;

            sprite15.position.set(600, 300);
            sprite15.width = 200;
            sprite15.height = 200;

            this.addChild(sprite1);
            this.addChild(sprite2);
            this.addChild(sprite3);
            this.addChild(sprite4);
            this.addChild(sprite5);
            this.addChild(sprite6);
            this.addChild(sprite7);
            this.addChild(sprite8);
            this.addChild(sprite9);
            this.addChild(sprite10);
            this.addChild(sprite11);
            this.addChild(sprite12);
            this.addChild(sprite13);
            this.addChild(sprite14);
            this.addChild(sprite15);

            const matrix = [
                [sprite1, sprite2, sprite3, sprite4, sprite5],
                [sprite6, sprite7, sprite8, sprite9, sprite10],
                [sprite11, sprite12, sprite13, sprite14, sprite15]
              ];
              
              let container = new PIXI.Container();
              
              for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                  let randomSymbol = Math.floor(Math.random() * matrix.length);
                  let randomIndex = Math.floor(Math.random() * matrix[randomSymbol].length);      
                  const randomSymbols = matrix[randomSymbol][randomIndex];
              
                  randomSymbols.x = j * randomSymbols.width / 1.3;
                  randomSymbols.y = i * randomSymbols.height / 1.3;
              
                  this.addChild(randomSymbols);
                }
              }
              
              this.addChild(container);              
        });

    }

    private createButton() {
        const button = PIXI.Texture.from('/assets/SpinButton_Normal.png')
        let activeButton = new PIXI.Sprite(button);

        activeButton.x = 700;
        activeButton.y = 500;

        activeButton.width = 80;
        activeButton.height = 80;

        activeButton.interactive = true;
        activeButton.buttonMode = true;
        activeButton.on('pointerdown', () => {
            activeButton.visible = false;

            setTimeout(() => {
                activeButton.visible = true;
            }, 2000);
        })

        activeButton.on('pointerdown', this.createButton);

        this.addChild(activeButton);

    }
    private createButtonActive() {
        const button = PIXI.Texture.from('/assets/SpinButton_Active.png')
        let activeButton = new PIXI.Sprite(button);

        activeButton.x = 700;
        activeButton.y = 500;

        activeButton.width = 80;
        activeButton.height = 80;

        this.addChild(activeButton);



    }



}