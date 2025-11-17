import readData from './readData';
import fetchJSON from './utils';

export default function main() {
  const mainDIV = document.getElementById('main');

  fetchJSON('./data/data.json', readData);

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
