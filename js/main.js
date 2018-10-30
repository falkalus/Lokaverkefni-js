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
//you name
var suitor = prompt("Give the Suitor a name");

var get_page = function(page_number) {

	document.querySelector(".saga").innerHTML = book [page_number].saga;
	document.querySelector(".options").innerHTML = book [page_number].options;
		if (page_number == 2) {
			alert("This is the end of the Suitors story")
			}
 
 /* var input = document.getElementById("#feeling");
  var filter = input.value.toUpperCase();
 if (filter == "") {
    return;
  }
    if (input.toUpperCase() == angry) {
    	alert(red);
    } 

	on_page++*/
}

on_page = 0 


//Book [Array]
var book = [ 
	{
	"saga":
		`<h2>There once was a beautifull princess who many wanted to marry, 
		of all the suitors she chose ${suitor}. Unfortunatly soon after the wedding the princess fell ill 
		and died. Grief stricken ${suitor} wished to be sealed inside the crypt with the lovely princess. 
		After a few days in the cript alone, ${suitor} heard a hissing noice coming from one of the crecks. 
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
		Soon after there came another hissing noice and out of the creck 
		there came a second snake and in its mouth i carried 3 leafs. 
		The second snake placed the leaves over the dead snakes wounds and after a moment 
		the dead snake came alive. Both snakes crawled through the creck leaving the 3 leaves behind.</h2>`,
	"options":
		`<p> -Remember- </p>
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
		The leaves had broght her back just as it had the snake. ${suitor} and the princess escaped the crypt
		and headed to their kingdom.</h2>`,
	"options":	
		`<img src="img/alive.jpg"/> 
		<button class="love" onclick="get_page(4)">The journey home</button>`
	}, 
	{
	"saga":
		`<h2>${suitor} placed the leaves on the princess, slowly her cheeks became red and she opened her eyes.
		The leaves had broght her back just as it had the snake. ${suitor} and the princess escaped the crypt
		and headed to their kingdom.</h2>`,
	"options":	
		`<img src="img/alive.jpg"/> 
		<button class="after" onclick="get_page(4)">Chose Hope or anger</button>
		<input id="feeling"/>`
	}, 
];

get_page(0)


 