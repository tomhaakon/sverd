export default {
 

  mounted() {
    console.warn('loaded game.js');

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // canvas 
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //test
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 150, 100);


    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    
      
    });
  }
}


