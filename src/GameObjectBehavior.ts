
import { GameObject } from "./GameObject"

export class GameObjectBehavior {
    protected gameObjRef: GameObject;

    constructor(gameObjRef: GameObject) {

        this.gameObjRef = gameObjRef
        this.init()
    }

    protected init() { 

    }
    public update(delta: number) { 
        
    }

}
