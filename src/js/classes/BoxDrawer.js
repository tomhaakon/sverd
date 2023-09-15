class BoxDrawer {
  constructor(canvasId, playerImage) {
    console.log(playerImage.image.src);
    console.warn("Loaded BoxDrawer.js");
    // Accept playerImage as a parameter
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.playerImage = playerImage; // Store playerImage
    this.oponentBox = {
      scale: {
        height: this.canvas.height / 2,
        width: (this.canvas.width / 2) * 1.2,
      },
    };
    this.playerBox = {
      scale: {
        height: this.canvas.height / 2,
        width: (this.canvas.width / 2) * 1.2,
      },
    };

    // Constants can be defined here or passed into the constructor
    this.PLAYER_HEIGHT_PROPORTION = 0.4;
    this.MIN_PLAYER_HEIGHT = 300;
    this.MIN_PLAYER_WIDTH = 300;
    //
    this.OPONENT_HEIGHT_PROPORTION = 0.5;
    this.MIN_OPONENT_HEIGHT = 400;
    this.MIN_OPONENT_WIDTH = 300;

    this.boundHandleResize = this.handleResize.bind(this); // Store the bound function
    this.setupEventListeners();

    this.setCanvasDimensions();
    this.drawBoxes(); // Draw boxes after setting canvas dimensions
  }

  drawBox(x, y, width, height, color, text) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
    this.ctx.font = "24px Arial";
    this.ctx.fillStyle = "black";
    let textMetrics = this.ctx.measureText(text);
    let textX = x + (width - textMetrics.width) / 2;
    let textY = y + height / 2 + 12;
    this.ctx.fillText(text, textX, textY);
  }

  drawBoxes() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.oponentBox.scale.height = Math.max(
      this.MIN_OPONENT_HEIGHT,
      this.canvas.height * this.OPONENT_HEIGHT_PROPORTION
    );
    this.oponentBox.scale.width = Math.max(
      this.MIN_OPONENT_WIDTH,
      (this.canvas.width / 2) * 1.4
    );

    this.playerBox.scale.height = Math.max(
      this.MIN_PLAYER_HEIGHT,
      this.canvas.height * this.PLAYER_HEIGHT_PROPORTION
    );
    this.playerBox.scale.width = Math.max(
      this.MIN_PLAYER_WIDTH,
      (this.canvas.width / 2) * 1.4
    );

    // Dynamically calculate x and y positions
    let oponentX = this.canvas.width - this.oponentBox.scale.width;
    let oponentY = 0;
    let playerX = 0; // Player box x position
    let playerY = this.canvas.height - this.playerBox.scale.height;
    this.playerImage.y = playerY;
    // Use drawBox function to draw the boxes

    this.drawBox(
      oponentX,
      oponentY,
      this.oponentBox.scale.width,
      this.oponentBox.scale.height,
      "rgba(255, 0, 0, 0.4)",
      "Oponent"
    );
    this.drawBox(
      10,
      playerY,
      this.playerBox.scale.width,
      this.playerBox.scale.height,
      "rgba(0, 255, 0, 0.5)",
      "Player"
    ); //sfas
    this.ctx.globalAlpha = 0.7; // Change the opacity value (0.0 to 1.0)
    // Resize the playerImage to fit the player box
    this.playerImage.resizeToWidth(this.playerBox.scale.width);
    // Calculate the new position for the image to center it within the opponent box
    const imageX =
      oponentX + (this.oponentBox.scale.width - this.playerImage.width) / 2;
    const imageY =
      oponentY + (this.oponentBox.scale.height - this.playerImage.height) / 2;

    // Set the border style and width
    this.ctx.strokeStyle = "blue"; // Border color
    this.ctx.lineWidth = 5; // Border width

    // Draw the border around the image
    this.ctx.strokeRect(
      oponentX, // X coordinate of the top-left corner
      oponentY, // Y coordinate of the top-left corner
      this.oponentBox.scale.width, // Width of the border
      this.oponentBox.scale.height // Height of the border
    );

    // Reset the stroke style and width for other drawings
    this.ctx.strokeStyle = "black"; // Reset to default stroke color
    this.ctx.lineWidth = 1; // Reset to default stroke width

    // Draw the resized image with the adjusted position
    this.playerImage.x = imageX;
    this.playerImage.y = imageY;

    //! testing
    // console.log(
    //   "Player Box Position:",
    //   playerX,
    //   playerY,
    //   this.playerBox.scale.width,
    //   this.playerBox.scale.height
    // );

    // console.log(
    //   "Image Position:",
    //   this.playerImage.x,
    //   this.playerImage.y,
    //   this.playerImage.width,
    //   this.playerImage.height
    // );

    // this.setCanvasDimensions();
    this.playerImage.draw(this.ctx); // Draw the image after setting canvas dimensions
  }

  setCanvasDimensions() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  handleResize() {
    this.setCanvasDimensions(); // Using the new method here
    this.drawBoxes();
  }
  setupEventListeners() {
    window.addEventListener("resize", this.boundHandleResize);
  }

  destroy() {
    window.removeEventListener("resize", this.boundHandleResize);
  }
}

export default BoxDrawer;
