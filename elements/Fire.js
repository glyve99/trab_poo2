class Fire extends Element {
  constructor(x, y) {
    super({ x, y, isTransposable: true, isMortal: true, imageIcon: 'fire.png' });
    this.countDelay = 0;
    this.DELAY_MOVIMENT = 50;
  }

  autoDraw() {
    Drawing.draw(this.pos.getX(), this.pos.getY(), this.imageIcon);

    this.countDelay++;
    if (this.countDelay === this.DELAY_MOVIMENT) {
      if (!this.moveRight()) {
        Drawing.getGameScreen().removeElement(this);
      }
      this.countDelay = 0;
    }
  }
}
