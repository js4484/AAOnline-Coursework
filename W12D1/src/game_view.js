function GameView(ctx) {
    this.game = new Game(ctx);
    this.drawingCtx = ctx

    
};

GameView.prototype.start = function(drawingCtx) {
    window.setInterval(() => {
        this.game.moveObjects(drawingCtx);
        this.game.draw(drawingCtx);
    }, 20);
};

module.exports = GameView;