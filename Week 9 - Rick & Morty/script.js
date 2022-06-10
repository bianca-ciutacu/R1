fetch(`https://rickandmortyapi.com/api/episode`)
  .then(response => response.json())
  .then(function (data) {
    let episodesArray = data.results;
    episodesArray.forEach(function (elem) {
      createEpisodeDiv(elem);
    });
  });

function createEpisodeDiv(episode) {
  let parentDiv = document.querySelector(`#episodes`);
  let containingDiv = document.createElement(`div`);
  let nameDiv = document.createElement(`div`);
  let airDateDiv = document.createElement(`div`);
  let episodeDiv = document.createElement(`div`);
  let charButton = document.createElement(`button`);
  charButton.textContent = `View Characters`;
  charButton.classList.add(`button-design`);
  containingDiv.classList.add(`content-div`);
  nameDiv.textContent = `Episode name: ${episode.name}`;
  airDateDiv.textContent = `Air date: ${episode.air_date}`;
  episodeDiv.textContent = `Episode : ${episode.episode}`;
  containingDiv.appendChild(nameDiv);
  containingDiv.appendChild(airDateDiv);
  containingDiv.appendChild(episodeDiv);
  containingDiv.appendChild(charButton);
  parentDiv.appendChild(containingDiv);
  let charList = episode.characters;
  charButton.addEventListener(`click`, charactersDisplayer);
  function charactersDisplayer() {
    let parentCharDiv = document.querySelector(`#char-details`);
    parentCharDiv.innerHTML = "";
    charList.forEach(function (elem) {
      fetch(elem)
        .then(response => response.json())
        .then(function (data) {
          // console.log(data);
          let charImg = document.createElement(`img`);
          let characterDiv = document.createElement(`div`);
          let charName = document.createElement(`p`);

          characterDiv.classList.add(`content-div`);
          characterDiv.classList.add(`content-div2`);
          charImg.classList.add(`img-resize`);
          charImg.src = data.image;
          charName.textContent = data.name;
          characterDiv.appendChild(charImg);
          characterDiv.appendChild(charName);
          parentCharDiv.appendChild(characterDiv);
        });
    });
  }
}
