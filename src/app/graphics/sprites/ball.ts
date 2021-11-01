import { Position } from "../vectors/position";
import { Velocity } from "../vectors/velocity";
import { Sprite } from "./sprite";

export class Ball implements Sprite {
    velocity = new Velocity();
    position = new Position();
    
    mass = 1;
    radius = 0;
    image: HTMLImageElement;

    private nextPosition(): Position {
        return { 
            x: this.position.x + this.velocity.dx,
            y: this.position.y + this.velocity.dy
        }
    }

    constructor (imageSrc: string){
        this.image = new Image();
        this.image.src = imageSrc;

        this.image.onload = ev => this.radius = this.image.width/2;
    }

    crossesX(x: number, callback: (v: Velocity) => void): void {
        x -= this.radius * Math.sign(this.velocity.dx);

        const next = this.nextPosition().x;

        if (next < x && this.position.x >= x || next >= x && this.position.x < x)
            callback(this.velocity);
    }

    crossesY(y: number, callback: (v: Velocity) => void): void {
        y -= this.radius * Math.sign(this.velocity.dy);

        const next = this.nextPosition().y;

        if (next < y && this.position.y >= y || next >= y && this.position.y < y)
            callback(this.velocity);
    }

    animate(): void {
        this.position = this.nextPosition();
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.image, this.position.x - this.radius, this.position.y - this.radius);
    }

    tryBounce(that: Sprite): void {
        const thatBall = that as Ball;

        const currSepSq =  sepSquared(this.position, thatBall.position);
        const nextSepSq = sepSquared(this.nextPosition(), thatBall.nextPosition());
        const rSq = (this.radius + thatBall.radius) * (this.radius + thatBall.radius);

        if (nextSepSq <= rSq && currSepSq > rSq)
            this.doBounce(thatBall);
   
        function sepSquared (p1: Position, p2: Position): number {
            return (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y);
        }
    }

    private doBounce(that: Ball): void {        
        const xOff = this.nextPosition().x - that.nextPosition().x;
        const yOff = this.nextPosition().y - that.nextPosition().y;

        const collisionAngle = Math.atan2(yOff, xOff);

        const thisUx = this.velocity.modulus() * Math.cos(collisionAngle - this.velocity.angle());
        const thatUx = that.velocity.modulus() * Math.cos(collisionAngle - that.velocity.angle());

        const impulseMag = Math.abs (2 * this.mass * that.mass * (thisUx - thatUx)/(this.mass + that.mass));

        const impulseX = impulseMag * Math.cos(collisionAngle);
        const impulseY = impulseMag * Math.sin(collisionAngle);

        this.velocity.dx += impulseX/this.mass;
        this.velocity.dy += impulseY/this.mass;

        that.velocity.dx -= impulseX/that.mass;
        that.velocity.dy -= impulseY/that.mass;
    }
}