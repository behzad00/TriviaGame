var number = 40;

var intervalId;
var numberOfCorrectAnswers = 0 ;
var numberOfIncorrectAnswers = 0 ;
var numberOfUnAnswers = 0 ;



var correctAnswers = ["Berlin", "Toronto", "Moonlight", "121", "25 performed by Adele"];

console.log(correctAnswers);

function run() {
    intervalId = setInterval(decrement, 1000);
    	$("#start").click(function() {
        $("#page1").hide();
        $("#page3").hide();
        $("#page2").show();
    });



    function decrement() {
        number--;
        $("#timeremaining").html("Time Remaining: " + number);
		if (number === 0) {

			stop();
            $("#page2").hide();
            $("#page3").show();

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
    		$("#page2").hide();
    		$("#page3").show();

    	});
    }

};

run();
