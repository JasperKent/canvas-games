import { Interactor } from "./interactor";
import { Sprite } from "./sprites/sprite";

export class Universe implements Interactor {
    private sprites: Sprite[] = [];
    private lastTime = 0;

    constructor(private width: number, private height: number) {}

    addSprite (sprite: Sprite): void {
        this.sprites.push(sprite);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, this.width, this.height);

        for (let sprite of this.sprites)
            sprite.draw(ctx);
    }

    animate(time: number) {
        if (this.lastTime > 0) {
            let delta = time - this.lastTime;

            for (let i = 0; i < delta; ++i) {
                for (let sprite of this.sprites) {
                    this.collideWalls(sprite);
                }

                for (let i = 0; i < this.sprites.length; ++i){
                    for (let j = i + 1; j < this.sprites.length; ++ j){
                        this.sprites[i].tryBounce(this.sprites[j])
                    }
                }

                for (let sprite of this.sprites) {
                    sprite.animate();
                }
            }
        }

        this.lastTime = time;
    }

    private collideWalls(sprite: Sprite) {
        sprite.crossesY(0, v => v.dy = -v.dy);
        sprite.crossesY(this.height, v => v.dy = -v.dy);

        sprite.crossesX(0, v => v.dx = -v.dx);
        sprite.crossesX(this.width, v => v.dx = -v.dx);        
    }
}