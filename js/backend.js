const init = () => {
  const config = {
    apiKey: "AIzaSyCNYMNYUu87JP8wwV_SzBmRnjBOR_7tc6k",
    authDomain: "shopify-98124.firebaseapp.com",
    databaseURL: "https://shopify-98124-default-rtdb.firebaseio.com",
    projectId: "shopify-98124",
    storageBucket: "shopify-98124.appspot.com",
    messagingSenderId: "435147455643",
    appId: "1:435147455643:web:042ad622ab2ed00b3bda3e",
    measurementId: "G-FY9B9367G9",
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

  messages_ref.push(data).then((d) => {
    console.log(data, "pushed to db");
  });
}
