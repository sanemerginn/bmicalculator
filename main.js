function CalculateBMI(){
    var weight=document.getElementById('weight').value;
    var height=document.getElementById('height').value;

    var result=weight/Math.pow(height,2);

    document.getElementById('result').innerText=result.toFixed(2);


    if(result<18.5) {
        document.getElementById('result-statu').style.color= '#38f321';
        document.getElementById('result-statu').innerText='Under Weight';
    }
    else if( result>= 18.5 && result<25){
       document.getElementById('result-statu').style.color='#2368ca'; 
       document.getElementById('result-statu').innerText='Normal';
    } 
    else if( result>= 25 && result<30){
        document.getElementById('result-statu').style.color='#fb0097'; 
        document.getElementById('result-statu').innerText='Over Weight';
     } 
     else if( result>= 30){
        document.getElementById('result-statu').style.color='#370a0a'; 
        document.getElementById('result-statu').innerText='Obese';
     } 
}

function Reset(){
    document.getElementById('weight').value=0;
    document.getElementById('height').value=0;
    document.getElementById('result-statu').innerText='';
    document.getElementById('result').innerText='';
}