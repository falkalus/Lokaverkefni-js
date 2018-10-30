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

//saga Kafli 1
document.querySelector(".saga").innerHTML =`<h2>There once was a beautifull princess who many wanted to marry, 
of all the suitors she chose ${suitor}. Unfortunatly soon after the wedding the princess fell ill and died. 
Grief stricken ${suitor} wished to be sealed inside the crypt with the lovely princess. After a few days in the cript alone, 
${suitor} heard a hissing noice coming from one of the crecks. 
It was a snake that crawled into the crypt with them and slithered towards the princess. What did ${suitor} do?</h2>`

//Option a to b
document.querySelector(".options").innerHTML =`
<button class="kill">Kill the Snake</button>
<img src="img/Cut.jpg"/>

<button class="none">Nothing</button>
<img src="img/nothing.jpg"/>`

document.querySelector(".kill").onclick = function() {
	document.querySelector(".saga").innerHTML =`<h2>${suitor} grabbed a dagger and sliced the snake three times and it died instantly.
	Soon after there came another hissing noice from the crack where the now dead snake had entered. Out of the creck there came a second snake
	and in its mouth i carried 3 leafs. The second snake placed the leaves over the dead snakes wounds and after a moment the dead snake came alive.
	Both snakes crawled through the creck leaving the 3 leaves behind.</h2>`

	document.querySelector(".options").innerHTML =`
	<p>How does it make you feel?</p>
	<input/>
	<button class="take">Use leaves</button>
	<img src="img/leaves.jpg"/>`
}

document.querySelector(".none").onclick = function() {
	document.querySelector(".saga").innerHTML =`<h2>${suitor} did nothing, and after 10 days in the crypt met with death.</h2>`

	document.querySelector(".options").innerHTML =`
	<img src="img/end.jpg"/>`
	alert("This is the end of the Suitors story");
}
