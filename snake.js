let point = 2;

class snake {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.grid = 20;
        this.dx = 20;
        this.dy = 0;
        this.cell= [];
        this.Maxcell = 2;

    }

    update() {


        if (!this.endgame()){
            this.x += this.dx;
            this.y += this.dy;
        }

        this.cell.unshift({x:this.x, y:this.y});
        if (this.cell.length > this.Maxcell){
            this.cell.pop();
        }

        this.keyboard();

        if (this.x < 0){
            this.x = this.game.canvas.width;
        } else if (this.x > this.game.canvas.width ){
            this.x = 0;
        }
        if (this.y < 0){
            this.y = this.game.canvas.height;
        } else if (this.y > this.game.canvas.height){
            this.y = 0;
        }
    }

    draw() {
        for (let i= 0; i < this.cell.length; i++) {
             let randomColor1= Math.floor(Math.random()*255);
             let randomColor2= Math.floor(Math.random()*255);
             let randomColor3= Math.floor(Math.random()*255);


            console.log(this.cell.length);
            let rgb= `rgb(${randomColor1},${randomColor2},${randomColor3})`;
            this.game.context.fillStyle = rgb;
            this.game.context.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
            this.game.context2.font = '40px arial';
            this.game.context2.fillText("Score:" + point,10, 40,100  );
            this.game.context2.fillStyle = rgb;
        }

        if (this.endgame()){
            this.game.context.font = '50px arial';
            this.game.context.fillText("Game over !: "+ this.cell.length  +"điểm", 200, 200);
        }

    }

    keyboard() {
        document.addEventListener('keydown', (e) => {
            if (e.which == 37 && this.dx == 0) {
                this.dx = -this.grid;
                this.dy = 0;
            } else if (e.which == 38 && this.dy == 0) {
                this.dx = 0;
                this.dy = -this.grid;
            } else if (e.which == 39&& this.dx == 0) {
                this.dx = this.grid;
                this.dy = 0;
            } else if (e.which == 40 && this.dy == 0 ) {
                this.dx = 0;
                this.dy = this.grid;
            }
        })
    }

    eat(x, y){
        if (this.x == x && this.y == y){
            this.Maxcell++;
            point++;
            return true;
        }
    }
    endgame(){
        for (let i = 1; i < this.cell.length; i++){
            if (this.x == this.cell[i].x && this.y == this.cell[i].y){
                return true
            }
        }
        return false
    }

}