$(document).ready(function(){
	var $pageHeader = $('#page_header');
	var $optionsDiv = $('#options_div');
	var $outcomeDiv = $('#outcome_div');
	var $outcomeMessage = $('#outcome_message')
	var $winsValue = $('#wins_value');
	var $lossesValue = $('#losses_value');
	var $tiesValue = $('#ties_value');
	var $matchesValue = $('#matches_value');

	var $image_divs = $('.image_div');
	var $images = $('.image');
	var $choices = $('.choice');
	var choicesArray = Array.from($choices)

	var userChoice;
	var compChoice;
	var compareChoice;
	var userWinCount = 0;
	var userLossCount = 0;
	var tieCount = 0;
	var matchCount = 0;

	$choices.click(function(){
		compChoice = choicesArray[Math.floor(Math.random()*choicesArray.length)];
		userChoice = this;
		$choices.removeClass('user_choice')
		$choices.removeClass('comp_choice')
		declareWinner()
		$(userChoice).addClass('user_choice');
		$(compChoice).addClass('comp_choice')

	});

	function declareWinner() {
		compareChoice = choicesArray.indexOf(userChoice) - choicesArray.indexOf(compChoice)
		if(compareChoice === 1 || compareChoice === -2) {
			userWin()
		} else if(compareChoice === 0) {
			tie()
		} else {
			userLoss()
		}
		matchCount += 1
		$matchesValue.text(matchCount)
	}

	function userWin() {
		$outcomeMessage.text('You won!')
		userWinCount += 1
		$winsValue.text(userWinCount)

	}

	function tie() {
		$outcomeMessage.text('Tie!')
		tieCount += 1
		$tiesValue.text(tieCount)
	}

	function userLoss() {
		$outcomeMessage.text('You lost!')
		userLossCount += 1
		$lossesValue.text(userLossCount)
	}

})