class Piece{

constructor( x, y ){
    this.t1 = new Tile(x, y)
    this.t2 = new Tile(x, y+Consts.CELL_SIZE)
    this.t3 = new Tile(x, y+2*Consts.CELL_SIZE)
    this.t4 = new Tile(x, y+3*Consts.CELL_SIZE)
    }
  
}