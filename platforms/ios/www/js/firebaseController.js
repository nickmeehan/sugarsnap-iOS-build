function FirebaseController(position, firebaseConnectionGeo) {
	this.geo = firebaseConnectionGeo;
	this.radius = 1;
	this.latitude = position.coords.latitude;
	this.longitude = position.coords.longitude;
}


// FirebaseController.prototype = {
// 	subscribeListenerForInitialPhotos: function(photoController) {
// 		FireaseCommunicator.getInitialPhotos(this, photoController)
// 	}
// }