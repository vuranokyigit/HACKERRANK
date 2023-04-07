



class MyBook extends Book{
//we declare a class mybook and we wanted the inheritance other data from Book class for we use 'extends' method
    constructor(title, author, price){//all variable is consist of the constructor
        super(title, author);//super for inherited declared components
        this.price = price;//select 'price' component

    }
    //creating the method for the output 
    display(){ 

        console.log("Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Price: " + this.price);

    }
}
