# UI 
First I looked for a carousel and found this which is free, looked pretty good, came recommended and customisable: https://kenwheeler.github.io/slick/

It supports lazy loading, mouse and touch slide, etc.

# API
Then I loaded the API collection in Postman, set the key and played with the resources.

(I should probably have RTFM of the API at that stage but it's more fun to just explore with Postman =) besides the API is nice and well organised )

I started with *Customer GET info to confirm my customer ID* to confirm who I am, then found *Media GET media of a customer*.

* I took note that I should really check type = IMAGE...later
* I could not find how to page the results, possibly there was an option in the API doc

I found the images in media.images[] came in different format, handy to improve load times:
square, thumbnail, mobile, normal, original

# First Draft
With all that in hand, I could pick an example carousel from the Slick documentation as a starting point.

I created a folder project in **VScode** and got started.

I played a bit with the carousel settings and narrowed them down to the requirements, comparing the options.

# Local AJAX call
I found a nice article on the subject which got me started:
https://api.jquery.com/jQuery.getJSON/

I was about to add the jQuery CDN link, but noticed that Slick already included version 2.2.

Using Postman, I dumped the json response into a **local json file**, which I used to parse and test initially.
I found out it was not necessary to parse twice with JSON.Parse, as it was already deserialised in an object (Mountebank gave me some habits).

Once I loaded the fairly large JSON, I projected the content I was interested in, into an array of objects using a **map** (I resisted the urge to import lodash).

Then I proceeded to build the HTML required for the carousel.

I bumped into an issue with async, which I easily figured out with a little console debugging - I eventually realised that I had to 'apply Slick' only after I created my carousel, or my additions to the DOM wouldn't be ready.

# Weird API issues
Once I got the images working, I swapped the local static json with with the actual https uri from postman, but got a 401 on the browser, which never happened from Postman?

I had a weird issue which seemed to be caused by the version location in query (noticed API collections ask for 2.2 but receive 2.0 responses).

I solved it by swapping the order of the parameters in the query string??

I also noticed that the response format had changed (a 'media' level had disappeared from the json).

# Cleanup
Finally, I split js and css into their own files, cleaned up the dead code and played a little with the CSS to make it look better.

I imported my favourite bootstrap style called Darkly, labelled the page and displayed the images caption.
