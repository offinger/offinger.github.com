$(document).ready(function(){
	$('div#lastfm').lastFM({
		username: 'offinger',
		apikey: 'bf2763b1f366c0fc028b4a0e6c9894a8',
		number: 4,
		artSize: 'medium',
		noart: 'last.png',
		onComplete: function(){
			//Done
		}
	});
});