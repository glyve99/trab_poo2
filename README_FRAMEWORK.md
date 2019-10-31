# tetris-javascript
> por Pietro Schiavinato

## Estrutura

 - [index.html](#Index)
 - assets
 - control 
	 - [GameScreen](#GameScreen)
	 - [GameController ](#GameController )
 - elements
	 - [Element](#Element)
	 - [Barrier](#Barrier)
	 - [Square](#Square)
 - utils
	 - [Consts](#Consts)
	 - [Position](#Position)
	 
 ### <a name="Index"></a>Index
 Interface de usuário, responsável também por carregar todas as dependências.
```<script  src="utils/Sound.js"></script>
<script  src="utils/Consts.js"></script>
<script  src="utils/Position.js"></script>
<script  src="control/GameController.js"></script>
<script  src="elements/Element.js"></script>
<script  src="elements/Square.js"></script>
<script  src="elements/Barrier.js"></script>
<script  src="control/GameScreen.js"></script>
```

 Contém o **canvas** onde os elementos são renderizados, que é passado para o **GameScreen** rodar o jogo.

`<canvas  id="canvas"  width="600"  height="600"></canvas>`

`const gameScreen =  new  GameScreen({ canvasId:  "canvas"});`

 ### <a name="GameScreen"></a>GameScreen
Responsável pela execução da lógica, listeners de teclado e features de interface.

```
start() {
	this.keyPressed();
	this.addElement(this.square);
	this.addElement(new  Barrier(0, 250));
	this.addElement(new  Barrier(50, 250));
	setInterval(this.loop, Consts.DELAY_SCREEN_UPDATE);
}`

draw(){
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.gameController.processAllElements(this.elements);
	this.gameController.drawAllElement(this.ctx, this.elements);
};
 
loop  = () => {
	this.draw();
	document.title =  this.square.getStringPosition();
};
```



 ### <a name="GameController"></a>GameController
 Responsável pela renderização dos elementos e verificação de colisões
 
`drawAllElement()` Executa o método autoDraw de cada **elemento**

`processAllElements()` Verifica colisão entre todos os elementos do array de elementos, talvez precise ser melhorada caso existam muitos elementos renderizados

 ### <a name="Element"></a>Element
Classe pai de um elemento, contém os métodos de movimentação

 
 ### <a name="Barrier"></a>Barrier
 Exemplo de objeto estático do cenário
 ### <a name="Square"></a>Square
 Exemplo de objeto com movimentação
 ### <a name="Consts"></a>Consts
Constantes
```
const Consts = {
	CELL_SIZE:  50,
	NUM_CELLS:  12,
	IMG_PATH:  "path/to/img",
	DELAY_SCREEN_UPDATE:  10,
}
```
 ### <a name="Position"></a>Position
 Estrutura de coordenadas (x,y). Armazena também a posição anterior de cada elemento.

```
constructor(x, y) {
	this.x = x;
	this.y = y;
	this.previousX = x;
	this.previousY = y;
}
```
  

