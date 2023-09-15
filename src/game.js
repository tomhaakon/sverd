import { ref } from "vue";
import BoxDrawer from "./js/classes/BoxDrawer.js";
import Sprite from "./js/classes/Sprite.js";

export default function useGame() {
  console.warn("Loaded game.js");
  const canvasRef = ref(null);
  const x = 100; // Example valu
  const y = 500;
  const width = 100;
  const height = 100;
  let boxDrawer;

  const playerY = window.innerHeight - 60; // Adjust the value as needed
  const playerImageLoaded = ref(false); // Track whether playerImage is loaded
  console.log("loaded 1 time");
  const playerImage = new Sprite(
    "src/assets/img/characters/oponent.jpg",
    x,
    y,
    width,
    height
  );

  // Listen for the 'load' event of the playerImage
  playerImage.image.onload = () => {
    console.log("playerImageLoaded.value =", playerImageLoaded.value);
    playerImageLoaded.value = true;
    console.log("playerImageLoaded.value =", playerImageLoaded.value);
    initializeGame();
  };

  const initializeGame = () => {
    if (canvasRef.value && playerImageLoaded.value) {
      boxDrawer = new BoxDrawer("gameCanvas", playerImage);
      boxDrawer.drawBoxes();
    } else {
      console.error("Error loading game.js");
    }
  };

  return {
    canvasRef,
  };
}
