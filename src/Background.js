class Background extends BaseContext {
  imgSrc = "../src/images/nenchinh.png";
  image;

  constructor() {
    super();
    console.log("Init background");

    const image = new Image();
    image.src = this.imgSrc;
    image.width === 700;
    image.height === 500;

    image.onload = () => {
      this.image = image;
      this.draw();
    };
  }

  draw() {
    const context = this.getContext();

    context.drawImage(this.image, 6, 0);
  }
}
