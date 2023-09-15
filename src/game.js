import { onMounted, onUnmounted } from "vue";

export default function useGame() {
  onMounted(() => {
    console.warn("loaded game.js");

    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // oponent

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

    const drawBoxes = () => {
      // Clear the canvas for redrawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dynamically calculate box dimensions
      oponentBox.scale.height = canvas.height / 2;
      oponentBox.scale.width = (canvas.width / 2) * 1.4;

      playerBox.scale.height = canvas.height / 2.5;
      playerBox.scale.width = (canvas.width / 2) * 1.4;

      // Dynamically calculate x position for oponentBox to be at the right
      let oponentX = canvas.width - oponentBox.scale.width - 10; // minus 10 for a small margin

      // Dynamically calculate y position for oponentBox to be at the top
      let oponentY = 10;

      // Dynamically calculate y position for playerBox to be at the bottom but above the lower edge
      let playerY = canvas.height - playerBox.scale.height - 10;

      // Draw oponent box
      ctx.fillStyle = "rgba(255, 0, 0, 0.4)";
      ctx.fillRect(
        oponentX,
        oponentY,
        oponentBox.scale.width,
        oponentBox.scale.height
      );

      // Draw player box
      ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
      ctx.fillRect(10, playerY, playerBox.scale.width, playerBox.scale.height);
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
