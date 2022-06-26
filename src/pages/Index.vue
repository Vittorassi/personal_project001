<template>
  <q-page class="flex" id="index-page-wrap">
    <div id="nav-menu-wrap">
      <div class="menu-bars" id="menu-bar-1"></div>
      <div class="menu-bars" id="menu-bar-2"></div>
      <div class="menu-bars" id="menu-bar-3"></div>
    </div>
    <div id="welcome-text-wrap">
      <div id="welcome-text-main">Welcome</div>
      <div id="welcome-text-sub">To the best portfolio you've ever seen</div>
    </div>
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
