import {episodes} from './data.js';

// Adding episodes to the sidebar

const tabs = document.querySelector('#tabs');
const episodeTemplate = document.querySelector('#episode-template').content;
const episodeTemplateNode = episodeTemplate.querySelector('li');

for (let i = 0; i < episodes.length; i++) {
  const episodeItemNode = episodeTemplateNode.cloneNode(true);

  const link = episodeItemNode.querySelector('a');
  link.href = episodes[i].link;
  const episode = episodeItemNode.querySelector('.episode');
  episode.textContent = 'Episode ' + episodes[i].id;
  const title = episodeItemNode.querySelector('.title');
  title.textContent = episodes[i].title;
  const description = episodeItemNode.querySelector('.description');
  description.textContent = episodes[i].description;
  const thumbnail = episodeItemNode.querySelector('.thumbnail');
  thumbnail.src = 'images/' + episodes[i].cover;

  tabs.appendChild(episodeItemNode);
}

const firstEpisode = tabs.querySelector('li');
firstEpisode.classList.add('selected');

// Toggler for aside elements

const main = document.querySelector('main');
const mainImg = main.querySelector('img');
const mainHeader = main.querySelector('h1');
const mainDescription = main.querySelector('p');
const link = main.querySelector('a');

const episodesList = tabs.querySelectorAll('li');

episodesList.forEach(episodesItem => {
  episodesItem.addEventListener('click', (evt) => {
    evt.preventDefault();

    episodesList.forEach(item => {
      item.classList.remove('selected');
    });

    episodesItem.classList.add("selected");
    mainImg.src = episodesItem.querySelector('.thumbnail').src;
    mainHeader.textContent =  episodesItem.querySelector('.title').textContent;
    mainDescription.textContent =  episodesItem.querySelector('.description').textContent;
    link.href = episodesItem.querySelector('a').href;
  });
});
