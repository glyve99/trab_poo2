class Lolo extends Element {
  constructor(x, y) {
    super({ x, y, isTransposable: false, isMortal: false, imageIcon: 'lolo.png' });
    this.image = new Image(Consts.CELL_SIZE, Consts.CELL_SIZE);
  }

  autoDraw() {
    Drawing.draw(this.pos.getX(), this.pos.getY(), this.imageIcon);
  }

  backToLastPosition() {
    this.pos.comeBack();
  }
}