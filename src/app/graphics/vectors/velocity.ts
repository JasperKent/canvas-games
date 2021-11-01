export class Velocity {
    dx = 0;
    dy = 0;

    modulus(): number {
        return Math.sqrt (this.dx * this.dx + this.dy * this.dy);
    }

    angle(): number {
        return Math.atan2(this.dy, this.dx);
    }
}