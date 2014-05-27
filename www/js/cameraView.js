function CameraView() {
  this.cameraButtonSelector = '#camera_button';
}

CameraView.prototype = {
  getCameraButtonSelector: function() {
    return $(this.cameraButtonSelector)
  }
}