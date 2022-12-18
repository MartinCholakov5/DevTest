import * as PIXI from 'pixi.js';
import { GameObjectBehavior } from "./GameObjectBehavior"

export class GameObject extends PIXI.Container {
    private id: string;
    private behaviors: Array<GameObjectBehavior> = [];
    // public static CELL_WIDTH : number = 500;
    // public static CELL_HEIGHT : number = 500;

    constructor(id: string) {
        super()
        this.id = id;
    }
    public geId(): string {
        return this.id
    }
    public update(delta: number) {
        this.behaviors.forEach(behavior => {
            behavior.update(delta)
        })
    }
    public addBehavior(behavior: GameObjectBehavior) {
        this.behaviors.push(behavior)
    }
}