// init class

const gitHub = new GitHub();

// search input

const searchUser = document.querySelector("#searchUser");

// add event listeners
searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;

  if (userText !== "") {
    // make http call
    gitHub.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //  show alert
        alert("user Not Found");
      } else {
        //   show profile
      }
    });
  } else {
    //   clear profile
  }
});
