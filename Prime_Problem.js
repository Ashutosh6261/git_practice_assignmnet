
let obj = {
  l: 5,
  w: 10,
perimeter: function (){
  console.log (2 * (this.l + this.w));
},
area: function(){
  console.log(this.l * this.w);
}
};

obj.perimeter();
obj.area();