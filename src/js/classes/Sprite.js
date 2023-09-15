class Sprite {
  constructor(src, x, y, width, height) {
    this.image = new Image();
    this.image.src = src;
    this.x = x;
    this.y = y;
    this.width = width; // Initialize width
    this.height = height; // Initialize height
    this.loaded = false;

    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width; // Set width based on image width
      this.height = this.image.height; // Set height based on image height
    };
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  resizeToWidth(newWidth) {
    const aspectRatio = this.image.width / this.image.height;
    this.width = newWidth;
    this.height = newWidth / aspectRatio;
  }

  resizeToHeight(newHeight) {
    const aspectRatio = this.image.width / this.image.height;
    this.height = newHeight;
    this.width = newHeight * aspectRatio;
  }
}

export default Sprite;
