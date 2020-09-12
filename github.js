class GitHub {
  constructor() {
    this.client_id = "Iv1.f854b8de458b6ebd";
    this.client_secret = "d624108ff173aade4828a66bf9743ca2c725eac8";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?my_client_id=${this.client_id}&my_client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?my_client_id=${this.client_id}&my_client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return { profile, repos };
  }
}
