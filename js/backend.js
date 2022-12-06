const init = () => {
  const config = {
    apiKey: "AIzaSyCrsjlMUF3qnaWQSgEtrB0vXncwANSOf_o",
    authDomain: "aaron-kibuuka.firebaseapp.com",
    databaseURL: "https://aaron-kibuuka-default-rtdb.firebaseio.com",
    projectId: "aaron-kibuuka",
    storageBucket: "aaron-kibuuka.appspot.com",
    messagingSenderId: "485100229335",
    appId: "1:485100229335:web:d905f394d2e9a268519692",
    measurementId: "G-5P21ME51LF",
  };

  try {
    if (!firebase.apps.length) {
      let instance = firebase.initializeApp(config);
      instance.analytics();
      return instance;
    } else {
      return firebase.app();
      // if already initialized, use that one
    }
  } catch (error) {
    console.log("App is offline");
  }
};

function uploadUserMessage() {
  console.log("send btn clicked");
  // collect the data
  // open db connection
  // upload the message
  let inputs = document.getElementsByClassName("custom-input");

  let upload_payload = {
    name: inputs[0].value,
    email: inputs[1].value,
    phone_number: inputs[2].value,
    message: inputs[3].value,
  };

  send_message(upload_payload);
}

function send_message(data) {
  let app = init();

  let messages_ref = app.database().ref("messages");

  messages_ref
    .push(data)
    .then((d) => {
      document.getElementById("submitSuccessMessage").style.display = "block";
    })
    .catch((error) => {
      document.getElementById("submitErrorMessage").style.display = "block";
      console.log(error);
    });
}
