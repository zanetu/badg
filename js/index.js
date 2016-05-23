(function() {
	'use strict';
	var sa = document.getElementsByName('sa')[0];
	sa && sa.addEventListener('click', function() {
		document.s.cx.value = document.f.cx.value;
		document.s.ie.value = document.f.ie.value;
		document.s.q.value = document.f.q.value;
	}, false);
	var btnI = document.getElementsByName('btnI')[0];
	btnI && btnI.addEventListener('click', function() {
		document.g.q.value = document.f.q.value;
	}, false);
	document.getElementById('q').focus();
})();