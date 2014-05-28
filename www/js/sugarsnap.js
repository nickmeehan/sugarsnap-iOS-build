SugarSnap = {
	initialize: function() {
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure)		
	},
	getCoordinatesSuccess: function(position) {
		// start spinner here
		alert('position.coords.latitude')
		// console.log(position)
		var firebaseController = new FirebaseController(position, FirebaseConnection.getGeo())
		alert(firebaseController.latitude)
		var photoController = new PhotoController(new PhotoView())
		firebaseController.subscribeListenerForInitialPhotos(photoController)

		new CameraController(new CameraView()).bindCameraListener()
	},
	getCoordinatesFailure: function() {
		navigator.notification.alert("We're sorry we couldn't find you! We'll keep searching...", console.log('Unable to get position.'))
	}
}
