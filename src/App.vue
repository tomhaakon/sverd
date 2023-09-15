<template>
  <canvas id="gameCanvas" class="w-screen h-screen bg-black"></canvas>

  <ButtonOverlay />
</template>

<script setup>
import useGame from "./game.js";
import ButtonOverlay from "./components/UI/ButtonOverlay.vue";

useGame();
</script>
