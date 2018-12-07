(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49738619-1', 'bassam.co');
ga('send', 'pageview');



(function() {
	var quotes = [
	{
		"quote": "A change in perspective is worth 80 IQ points.",
		"author": "Alan Kay"
	},
	{
		"quote": "The best way to predict the future is to invent it.",
		"author": "Alan Kay"
	},
	];
	var qElm = document.getElementsByClassName('f-quote')[0];
	var aElm = document.getElementsByClassName('f-author')[0];

	var randomVal = Math.floor(Math.random() * quotes.length);

	qElm.innerHTML = quotes[randomVal].quote
	aElm.innerHTML = quotes[randomVal].author


	var footer = document.getElementsByClassName('footer')[0];
	var body = document.getElementsByTagName('body')[0];
	var counter = 0;
	footer.addEventListener('click', function() {
		counter++;
		if(counter >= 3) {
			body.innerHTML = "<p class='alo'>♡♡ALIYA♡♡</p>";
		}
		setTimeout(function() {
			counter = 0;
		}, 1000);
	});

	var menu_button = document.getElementsByClassName('button--menu')[0];
	var menu_list = document.getElementsByClassName('site-nav__list')[0];

	var toggleState = function (elem, one, two) {
		elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
	};

	menu_button.addEventListener('click', toggleState.bind(null, menu_list, 'open', 'closed'), false);
})(window);
