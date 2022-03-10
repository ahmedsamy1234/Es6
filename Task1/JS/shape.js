console.log("dasfsd");

// class Shape {
//     x;
//     y;
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
//     }

//     calcArea(){
//         return 0;
//     }

//     log(){
//         console.log(`x=${this.x},y=${this.y},area=${this.calcArea()}`)
//     }
// }
class Shape 
{

dim1;
dim2;
type;
constructor(x,y)
{
    this.dim1=x;
    this.dim2=y;
}

    calcArea(){
        return 0;
     }

    log(){
        console.log(`x=${this.x},y=${this.y},area=${this.calcArea()}`)
   }

}

class Rectangle extends Shape
{
    width;
    length;
    constructor(width,height)
    {   super(0,0);
        if(width.constructor.name=="Rectangle")
        {   var rect=width;
            this.width= rect.width;
            this.height=rect.height;
          
        } 
        else
        {
    
            this.width=width;
            this.height=height;

        }

        this.type="Rectangle"
        
        
    }

    calcArea()
    {

        return this.width*this.height
    }
    Circumference()
    {

        return 2*(this.width+this.height)
    }

    log(){
        console.log(`Circumference=${this.Circumference()}, area=${this.calcArea()}+ ${this.type}`)
   }


}

class Sqaure extends Rectangle {
    length ;
    constructor(length)
    {  super(0,0)
        if(length.constructor.name=="Sqaure")
        {
            this.length= length.length
          
        } 
        else
        {
    
       this.length=length;
        }
        this.type="Sqaure"

    }
    calcArea()
    {

        return this.length*this.length
    }
    Circumference()
    {

        return 2*(this.length+this.length)
    }

    log(){
        console.log(`Circumference=${this.Circumference()}, area=${this.calcArea()}+ ${this.type}`)
    }

}


class Oval extends Shape
{
    A;
    B;
    constructor(a,b)
    {   super(0,0);
       
        if(a.constructor.name=="Oval")
        {   var oval=a;
            this.A= oval.A;
            this.B=oval.B;
          
        } 
        else
        {
    
            this.A=a;
            this.B=b;
        }
        this.type="Oval"
    }

    calcArea()
    {

        return this.B*this.A*3.14;
    }
    Circumference()
    {

        return 3.14*(this.A+this.B)
    }

    log(){
        console.log(`Circumference=${this.Circumference()}, area=${this.calcArea()}+ ${this.type}`)
   }


}


class Circle extends Oval {
    R ;
    constructor(r)
    {       super(0,0);

        if(r.constructor.name=="Circle")
        {
            this.R= r.R
          
        } 
        else
        {
    
       this.R=r;
        }

        this.type="Circle"
        
    }
    calcArea()
    {

        return this.R*this.R*3.14
    }
    Circumference()
    {

        return 3.14*(this.R+this.R)
    }

    log(){
        console.log(`Circumference=${this.Circumference()}, area=${this.calcArea()}+ ${this.type}`)
    }

}

let rc= new Rectangle(5,10);
let Sq= new Sqaure(5);
let ov= new Oval(10,5);
let cr= new Circle(5);
rc.log();
Sq.log();
ov.log();
cr.log();

console.log("---------------------------------------------------")

let rcCloned= new Rectangle(rc);
let SqCloned= new Sqaure(Sq);
let ovCloned= new Oval(ov);
let crCloned= new Circle(cr);
rcCloned.log();
SqCloned.log();
ovCloned.log();
crCloned.log();


// class Rectangle extends Shape{
//     width;
//     height;
//     static numberOfObject=0;
//     constructor(x,y,width,height){
//         if(Array.isArray(x)){
//             super(x[0],x[1]);
//             this.width=x[2];
//             this.height=x[3];
//         }
//         else if(width==undefined){
//             super(0,0);
//             this.width=x;
//             this.height=y;
//         }else{
//             super(x,y);
//             this.width=width;
//             this.height=height;
//         }
//         Rectangle.numberOfObject++;
//     }

//     calcArea(){
//         return this.width*this.height;
//     }

//     static alertNumberOfObject(){
//         alert(Rectangle.numberOfObject)
//     }
// }
