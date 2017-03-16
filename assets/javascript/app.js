var number = 70;


var intervalId;


function run() {
    intervalId = setInterval(decrement, 1000);
    $("#start").click(function() {
        $("#page01").hide();
        $("#page02").show();
    });



    function decrement() {
        //  Decrease number by one.

        number--;
$("#timeremaining").html( "Time Remaining: " + number  );
        //  Show the number in the #show-number tag.
        


        
        if (number === 0) {

           
            stop();
            $("#page02").hide();
            $("#page03").show();

        }
        return number;
    }

    function stop() {

        
        clearInterval(intervalId);
    }

    };

    run();
