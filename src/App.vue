<template>
  <div class="md:hidden">
    <ButtonOverlay />
    <canvas ref="canvasRef" id="gameCanvas" class="w-screen h-screen"></canvas>
  </div>
  <div class="lg:block">
    you are not a mobile gamer, change to mobile view and refresh. twat.
  </div>
</template>

<script setup>
import useGame from "./game.js";
import ButtonOverlay from "./components/UI/ButtonOverlay.vue";

const { canvasRef } = useGame();

console.warn("Loaded App.vue");
</script>
