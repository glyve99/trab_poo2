class GameController {
  drawAllElements(elements) {
    elements.forEach(element => {
      element.autoDraw();
    });
  }

  processAllElements(elements) {
    if (elements.length === 0) return;

    const lolo = elements[0];

    if (!this.isValidPosition(elements, lolo)) {
      lolo.backToLastPosition();
      return;
    }

    let elemTemp;
    for (let i = 1; i < elements.length; i++) {
      elemTemp = elements[i];
      if (lolo.overlap(elemTemp)) {
        if (elemTemp.isMortal) {
          Drawing.getGameScreen().removeElement(elemTemp);
        }
      }
    }
  }

  isValidPosition(elements, tempElem) {
    for (let i = 1; i < elements.length; i++) {
      const elemAux = elements[i];

      if (!elemAux.isTransposable) {
        if (elemAux.overlap(tempElem)) {
          return false;
        }
      }
    }
    return true;
  }
}
