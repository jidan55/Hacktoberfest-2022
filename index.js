
function plusMinus(btnplus,btnminus,value, countno){
    
    btnplus.addEventListener('click',function(){
        parseInt(value);
        value= parseInt(value)+1;
        document.getElementById(countno).innerText=value;
    })
    btnminus.addEventListener('click',function(){
        parseInt(value);
        value= parseInt(value)-1;
        if(value<=1){
            value=1;
           
        }
        document.getElementById(countno).innerText=value;
    })
}
var plus = document.getElementById('plus1');
var minus = document.getElementById('minus1');
var valuecount= document.getElementById('count1').innerText;
plusMinus(plus,minus,valuecount,'count1');

var plus2 = document.getElementById('plus2');
var minus2 = document.getElementById('minus2');
var value2 = document.getElementById('count2').innerText;
plusMinus(plus2,minus2,value2,'count2');

var contiBtn = document.getElementById('continue');
function setvalue(element){
    return document.getElementById(element).value;
}

contiBtn.addEventListener('click',function(){

    var email = setvalue('email');
    var number = setvalue('number');
    var name = setvalue('name');
    var address = setvalue('address');
    var city = setvalue('city');
    var postal = setvalue('postal');
    if(email.length==0 || number.length==0|| name.length==0|| address.length==0|| city.length==0|| postal.length==0){
    alert('All field required !');}
    else{
        alert('Successfully submitted !');
    }
})