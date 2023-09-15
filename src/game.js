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

    //fillrect x, y, width, height
    //oponent box
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
    ctx.fillRect(150, 15, oponentBox.scale.width, oponentBox.scale.height);

    //playerbox
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
    ctx.fillRect(10, 440, playerBox.scale.width, playerBox.scale.height);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
  });
}
