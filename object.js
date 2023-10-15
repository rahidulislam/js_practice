const Student=function (name,age){
    this.name=name;
    this.age=age;
    this.diplay=function (){
        console.log(this.name+" "+this.age)
    }
}
const student1=new Student("vishal",20);
const student2 = new Student("Sakil",30);
student1.diplay();
student2.diplay();