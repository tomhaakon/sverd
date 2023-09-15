import { onMounted, onUnmounted } from "vue";

// Constants
const OPONENT_HEIGHT_PROPORTION = 0.5;
const PLAYER_HEIGHT_PROPORTION = 0.5;
const MIN_OPONENT_HEIGHT = 400; // set a suitable value in pixels
const MIN_PLAYER_HEIGHT = 400; // set a suitable value in pixels
const MIN_OPONENT_WIDTH = 300; // set a suitable value in pixels
const MIN_PLAYER_WIDTH = 300; // set a suitable value in pixels

export default function useGame() {
  onMounted(() => {
    console.warn("loaded game.js");

    //? #CONSTANTS

    const canvas = document.getElementById("gameCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const oponentBox = {
      scale: {
        height: canvas.height / 2,
        width: (canvas.width / 2) * 1.2,
      },
    };

    const playerBox = {
      scale: {
        height: canvas.height / 2,
        width: (canvas.width / 2) * 1.2,
      },
    };
    // Extracted out a general function to draw a box
    const drawBox = (x, y, width, height, color, text) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
      ctx.font = "24px Arial";
      ctx.fillStyle = "black";
      let textMetrics = ctx.measureText(text);
      let textX = x + (width - textMetrics.width) / 2;
      let textY = y + height / 2 + 12;
      ctx.fillText(text, textX, textY);
    };

    const drawBoxes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      oponentBox.scale.height = Math.max(
        MIN_OPONENT_HEIGHT,
        canvas.height * OPONENT_HEIGHT_PROPORTION
      );
      oponentBox.scale.width = Math.max(
        MIN_OPONENT_WIDTH,
        (canvas.width / 2) * 1.4
      );

      playerBox.scale.height = Math.max(
        MIN_PLAYER_HEIGHT,
        canvas.height * PLAYER_HEIGHT_PROPORTION
      );
      playerBox.scale.width = Math.max(
        MIN_PLAYER_WIDTH,
        (canvas.width / 2) * 1.4
      );

      // Dynamically calculate x and y positions
      let oponentX = canvas.width - oponentBox.scale.width - 10;
      let oponentY = 10;
      let playerY = canvas.height - playerBox.scale.height - 10;

      // Use drawBox function to draw the boxes
      drawBox(
        oponentX,
        oponentY,
        oponentBox.scale.width,
        oponentBox.scale.height,
        "rgba(255, 0, 0, 0.4)",
        "Oponent"
      );
      drawBox(
        10,
        playerY,
        playerBox.scale.width,
        playerBox.scale.height,
        "rgba(0, 255, 0, 0.5)",
        "Player"
      );
    };
    drawBoxes();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBoxes();
    };

    window.addEventListener("resize", handleResize);

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
  });
}
