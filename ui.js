class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
     <div class="col-md-3">
     <img class="img-fluid mb-2" src="${user.avatar_url}">
     <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
     </div>     
     <div class="col-md-9">
     <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
     <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
     <span class="badge badge-success">Public followers: ${user.followers}</span>
     <span class="badge badge-info">Public following: ${user.following}</span>
    <br>
    <br>
    <ul class="list-group">
    <li class="list-group-item">Company:${user.company}</li>
    <li class="list-group-item">website:${user.blog}</li>
    <li class="list-group-item">location:${user.location}</li>
    <li class="list-group-item">Memeber Since:${user.created_at}</li>
    </ul>
     </div>     
    </div>
    
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
        <div class="card card-body mb-3">
        <div class="row">
         <div class="col-md-6">
            <a href="${repo.html_name}">${repo.name}</a>
         </div>     
         <div class="col-md-6">
         <span class="badge badge-primary">Star Count: ${repo.stargazer_count}</span>
         <span class="badge badge-secondary">Watcher Counter: ${repo.watchers_count}</span>
         </div>     
        </div>
        </div>
        `;
    });

    // out repo
    document.getElementById("repos").innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement("div");
    div.classList = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".searchContainer");
    //
    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
