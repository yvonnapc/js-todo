class Greeter{
  constructor(public message: string){}

  greet(){
    return "Hello, " + this.message;
  }
}

var greeters = [];
greeters.push(new Greeter("Hello"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("Tired, thanks"));
console.log(greeters);
for(var greeter of greeters){
  console.log(greeter);
};
