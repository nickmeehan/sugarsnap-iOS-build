SugarSnap = {
	initialize: function() {
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure.bind(this), { maximumAge: 1000000, timeout: 5000, enableHighAccuracy: false })
	},
	getCoordinatesSuccess: function(position) {
		var firebaseController = new FirebaseController(position, FirebaseConnection.getGeo())
		alert("I'm after intstantiation of firebaseController")
		var photoController = new PhotoController(new PhotoView())
		alert("I'm after photoController")
		firebaseController.subscribeListenerForInitialPhotos(photoController)
		alert("I'm after intial photos")
		firebaseController.subscribeListenerForLivePhotoUpdates(photoController)
		alert("I'm after update photos")
		new CameraController(new CameraView()).bindCameraListener()
		alert("I'm after CameraController")
		// InfiniteScroller.checkScrollThreshold(photoController)
	},
	getCoordinatesFailure: function() {
		navigator.notification.alert("We're sorry we couldn't find you! We'll keep searching...", this.initialize)
	}
}
