class Stone{
	constructor(x,y)
	{

		var options2={
			restitution:0.8,
			friction:0.9,
			density:12
		}
	// assign options to the rubber ball
		
		this.body=Bodies.rectangle(x,y,30,30,options2)

        this.width=30;
		this.height=30; 
		
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;	
            var angle=this.body.angle	;
			push()
			translate(pos.x, pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			rect(0,0,this.width,this.height);   
			
			//draw the ellipse here to display the rubber ball

			pop()
	}

}