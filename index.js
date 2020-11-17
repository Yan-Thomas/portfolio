window.onscroll = function() {
	fixHeader();
};

function fixHeader() {
  
	const header = document.getElementById('header');
	const sticky = header.offsetTop;

	if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
    header.classList.add('has-background-purple');
    
	} else {
    header.classList.remove('sticky');
    header.classList.remove('has-background-purple');
	}
}
