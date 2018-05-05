const appContainer = document.getElementById("app");

// be nice or else!!! :D
const users = [
  //example
  {
    name: "someone",
    bio: "I am an awesome person",
    githubUser: "hlminh2000",
    githubProfile: "https://github.com/hlminh2000"
  }
];

const toHtml = users =>
  users.map(
    user =>
      `<div class="card box">
        <div class="is-size-2"> ${user.name} </div>
        <div class="is-size-4">
          <img class="octocat" src="${"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"}"/>
          <a href="${user.githubProfile}">${user.githubUser}</a>
        </div>
        <div class="is-size-6"> ${user.bio} </div>
      </div>
      `
  );

const render = users => {
  appContainer.innerHTML = toHtml(users).join("\n");
};

render(users);
