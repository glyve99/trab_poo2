class Skull extends Element {
  constructor(x, y) {
    super({
      x,
      y,
      isTransposable: false,
      isMortal: false,
      imageIcon: "skull.png"
    });
    this.countIntervals = 0;
    this.TIME_FIRE = 150;
  }

  autoDraw() {
    Drawing.draw(this.pos.getX(), this.pos.getY(), this.imageIcon);

    this.countIntervals++;

    if (this.countIntervals === this.TIME_FIRE) {
      const fire = new Fire(
        this.pos.getX() + Consts.CELL_SIZE,
        this.pos.getY()
      );

      Drawing.getGameScreen().addElement(fire);
      this.countIntervals = 0;
    }
  }
}
