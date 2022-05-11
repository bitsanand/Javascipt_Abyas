
class emp{


constructor(id,name){
 this.id = id;

 this.name = name;


}

detail(){
 document.writeln("The Client Id Is "+this.id+ " "+" The Client Name Is "+this.name);
 // document.getElementById("info").innerHTML ="The Client Id Is " + this.id + " " + " The Client Name Is " + this.name;
}



}


var e1 = new emp(12, "kumar");
var e2 = new emp(14,"anand");

document.getElementById("info").innerHTML=e1.detail();
document.getElementById("info").innerHTML = e2.detail();

