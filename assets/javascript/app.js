
var number = 45;
var intervalId;;

function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
    
      number--;

      $("#show-number").html("<h2>Time Left " + number + " sec</h2>");
 
      if (number === 0) {
    
        stop();

        alert("Time Up!");
        check();
      }
    }

    function stop() {

      clearInterval(intervalId);
    }
     run();

function check(){
    var q1=document.myform.q1.value;
    var q2=document.myform.q2.value;
    var q3=document.myform.q3.value;
    var q4=document.myform.q4.value;
    var q5=document.myform.q5.value;
    var countright=0;
    var countWrong=0;
    var unAnswered=0;
    if(q1=="a"){
        countright++;
    } 
    if(q2=="a"){
        countright++;
    } 
    if(q3=="a"){
        countright++;
    } 
    if(q4=="a"){
        countright++;
    } 
    if(q5=="b"){
        countright++;
    } 
    if (q1=="b"){
        countWrong++;
    }
     if (q2=="b"){
        countWrong++;
    }
     if (q3=="b"){
        countWrong++;
    }
     if (q4=="b"){
        countWrong++;
    }
     if (q5=="a"){
        countWrong++;
    }
    alert("You got "+countright+" correct!");
    alert("You got "+countWrong+" wrong!");
    alert("You didn't answer "+unAnswered+" .");
    stop();
}