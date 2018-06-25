// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    // let helloLable:createjs.Text;
    var helloLable;
    var clickMeButton;
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
        // helloLable.rotation += 3;  //second
        stage.update(); //redraws the stage
    }
    function Main() {
        console.log("Game Started...");
        // helloLable = new createjs.Text("WHeo0, World", 
        // "40px Consolas", "#000000" );
        helloLable = new objects.Lable("WHeo0, World", "40px", "Consolas", "#000000", 320, 240, true);
        // helloLable.regX = helloLable.getMeasuredWidth()  *0.5;
        // helloLable.regY = helloLable.getMeasuredHeight()  *0.5;
        // helloLable.x = 320;
        // helloLable.y = 200;
        stage.addChild(helloLable);
        clickMeButton = new createjs.Bitmap("./Assets/images/clickMeButton.png");
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 320;
        clickMeButton.y = 340;
        stage.addChild(clickMeButton);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map