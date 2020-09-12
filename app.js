// init class

const gitHub = new GitHub();
const ui = new UI();

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
        ui.showAlert("user not found", "alert-danger");
      } else {
        //   show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //   clear profile
    ui.clearProfile();
  }
});
