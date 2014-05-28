var FirebaseCommunicator = {
  getInitialPhotos: function(firebaseController, photoController) {
    firebaseController.geo.getPointsNearLoc([firebaseController.latitude, firebaseController.longitude], firebaseController.radius, function(photoArray) {
      photoController.initializeFeed(photoArray);
      // photoController.initializeInfiniteScroll(photoArray);
    })
  }//,
  // addAutomaticUpdateToUserCoordinates: function(controller) {
  //   controller.geo.onPointsNearLoc(controller.coordinates, controller.radius, function(array) {
  //     controller.updatePhotoStream(array);
  //   })
  // }//,
  // sendImageToFirebase: function(url) {
  //   var geo = FirebaseConnection.getGeo()
  //   var timeStamp = Date.now()
  //   //uses global var (will break function if called instantly)
  //   // m..hm...... global var causing Ragnarok
  //   var userPosition = gCoordinates
  //   photoObject = { photoUrl: url, createdAt: timeStamp }
  //   geo.insertByLoc(userPosition, photoObject)
  // }
}
