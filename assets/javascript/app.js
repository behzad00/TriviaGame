$(document).ready(function(){
  
var number = 40;

var intervalId;
var numberOfCorrectAnswers = 0 ;
var numberOfIncorrectAnswers = 0 ;
var numberOfUnAnswered = 0 ;



var correctAnswers = ["Berlin", "Toronto", "Moonlight", "121", "25 performed by Adele"];

console.log(correctAnswers);

function run() {
		 //$(".page1").show();
	    $(".page3").hide();
        $(".page2").hide();
    intervalId = setInterval(decrement, 1000);
    	$("#start").click(function() {
        $(".page1").hide();
        // $("#page3").hide();
        $(".page2").show();
        $("#page3").hide();
    });



    function decrement() {
        number--;
        $("#timeremaining").html("Time Remaining: " + number);
		if (number === 0) {

			stop();
            $(".page2").hide();
            $(".page3").show();

        }

        return number;
    }

    function stop() {


        clearInterval(intervalId);
    }

    function done() {
    	$("#done").click(function(){
    		number === 0 ;
    		stop();
    		$(".page2").hide();
    		$(".page3").show();
    		$("#correctanswers").html("Correct Answers: " + numberOfCorrectAnswers);
    		$("#incorrectanswers").html("Incorrect Answers: " + numberOfIncorrectAnswers);
    		$("#unanswered").html("Unanswered: " + nnumberOfUnAnswered);

    	});
    }

};

run();
});