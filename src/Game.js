class Game extends BaseContext {
  width = 700;
  height = 500;
  bird;
  background;
  interval;

  constructor(bird, background) {
    super();
    this.bird = bird;
    this.background = background;
    this.start();

    window.addEventListener("keydown", () => {
      this.bird.jump();
    });
  }

  start = () => {
    this.interval = setInterval(() => {
      const context = this.getContext();
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.background.move();
      this.bird.move();
    }, 1000 / 60);
  };
}
