// IIFE - Immediately Invoked Function Expression
(function(){
let canvas = document.getElementById("canvas");
let stage:createjs.Stage;
let helloLable:createjs.Text;

    function Init():void{
        console.log("Initialization Started");

        Start();
        
        
    }
    function Start():void{
        console.log("Starting Application...");

        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update():void{
        helloLable.rotation -= 5;  //second
        stage.update();//redraws the stage
    }
    function Main(){
        console.log("Game Started...");

        helloLable = new createjs.Text("Hello, World", "40px Consolas", "#000000" );
        helloLable.x = 100;
        helloLable.y = 100;

        stage.addChild(helloLable);
    }

    window.onload = Init;
})();