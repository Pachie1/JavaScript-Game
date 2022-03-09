var cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var dmg   = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var suits = ["diamonds", "hearts", "spades", "clubs"];


var deck = new Array();

function getDeck()
{
	var deck = new Array();
	

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			for(var j = 0; j < dmg.length; j++)
			{
			var card = {Value: cards[x], Suit: suits[i], Dmg: dmg[j]};
			deck.push(card);
			}
		}
	}
	return deck;
}

function shuffle()
{
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
	renderDeck();
}

function renderDeck()
{	
	var i=0;
	document.getElementById('deck').innerHTML = '';
	for( i = 0; i < 1; i++)
	{
		var card = document.createElement("div");
		var dmg = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		let btn = document.createElement("button");

		card.className = "card";
		dmg.className = "dmg";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;
		btn.className = "button";

		value.innerHTML = deck[i].Value;
		dmg.innerHTML = deck[i].Dmg;
		btn.innerHTML = "Select";
		
		card.appendChild(value);
		card.appendChild(suit);
		card.appendChild(dmg);
		card.appendChild(btn);

		
		document.getElementById("deck").appendChild(card);
	}
	
	document.getElementById('deckP').innerHTML = '';
	for( i ; i < 6; i++)
	{
		var card = document.createElement("div");
		var dmg = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		let btn = document.createElement("button");


		card.className = "card";
		dmg.className = "dmg";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;
		btn.className = "buttonP";

		value.innerHTML = deck[i].Value;
		dmg.innerHTML = deck[i].Dmg;
		btn.innerHTML = "Attack";
		
		card.appendChild(value);
		card.appendChild(suit);
		card.appendChild(dmg);
		card.appendChild(btn);

	
		document.getElementById("deckP").appendChild(card);	
	}
}


function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
}

window.onload = load;
