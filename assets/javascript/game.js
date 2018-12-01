var target = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/Blue.jpeg", "./assets/images/Green.jpeg", "./assets/images/Red.jpeg", "./assets/images/Yellow.jpeg"];



	function randomTargetNumber () {
		target = Math.floor(Math.random() * 90) + 9;
	}

	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			crystal.attr("height", "100");
			crystal.attr("width", "25%");
			crystal.css("border", "solid black 2px");
			$(".crystal-images").append(crystal);
		}
	}

	function resetHTML () {
		$(".target").html("<h5><strong>Target: </strong></h5>" + target);
		$(".win-lose").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html("<h5><strong>Your score is: </strong></h5>" + counter);
		$(".crystal-images").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}


	randomTargetNumber();
	resetHTML ();
	resetCrystals ();


	function crystalClick () {

		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == target) {
			wins++;
			totalReset();
		}
		else if (counter > target) {
			losses++;
			totalReset();
		};
	};

	$(document).on("click", ".crystal", crystalClick);