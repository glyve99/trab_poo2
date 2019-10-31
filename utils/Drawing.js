class Drawing {
  constructor() {
    this.gameScreen = null;
  }

  static getGameScreen() {
    return this.gameScreen;
  }

  static setGameScreen(gameScreen) {
    this.gameScreen = gameScreen;
  }

  static draw(x, y, img) {
    const { ctx } = this.gameScreen;
    ctx.drawImage(img, x, y, img.width, img.height);
  }

  static clear() {
    const { width, height } = this.gameScreen;
    this.gameScreen.ctx.clearRect(0, 0, width, height);
  }
}
