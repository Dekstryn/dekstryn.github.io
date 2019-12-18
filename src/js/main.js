"use strict";

console.log(`Hello, I'm glad that you looking heare. On this page I used some JS code to recent project section. `);

const portfolio = document.querySelector('.portfolio--js');
fetch('https://api.github.com/users/dekstryn/repos?sort=updates')
.then(resp => resp.json())
.then(resp => {
  const repos = resp;
  let i = 0;
  for (const repo of repos) {
      const {name, description, html_url, fork, clone_url} = repo;
      console.log(i);
        if (!fork && i<4){
          portfolio.innerHTML += `
          <div class="portfolio__box">
          <img class="portfolio__img" src="../assets/img/github.png">
          <h4 class="portfolio__title">${name}</h4>
          <p class="portfolio__description">${description ? description : "Brak opisu"}</p>
          <footer class="portfolio__footer"><p class="portfolio__text">
            <a href="${html_url}">Demo</a> | <a href="${clone_url}">GitHub</a></p>
          </footer>
          </div>
          `;
          i++;
        }
      
  } 
})
.catch(err =>{
    console.log(err);
})

