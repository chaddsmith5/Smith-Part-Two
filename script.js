    var EventType = prompt("What kind of Event are you attending?");
    var tempFahr = prompt("What is the temperature?");

    var recommendedClothing
    if( EventType == "semi-formal" ) {
       recommendedClothing = "Wear a polo and ";
    } else if( EventType == "casual" ) {
       recommendedClothing = "Wear something comfy but, ";
    } else if( EventType == "formal" ) {
       recommendedClothing = "Wear a suit and ";
    } else {
       recommendedClothing = "Wear nothing!";
    }

    var weatherAssessment
    if( tempFahr >= 70 ) {
       weatherAssessment = "forget the jacket, it's hot outside!";
    } else if( tempFahr <= 54 ) {
       weatherAssessment = "grab a coat, it's gonna be chilly outside!";
    } else if( tempFahr < 54 || tempFahr > 70 ) {
       weatherAssessment = "maybe a jacket, it's pleasant outside!";
    } else {
       weatherAssessment = "Who cares about the weather,";
    }
	alert(recommendedClothing + ' ' + weatherAssessment)
    console.log(recommendedClothing + ' ' + weatherAssessment)