<template>
  <div id="canvas"></div>
</template>

<script>
import P5 from 'p5' // Package from npm

export default {
  name: 'App',
  mounted() {
    const script = p5 => {
      // These are your typical setup() and draw() methods
      p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight);
      };
      p5.draw = () => {
        p5.clear();
        p5.ellipse(p5.mouseX, p5.mouseY, 40, 40);
      }; 
    }
    // Attach the canvas to the div
    const p5canvas = new P5(script, 'canvas');
  },
}
</script>

<style></style>