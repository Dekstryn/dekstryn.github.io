"use strict";

console.log(`Hello, I'm glad that you looking here. On this page, I used some JS code for the projects section actualization.`);

const portfolio = document.querySelector('.portfolio--js');
fetch('https://api.github.com/users/krzysztofnyrek/repos?sort=updates')
.then(resp => resp.json())
.then(resp => {
  const repos = resp;
  let i = 0;
  for (const repo of repos) {
      const {name, description, homepage, fork, html_url} = repo;
        if (!fork && i<4 && homepage){
          portfolio.innerHTML += `
          <div class="portfolio__box">
          <img class="portfolio__img" src="../assets/img/github.png" alt="Github logo">
          <h4 class="portfolio__title">${name}</h4>
          <p class="portfolio__description">${description ? description : "Brak opisu"}</p>
          <footer class="portfolio__footer"><p class="portfolio__text">
            <a href="${homepage}">Demo</a> | <a href="${html_url}">GitHub</a></p>
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

