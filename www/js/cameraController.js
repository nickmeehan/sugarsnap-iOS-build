function CameraController(view) {
  this.view = view;
  this.cameraOptions = {
  	quality: 49,
  	destinationType: Camera.DestinationType.FILE_URI,
  	encodingType: Camera.EncodingType.PNG,
  	targetWidth: 320,
  	targetHeight: 320
  }
}

CameraController.prototype = {
  bindCameraListener: function() {
  	navigator.notification.alert("cannot alert variable names", null)
    // var photoButton = this.view.getcameraButtonSelector()
    // navigator.notification.alert("what?", null)
    // photoButton.click(function() {
    // 	alert("CLICKED IT!!")
    // })
  },
  beginCamera: function(event) {
  	event.preventDefault();
  	navigator.camera.getPicture(cameraSuccess, cameraError, this.cameraOptions)
  },
  cameraSuccess: function() {
  	alert("SUCCESS!!")
  },
  cameraError: function() {
  	navigator.notification.alert("You should head to the genius bar, something went wrong.", null)
  },
  sendPhotoToServer: function(event) {
  //   event.preventDefault();
  //   var token = TokenScraper.token();
  //   var formData = FormDataPreparer.prepare(event)
  //   SpinnerModule.renderSpinnerAnimation();
  //   var xhr = new XMLHttpRequest()
  //   xhr.open(event.target.method, event.target.action, true);
  //   xhr.setRequestHeader("X-CSRF-Token", token);
  //   xhr.onload = function(response) {
  //     if (xhr.status === 200) {
  //       var url = JSON.parse(response.target.responseText)
  //       FirebaseCommunicator.sendImageToFirebase(url["url"])
  //     } else if (xhr.status === 422 || xhr.status === 500){
  //       SpinnerModule.removeSpinnerAnimation()
  //       var errorHolder = JSON.parse(response.target.responseText)
  //       alert(errorHolder["errors"])
  //     }
  //   };
  //   xhr.send(formData);
  }
}