class Element {
  constructor({ x, y, isTransposable, isMortal, imageIcon }) {
    this.pos = new Position(x, y);
    this.isTransposable = isTransposable;
    this.isMortal = isMortal;
    this.imageIcon = new Image(Consts.CELL_SIZE, Consts.CELL_SIZE);
    this.imageIcon.src = `${Consts.IMG_PATH}/${imageIcon}`;
  }

  overlap(element) {
    const xDist = Math.abs(element.pos.getX() - this.pos.getX());
    const yDist = Math.abs(element.pos.getY() - this.pos.getY());

    return xDist < 1.0 && yDist < 1.0;
  }

  getStringPosition() {
    return `(${this.pos.getX() / Consts.CELL_SIZE}, ${this.pos.getY() /
      Consts.CELL_SIZE})`;
  }

  setPosition(x, y) {
    return this.pos.setPosition(x, y);
  }

  isTransposable() {
    return this.isTransposable;
  }

  setTransposable(isTransposable) {
    this.isTransposable = isTransposable;
  }

  isMortal() {
    return this.isMortal;
  }

  setMortal(isMortal) {
    this.isMortal = isMortal;
  }

  moveUp() {
    return this.pos.moveUp();
  }

  moveDown() {
    return this.pos.moveDown();
  }

  moveRight() {
    return this.pos.moveRight();
  }

  moveLeft() {
    return this.pos.moveLeft();
  }
}
