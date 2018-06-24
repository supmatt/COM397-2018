// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLable;
    function Init() {
        console.log("Initialization Started");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLable.rotation += 3; //second
        stage.update(); //redraws the stage
    }
    function Main() {
        console.log("Game Started...");
        helloLable = new createjs.Text("WHeo0, World", "40px Consolas", "#000000");
        helloLable.regX = helloLable.getMeasuredWidth() * 0.5;
        helloLable.regY = helloLable.getMeasuredHeight() * 0.5;
        helloLable.x = 320;
        helloLable.y = 200;
        stage.addChild(helloLable);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map