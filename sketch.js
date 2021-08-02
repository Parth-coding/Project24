const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber1,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7,rubber8,stone,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);

    iron= new Iron(450,height-50);
    stone= new Stone(700,height-50);

  rubber1=new Rubber(200,550,50);
  rubber2=new Rubber(220,550,50);
  rubber3=new Rubber(240,550,50);
  rubber4=new Rubber(260,550,50);
  rubber5=new Rubber(280,550,50);
  rubber6=new Rubber(300,550,50);
  rubber7=new Rubber(320,550,50);
  rubber8=new Rubber(340,550,50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
   rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    iron.display();
    stone.display();
    
console.log(mouseY);
    
 
}