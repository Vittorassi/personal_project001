<template>
  <q-page class="flex flex-center" id="index-page-wrap">
    <div id="index-animation-wrap">
      <Canvas />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { PrintName } from '../js/index.js'
import Canvas from 'components/Canvas'

PrintName('Otávio')

export default defineComponent({
  name: 'PageIndex',
  components: {
    Canvas
  }
})
</script>
