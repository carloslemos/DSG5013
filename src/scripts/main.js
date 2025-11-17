import fetchJSON from './utils';

export default function main() {
  const mainDIV = document.getElementById('main');

  fetchJSON('./data/data.json', (data) => {
    data.forEach((item) => {
      const { text, autor, obra, topicos } = item;
      const section = document.createElement('section');

      section.innerHTML = `
                <div class="dayentry__wrapper">
                    <p class="dayentry__text">${text}</p>
                    <blockquote class="dayentry__quote">
                        <p class="dayentry__author">${autor}, <cite class="dayentry__cite">${obra}</cite></p>
                        <small class="dayentry__topic">${topicos.join(' - ')}</small>
                    </blockquote>
                </div>
            `;

      section.classList.add('dayentry');

      mainDIV.appendChild(section);
    });
  });

  const navDown = document.getElementById('up');
  const navUp = document.getElementById('down');

  navUp.addEventListener('click', () => {
    const { innerHeight } = window;
    mainDIV.scrollBy({
      top: innerHeight,
      behavior: 'smooth'
    });
  });

  navDown.addEventListener('click', () => {
    const { innerHeight } = window;
    mainDIV.scrollBy({
      top: -innerHeight,
      behavior: 'smooth'
    });
  });
}
