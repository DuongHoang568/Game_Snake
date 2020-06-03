class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.context2 = null;
        this.canvas2 = null;
        this.init();
        this.loop();
    }

    init() {
        this.canvas2 = document.createElement('canvas');
        this.context2 = this.canvas2.getContext('2d');
        this.canvas2.width = 800;
        this.canvas2.height = 50;
        //this.canvas2.style = "position: absolute; top: 10px; left: 110px;background-image:url('anhdep.jpeg');background-size:cover";
        document.body.appendChild(this.canvas2);

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 800;
        this.canvas.height = 400;
        //this.canvas.style = "position: absolute; top: 60px; left: 110px;background-image:url('pexels.jpeg');background-size:cover";

        document.body.appendChild(this.canvas);

        this.snake = new snake(this);
        this.food = new food(this);

    }


    loop() {
        this.draw();
        this.update();
        setTimeout(() => this.loop(), 100);

    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);

        this.snake.draw();
        this.food.draw();
    }

    update() {
        this.snake.update();
        if (this.snake.eat(this.food.x, this.food.y)) {
            this.food.update();
        }
    }
}
let g = new game();