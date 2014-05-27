LocationUpdater = {
	getCoordinates: function() {
		navigator.geolocation.getCurrentPosition(this.initializeFeed, this.errors)
	},
	initializeFeed: function(position) {
		gCoordinates = [position.coords.latitude, position.coords.longitude]


	},
	errors: function() {
    navigator.notification.alert("We're sorry we couldn't find you! We'll keep searching...", console.log('Unable to get position.'))
	}
}