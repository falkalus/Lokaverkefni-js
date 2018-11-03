/* sýnið að þið kunnið ekki einblína á listan
Data Types= -Boolean -Number -String -Object -Array -Function 

Operators= +, -, * eða /
<, <=, ===, !==, >= eða >
|| eða &&
+=, -=, ++ eða --

Conditionals= -If - else if - else

Functions= -Parameters -Arguments -Return -Events -Calling a function 

Loops= -For eða while
*/

/*gagnvirk saga
birta eina blaðsíðu í einu 
leyfir notandanum svo að velja hvað sögupersónan gerir áður en sagan heldur áfram 
Hvort tekur þú bláu eða rauðu?” 
þá væri mynd af rauðri pillu og blárri sem notandinn gæti smellt á 
og svo heldur sagan áfram eftir því hvað notandinn gerði. 
Það væri líka hægt að bjóða uppá að skrifa eitthvað svar inn í <input type=”text” />
*/
/* --------------write the Suitor name--------------*/
var suitor = prompt("Give the Suitor a name");

var get_page = function(page_number) {

	document.querySelector(".saga").innerHTML = book [page_number].saga;
	document.querySelector(".options").innerHTML = book [page_number].options;
		if (page_number == 2) {
			alert("This is the end of the Suitors story")
			}
		if (page_number == 4) {
			alert("Did you remember?")
			}
};

/* --------------choosing the ending--------------*/
var final_choose = function() {
	var input = document.querySelector("#feeling")
	if (input.value.toUpperCase() == "FORGIVE"){
		get_page(5);
	} else if (input.value.toUpperCase() == "REVENGE") {
		get_page(6);
	}
};

/* --------------Book [Array]--------------*/
var book = [ 
	{
	"saga":
		`<h2>There once was a beautiful princess who many wanted to marry, 
		of all the suitors she chose ${suitor}. Unfortunately soon after the wedding the princess fell ill 
		and died. Grief-stricken ${suitor} wished to be sealed inside the crypt with the lovely princess. 
		After a few days in the crypt alone, ${suitor} heard a hissing noise coming from a crack in the wall. 
		It was a snake that crawled into the crypt with them and slithered towards the princess. 
		What did ${suitor} do?</h2>`,	
	"options":
		`<button class="kill" onclick="get_page(1)">Kill the Snake</button>
		<img src="img/Cut.jpg"/>
		<button class="none" onclick="get_page(2)">Nothing</button>
		<img src="img/nothing.jpg"/>`
	},
	{
	"saga":
		`<h2>${suitor} grabbed a dagger and sliced the snake three times and it died instantly.
		Soon after there came another hissing noise and out of the crack 
		there came a second snake and in its mouth i carried 3 leafs. 
		The second snake placed the leaves over the dead snakes wounds and after a moment 
		the dead snake came alive. Both snakes crawled through the crack leaving the 3 leaves behind.</h2>`,
	"options":
		`<p> -Remember- 
		Death will always leave a mark</p>
		<button class="crypt" onclick="get_page(3)">Use leaves</button>
		<img src="img/leaves.jpg"/>`
	},
	{
	"saga":
		`<h2>${suitor} did nothing, and after 10 days in the crypt met with death.</h2>`,
	"options":	
		`<img src="img/end.jpg"/> 
		<button class="back" onclick="get_page(0)">sigh...</button>`
	}, 
	{
	"saga":
		`<h2>${suitor} placed the leaves on the princess, slowly her cheeks became red and she opened her eyes.
		The leaves had brought her back just as it had the snake. ${suitor} and the princess escaped the crypt
		and headed to their kingdom.</h2>`,
	"options":	
		`<img src="img/alive.jpg"/> 
		<button class="love" onclick="get_page(4)">The journey home</button>`
	}, 
	{
	"saga":
		`<h2>Something was different about the princess, 
		she was cold and would not speak to ${suitor},
		${suitor} worried about the princess. ${suitor} soon relised that on their journey home 
		the princess had fallen in love with the kind captain.</h2>`,
	"options":	
		`<img src="img/love.jpg" style="width:500px; height:200px;"/> 
		<button class="after" onclick="final_choose()">${suitor} (Forgive or Revenge)</button>
		<input id="feeling"/>`
	}, 
	{
	"saga":
		`<h2>When the young couple returned to the Kingdom the princess was lost and sad. 
		${suitor} could not stand to see her that way so the princess was given premission to run away 
		with the captain she now loved. The ${suitor} knew that their love had died with her, the magical leaves could
		not bring back her love. Death will always leave a mark.....</h2>`,
	"options":	
		`<img src="img/hope.jpg" style="width:400px; height:150px;"/> 
		<button class="after_good" onclick="get_page(0)">Back</button>`
	}, 
	{
	"saga":
		`<h2>When the young couple returned to the Kingdom ${suitor} was filled with rage
		and could not forgive the princess for falling in love with the captain. The princess begged ${suitor}
		to set her free but insted the princess and the captain were tied together, and sent out
		in a boat run through with holes.</h2>`,
	"options":	
		`<img src="img/angry.jpg" style="width:400px; height:150px;"/> 
		<button class="after_bad" onclick="get_page(0)">Back</button>`
	}, 
];
/* --------------what page you start on when you go to the site--------------*/
get_page(0)


 