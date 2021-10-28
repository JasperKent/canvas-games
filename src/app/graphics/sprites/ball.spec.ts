import { Ball } from "./ball";

describe('Ball', () => {
    it('should create a ball', () => {
        const ball = new Ball('dummy');

        expect(ball).toBeTruthy();
    });  

    it('should bounce two horizontal balls', () => {
        const ballA = new Ball('dummy');
        const ballB = new Ball('dummy');

        ballA.radius = 32;
        ballB.radius = 32;

        ballA.position.x = 33;
        ballB.position.x = -33;

        ballA.velocity.dx = -1;
        ballB.velocity.dx = 1;

        ballA.tryBounce(ballB);

        expect (ballA.velocity.dx).toBeCloseTo(1, 0.000001);
        expect (ballA.velocity.dy).toBeCloseTo(0, 0.000001);
        expect (ballB.velocity.dx).toBeCloseTo(-1, 0.000001);
        expect (ballB.velocity.dy).toBeCloseTo(0, 0.000001);
    });  

    it('should bounce two slightly offset balls', () => {
        const ballA = new Ball('dummy');
        const ballB = new Ball('dummy');

        ballA.radius = 32;
        ballB.radius = 32;

        ballA.position.x = 8;
        ballA.position.y = 31;
        ballB.position.x = -8;
        ballB.position.y = -31;

        ballA.velocity.dx = -1;
        ballB.velocity.dx = 1;

        ballA.tryBounce(ballB);

        expect (ballA.velocity.dx).toBeLessThan(0);
        expect (ballA.velocity.dy).toBeGreaterThan(0);
        expect (ballB.velocity.dx).toBeGreaterThan(0);
        expect (ballB.velocity.dy).toBeLessThan(0);
    });  

    it('should bounce from north east', () => {
        const ballA = new Ball('dummy');
        const ballB = new Ball('dummy');

        ballA.radius = 32;
        ballB.radius = 32;

        ballA.position.x = 23;
        ballA.position.y = 23;
        ballB.position.x = -23;
        ballB.position.y = -23;

        ballA.velocity.dx = -1;
        ballA.velocity.dy = -1;
                
        ballB.velocity.dx = 1;
        ballB.velocity.dy = 1;

        ballA.tryBounce(ballB);

        expect (ballA.velocity.dx).toBeCloseTo(1, 0.000001);
        expect (ballA.velocity.dy).toBeCloseTo(1, 0.000001);
        expect (ballB.velocity.dx).toBeCloseTo(-1, 0.000001);
        expect (ballB.velocity.dy).toBeCloseTo(-1, 0.000001);
    }); 
    
    it('should bounce from north west', () => {
        const ballA = new Ball('dummy');
        const ballB = new Ball('dummy');

        ballA.radius = 32;
        ballB.radius = 32;

        ballA.position.x = -23;
        ballA.position.y = 23;
        ballB.position.x = 23;
        ballB.position.y = -23;

        ballA.velocity.dx = 1;
        ballA.velocity.dy = -1;
                
        ballB.velocity.dx = -1;
        ballB.velocity.dy = 1;

        ballA.tryBounce(ballB);

        expect (ballA.velocity.dx).toBeCloseTo(-1, 0.000001);
        expect (ballA.velocity.dy).toBeCloseTo(1, 0.000001);
        expect (ballB.velocity.dx).toBeCloseTo(1, 0.000001);
        expect (ballB.velocity.dy).toBeCloseTo(-1, 0.000001);
    }); 
        
    it('should bounce from south west', () => {
        const ballA = new Ball('dummy');
        const ballB = new Ball('dummy');

        ballA.radius = 32;
        ballB.radius = 32;

        ballA.position.x = -23;
        ballA.position.y = -23;
        ballB.position.x = 23;
        ballB.position.y = 23;

        ballA.velocity.dx = 1;
        ballA.velocity.dy = 1;
                
        ballB.velocity.dx = -1;
        ballB.velocity.dy = -1;

        ballA.tryBounce(ballB);

        expect (ballA.velocity.dx).toBeCloseTo(-1, 0.000001);
        expect (ballA.velocity.dy).toBeCloseTo(-1, 0.000001);
        expect (ballB.velocity.dx).toBeCloseTo(1, 0.000001);
        expect (ballB.velocity.dy).toBeCloseTo(1, 0.000001);
    }); 

    it('should bounce from south east', () => {
        const ballA = new Ball('dummy');
        const ballB = new Ball('dummy');

        ballA.radius = 32;
        ballB.radius = 32;

        ballA.position.x = 23;
        ballA.position.y = -23;
        ballB.position.x = -23;
        ballB.position.y = 23;

        ballA.velocity.dx = -1;
        ballA.velocity.dy = 1;
                
        ballB.velocity.dx = 1;
        ballB.velocity.dy = -1;

        ballA.tryBounce(ballB);

        expect (ballA.velocity.dx).toBeCloseTo(1, 0.000001);
        expect (ballA.velocity.dy).toBeCloseTo(-1, 0.000001);
        expect (ballB.velocity.dx).toBeCloseTo(-1, 0.000001);
        expect (ballB.velocity.dy).toBeCloseTo(1, 0.000001);
    }); 
  });