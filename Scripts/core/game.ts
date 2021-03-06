// IIFE - Immediately Invoked Function Expression
(function(){
let canvas = document.getElementById("canvas");
let stage:createjs.Stage;
// let helloLable:createjs.Text;
let helloLable:objects.Lable;
let helloLable1:objects.Lable;
// let clickMeButton: createjs.Bitmap;
let clickMeButton: objects.Button;
let clickMeButton1: objects.Button;
let clickMeButton2: objects.Button;



    function Init():void{
        console.log("Initialization Started");

        Start();
        
        
    }
    function Start():void{
        console.log("Starting Application...");

        stage = new createjs.Stage(canvas);

        stage.enableMouseOver(20); //turn this on the button

        createjs.Ticker.framerate = 60; //60FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update():void{
        // helloLable.rotation += 3;  //second
        stage.update();//redraws the stage
    }
    // function clickMeButtonMouseOver():void{
    //     clickMeButton.alpha = 0.7;
    // }
    // function clickMeButtonMouseOut():void{
    //     clickMeButton.alpha = 1.0;
    // }
    function clickMeButtonClick():void{
        let random = Math.floor(Math.random() * 6+1 );
        let random1 = Math.floor(Math.random() * 6+1 );
        var number =random;
        var number2 =random1;
        helloLable.text = number.toString();
        helloLable1.text = number2.toString();
        helloLable.regX = helloLable.getMeasuredWidth()*0.5;
        helloLable.regY = helloLable.getMeasuredHeight()*0.5;
        clickMeButton1 = new objects.Button("./Assets/images/" + number + ".png",40,10);

        clickMeButton2 = new objects.Button("./Assets/images/" + number2 + ".png",280,10);
        stage.addChild(clickMeButton1,clickMeButton2);

    }
        
    function Main(){
        console.log("Game Started...");

        // helloLable = new createjs.Text("WHeo0, World", 
        // "40px Consolas", "#000000" );
        helloLable = new objects.Lable("1", 
        "20px", "Consolas", "#000000", 60, 240, true );
        helloLable1 = new objects.Lable("1", 
        "20px", "Consolas", "#000000", 320, 240, true );
        // helloLable.regX = helloLable.getMeasuredWidth()  *0.5;
        // helloLable.regY = helloLable.getMeasuredHeight()  *0.5;
        
        // helloLable.x = 320;
        // helloLable.y = 200;
        stage.addChild(helloLable);
        stage.addChild(helloLable1);

        // clickMeButton = new createjs.Bitmap(
        //     "./Assets/images/clickMeButton.png");
        clickMeButton1 = new objects.Button("./Assets/images/1.png",40,10);
        clickMeButton2 = new objects.Button("./Assets/images/1.png",280,10);
        clickMeButton = new objects.Button("./Assets/images/StartButton.png",320,340);
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        // clickMeButton.x =320;
        // clickMeButton.y =340;
        stage.addChild(clickMeButton);
        stage.addChild(clickMeButton1);
        stage.addChild(clickMeButton2);

        // clickMeButton.on("mouseover", clickMeButtonMouseOver);
        // clickMeButton.on("mouseout", clickMeButtonMouseOut);
        clickMeButton.on("click", clickMeButtonClick);
  
    }

    window.onload = Init;
})();