import { Velocity } from "../vectors/velocity";

export interface Sprite {
    animate(): void;
    draw(ctx: CanvasRenderingContext2D): void;
    crossesX(x: number, callback: (v: Velocity) => void): void;
    crossesY(y: number, callback: (v: Velocity) => void): void;
    tryBounce(that: Sprite): void;
}