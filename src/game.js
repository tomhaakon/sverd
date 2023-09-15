import { onMounted, onUnmounted } from "vue";

export default function useGame() {
  onMounted(() => {
    console.warn("loaded game.js");

    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // test
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 150, 100);

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
