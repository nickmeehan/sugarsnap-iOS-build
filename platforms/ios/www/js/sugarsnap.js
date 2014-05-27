SugarSnap = {
	init: function() {

		gCoordinates = []
		LocationUpdater.getCoordinates()
		new CameraController(new CameraView()).bindCameraListener()
	}
}