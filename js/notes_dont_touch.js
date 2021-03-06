
// text and options
var display_page = function(page_number) {
    // laga page
    var page = book[page_number];

    // Sýnum text í story id 
    document.querySelector("#story").innerHTML = page.text;

    // vera viss um að options sé autt 
    document.querySelector("#options").innerHTML = ""

    // sýnum options fyrir ákveðna síðu EFITT!! 
    // part. The page's "options" property stores a function. call that function.
    page.options();
}
// Adds a button to the page with the given text and when it's pressed we
// display the given page number
var add_button_option = function(text, page_number) {
    var options_section = document.querySelector("#options");

    // First we create the button element and add it to the options section.
    // You can read a bit more about the 'createElement' and 'appendChild'
    // functions here: https://www.w3schools.com/js/js_htmldom_nodes.asp
    var button = document.createElement("button");
    options_section.appendChild(button);

    // Then we set the button text to the text that was passed in.
    button.innerHTML = text

    // Then we set the button's 'onclick' property so that when the button
    // is pressed we display the appropriate page.
    button.onclick = function() {
        display_page(page_number);
    };
    // The reason we don't use 'innerHTML' is that when we change that
    // property on the story section all 'onclick' properties on the buttons
    // in it are erased! It's a weird quirk that's really annyoing, but we
    // just work around it by creating the elements manually.
};
var add_image = function(image_url) {
    var options_section = document.querySelector("#options");

    var image = document.createElement("img");
    options_section.appendChild(image);

    image.src = image_url;
}
// Here we store all the pages in the story, one object for each page.
var book = [
    // page 0
    {
        text: "There once was a beautifull princess who many wanted to marry," 
        options: function() {
            add_button_option("Kill it!", 1);
            add_image("img/Cut.jpg");
            add_button_option("Do nothing", 2);
            add_image("img/nothing.jpg");
        },
    },

    // page 1
    {
        text: "You slice the snake ... there are three leaves on the ground.",
        options: function() {
            add_button_option("Take the leaves", 3);
        },
    },

    // page 2
    {
        text: "You do nothing and die.",
        options: function() {
            add_button_option("Let's try again", 0);
        },
    },

    // page 3
    {
        text: "You take the leaves.",
        options: function() {

        },
    },
];

// When the page first loads we start by showing page number zero
display_page(0);