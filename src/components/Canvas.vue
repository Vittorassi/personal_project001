<template>
  <div id="canvas"></div>
</template>

<script>
import P5 from 'p5' // Package from npm

let flying = 0;
let rows = 0;
let cols = 0;
let scl = 20;
let h = window.innerHeight;
let w = window.innerWidth;
let yOff = 0;

export default {
  name: 'App',
  mounted() {
    const script = p5 => {
      // These are your typical setup() and draw() methods
      p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);

        cols = Math.floor((w / scl));
        rows = Math.floor((h / scl));
      };

      p5.draw = () => {
        p5.frameRate(30);
        let terrain = [];

        flying -= 0.05;

        yOff = flying;
        
        for (let y = 0; y < rows; y++) {
          let xOff = 0;

          for (let x = 0; x < cols; x++) {
            if (terrain[x]) {
              terrain[x].push(p5.map(p5.noise(xOff, yOff), 0, 1, -100, 100))

            } else {
              terrain.push([p5.map(p5.noise(xOff, yOff), 0, 1, -100, 100)]);
            }

            xOff += 0.2;
          }

          yOff += 0.2;
        }

        p5.background(0);
        p5.stroke(255);
        p5.noFill();

        p5.rotateX( (p5.PI/3) );

        p5.translate( (-w/2), (-h/2 + 50) );

        for (let y = 0; y < rows-1; y++) {

          p5.beginShape(p5.TRIANGLE_STRIP);

          for (let x = 0; x < cols; x++) {

            p5.vertex( (x * (scl)), (y * scl), terrain[x][y] );
            p5.vertex( (x * scl), ((y + 1) * scl), terrain[x][y+1]);
            
          }

          p5.endShape();
        }
      }; 
    }
    // Attach the canvas to the div
    const p5canvas = new P5(script, 'canvas');
  },
}

// USEFUL COMMENTS

/*
1 - TRANSLATE TO TOP LEFT CORNER
  WEBGL draws everything relative to the center by default, this translates everything to the top
  left corner

  -> p5.translate( (-p5.width/2), (-p5.height/2), 0 );

2 - JS ARRAY SIZE AND MULTI DIMENTIONAL ARRAYS
  In JS it's very VERY bad to initialize an array with predetermined size, so it's better to start
  with an empty array and start pushing values into it.

  But what if i want a two dimentional array?

  You do the same, start with an empty array and then populate it

  This also means that you can't access array in [x][y] as your first action, because array[x] is
  undefined, means this value is not readable, so you have to put a value there first

  -> array.push([])

  and now array[x] is accessible, you do the same for the value you want to put inside of it

  -> array[x].push([])

  and finally you end up with something like this

  -> array[[]]

  you have a starting point for X and Y now, and if you want to iterate with it, just do as above
  in the "terrain" definition
*/
</script>

<style></style>