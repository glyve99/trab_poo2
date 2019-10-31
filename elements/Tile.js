class Tile extends Element {
  constructor(x, y) {
    super({ x, y, isTransposable: false, isMortal: false, imageIcon: 'blue-bricks.png' });
    this.image = new Image(Consts.CELL_SIZE, Consts.CELL_SIZE);
    this.countDelay = 0;
    this.DELAY_MOVIMENT = 50;
  }

  autoDraw() {
    Drawing.draw(this.pos.getX(), this.pos.getY(), this.imageIcon);

    this.countDelay++;
    if (this.countDelay === this.DELAY_MOVIMENT) {
      if (!this.moveDown()) {
        Drawing.getGameScreen().removeElement(this);
      }
      this.countDelay = 0;
    }
  }
  backToLastPosition() {
    this.pos.comeBack();
  }
}