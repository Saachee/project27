class sling
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
	
		
		this.body=Bodies.circle(this.x, this.y,  options)
		World.add(world, this.body);

    }
}