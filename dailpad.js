$(document).ready(function(){
    var counter = 1;
        $(".digit").on('click', function() {
        var number = ($(this).clone().children().remove().end().text());
        if (counter <= 10) {
            $("#output").append('<span style="color: navy">' + number.trim() + '</span>');
            counter++
        }
        });

        $('#delete').on('click', function() {
        $('#output span:last-child').remove();
        counter--;
        });
  });



