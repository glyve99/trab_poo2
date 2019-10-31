class Position {
  constructor(x, y) {
    this.WALK_STEP_DEC_PLACES = 1;
    this.x = x;
    this.y = y;
    this.previousX = x;
    this.previousY = y;
  }

  setPosition(x, y) {
    if (x < 0 || x > Consts.NUM_CELLS * Consts.CELL_SIZE - Consts.CELL_SIZE) {
      return false;
    }

    this.previousX = this.x;
    this.x = x;

    if (y < 0 || y >= Consts.NUM_CELLS * Consts.CELL_SIZE) {
      return false;
    }

    this.previousY = this.y;
    this.y = y;

    return true;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  comeBack() {
    this.setPosition(this.previousX, this.previousY);
  }

  moveUp() {
    return this.setPosition(this.getX(), this.getY() - Consts.CELL_SIZE);
  }

  moveDown() {
    return this.setPosition(this.getX(), this.getY() + Consts.CELL_SIZE);
  }

  moveRight() {
    return this.setPosition(this.getX() + Consts.CELL_SIZE, this.getY());
  }

  moveLeft() {
    return this.setPosition(this.getX() - Consts.CELL_SIZE, this.getY());
  }
}
