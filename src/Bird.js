class Bird extends BaseContext {
  imgSrc = "../src/images/bird.png";
  image;
  positionX = 50;
  positionY = 50;
  speed = 0;
  acceleration = -0.25;

  constructor() {
    super();
    const image = new Image();
    image.src = this.imgSrc;

    this.image = image;

    image.onload = () => {
      this.draw();
    };
  }

  draw = () => {
    const context = this.getContext();
    context.drawImage(this.image, this.positionX, this.positionY);
  };

  calculateSpeed = () => {
    this.speed += this.acceleration;
  };

  move = () => {
    this.calculateSpeed();
    this.positionY -= this.speed;
    this.draw();
  };

  jump = () => {
    this.speed = 8;
  };
}
