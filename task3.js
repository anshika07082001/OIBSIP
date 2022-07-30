function convert(){
    
var value = document.getElementById('inputnum').value;
var selectvalue = document.getElementById('selecttemp').value;
console.log(selectvalue);
var a ="Fahrenheit";
if(a==selectvalue){
    var fconverted =Math.round((value - 32) * 5/9);
    document.getElementById('answer').value=fconverted+"\xB0"+"C";
}
else
{
    var cconverted =Math.round((value * 9/5) + 32);
    document.getElementById('answer').value=cconverted+"\xB0"+"F";
}
document.getElementById('inputnum').value="";
}