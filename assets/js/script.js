var repoList = document.querySelector('ul');

getApi();

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://api.github.com/users/benjstorlie/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        const repo=data[i];
        var listItem = document.createElement('li');
        if (repo.has_pages) {
          listItem.classList.add("has_pages");
          listItem.innerHTML = "<a href="+data[i].homepage+">" + data[i].name+"</a>";
          repoList.appendChild(listItem);
        } else {
          listItem.classList.add("no_pages");
          listItem.innerHTML = "<a href="+data[i].html_url+">" + data[i].name+"</a>";
          repoList.appendChild(listItem);
        }
      }
    });
}

fetchButton.addEventListener('click', getApi);
