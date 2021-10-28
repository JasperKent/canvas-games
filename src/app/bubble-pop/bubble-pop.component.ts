import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Ball } from '../graphics/sprites/ball';
import { Universe } from '../graphics/universe';

@Component({
  selector: 'app-bubble-pop',
  templateUrl: './bubble-pop.component.html',
  styleUrls: ['./bubble-pop.component.scss']
})
export class BubblePopComponent implements AfterViewInit {

  @ViewChild('theCanvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;

  private universe!: Universe;

  constructor() { }

  private draw (time: number): void {


    this.universe.animate(time);
    this.universe.draw(this.ctx);

    window.requestAnimationFrame(time => this.draw(time));
  }

  ngAfterViewInit(): void {

    this.ctx = this.canvas.nativeElement.getContext('2d')!;

    this.universe = new Universe(this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    for (let i = 0; i < 96; ++i)
    {
        let ball!: Ball;

        switch (i % 6) {
          case 0: ball = new Ball('assets/OrangeBall.png'); break;
          case 1: ball = new Ball('assets/SilverBall.png'); break;
          case 2: ball = new Ball('assets/RedBall.png'); break;
          case 3: ball = new Ball('assets/GreenBall.png'); break;
          case 4: ball = new Ball('assets/YellowBall.png'); break;
          case 5: ball = new Ball('assets/CyanBall.png'); break;
        }

        ball.velocity.dx = 0.1;
        ball.velocity.dy = 0.1 + 0.001 * i;

        ball.position.x = this.canvas.nativeElement.width/2;
        ball.position.y = this.canvas.nativeElement.height/2;


        this.universe.addSprite(ball);
    }

    window.requestAnimationFrame(time => this.draw(time));
  }
}
