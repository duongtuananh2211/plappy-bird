class Background extends BaseContext {
  imgSrc = "../src/images/nenchinh.png";
  image;
  speed = 0.5;
  interval;
  positionX = 0;

  constructor() {
    super();
    console.log("Init background");

    const image = new Image();
    image.src = this.imgSrc;
    image.width = 700;
    image.height = 500;
    this.image = image;

    image.onload = () => {
      this.draw();
    };
  }

  draw() {
    const context = this.getContext();

    context.drawImage(this.image, this.positionX, 0);
  }

  move() {
    this.positionX -= this.speed;
    this.draw();
  }
}
