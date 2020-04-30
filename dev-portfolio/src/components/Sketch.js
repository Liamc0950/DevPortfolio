
export default function sketch(p){
    let canvas;

    //fractal tree attributes
    var branchSize = 175;
    var color = "white";
    var PI = Math.PI;
    var angle = 1.9 * PI;
    var startX = 0;
    var startY = 0;

    var width = 1000;
    var height = 680;

    p.setup = () => {
      canvas = p.createCanvas(width, height);
      p.noStroke();
    }

    p.draw = () => {
      p.background(24,48,38);
      p.stroke(color);
      p.translate(width/2, height);
      drawBranch(branchSize);
    }

    p.mouseMoved = () => {
      let delt = (0.0021 * (p.noise(p.mouseX) - 0.5));
      angle = angle - delt;
      p.redraw();
    }
    
    
    //draws a branch from vector and x and y coordinates of last branch
    function drawBranch(len){
      p.line(0, 0, 0, -len);
      p.translate(0, -len);
      if (len > 10) {
        p.push();
        p.rotate(angle);
        drawBranch(len * 0.75);
        p.pop();
        p.push();
        p.rotate(-angle);
        drawBranch(len * 0.75);
        p.pop();  
      }
    }

}
