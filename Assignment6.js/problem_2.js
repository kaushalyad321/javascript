
class Shape{
    constructor(width,height){
        this.width=width ;
        this.height=height ;
    }
    getArea(){
        return (this.width * this.height);
    }

}

class Rectangle extends Shape{
    constructor(width,height){
       super(width,height) ;
    }
    getArea(){
        return (`Area of Rectangle is :${this.width* this.height}`) ; // this function will override parent function
    }
    
}

class Triangle extends Shape{
    constructor(width,height){
        super(width,height) ;
     }
     getArea(){
        return (`Area of Triangle is :${0.5*this.width*this.height}`) ; // this function will override parent function
     }

}

let tri =new Triangle(1,2) ;
let rec = new Rectangle(2,3) ;
console.log(tri.getArea()) ;
console.log(rec.getArea()) ;


