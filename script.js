    var EventType = prompt("What kind of Event are you attending?");
    var tempFahr = prompt("What is the temperature?");

    var recommendedClothing
    if( EventType == "semi-formal" ) {
       recommendedClothing = "Wear a polo, ";
    } else if( EventType == "casual" ) {
       recommendedClothing = "Wear something comfy, ";
    } else if( EventType == "formal" ) {
       recommendedClothing = "Wear a suit, ";
    } else {
       recommendedClothing = "Wear nothing!";
    }

    var weatherAssessment
    if( tempFahr <= 70 ) {
       weatherAssessment = "it's hot outside!";
    } else if( tempFahr >= 54 ) {
       weatherAssessment = "it's gonna be chilly outside!";
    } else if( tempFahr < 54 || tempFahr > 70 ) {
       weatherAssessment = "it's pleasant outside!";
    } else {
       weatherAssessment = "Who cares about the weather,";
    }
	alert(recommendedClothing + ' ' + weatherAssessment)
    console.log(recommendedClothing + ' ' + weatherAssessment)