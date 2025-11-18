import renderNote from './renderNote';

export default class App {
  constructor(data) {
    this.data = data;
    this.container = document.getElementById('main');
  }

  bindNav() {
    const navDown = document.getElementById('up');
    const navUp = document.getElementById('down');
    const { height } = this.container.getBoundingClientRect();

    this.navPosition = !localStorage.getItem('navPosition')
      ? 0
      : Number(localStorage.getItem('navPosition'));

    this.container.scrollTo({
      top: height * this.navPosition
    });

    navUp.addEventListener('click', () => {
      if (this.navPosition < this.data.length) {
        this.navPosition += 1;
        this.container.scrollTo({
          top: height * this.navPosition,
          behavior: 'smooth'
        });
        localStorage.setItem('navPosition', this.navPosition);
      }
    });

    navDown.addEventListener('click', () => {
      if (this.navPosition > 0) {
        this.navPosition -= 1;
        this.container.scrollTo({
          top: height * this.navPosition,
          behavior: 'smooth'
        });
        localStorage.setItem('navPosition', this.navPosition);
      }
    });
  }

  handleData() {
    // random picks Array
    if (!localStorage.getItem('finalList')) {
      this.finalList = [];
      let pickIndex = Math.round(this.data.length * Math.random());
      this.finalList.push(pickIndex);

      while (this.finalList.length < this.data.length) {
        const pickElement = this.data[pickIndex];
        const related = [...pickElement.relations].filter(
          (item) => ![...this.finalList].includes(item.target) // eslint-disable-line
        );
        related.sort((a, b) => b.weight - a.weight);
        pickIndex = Number(related[0].target);
        this.finalList.push(pickIndex);
      }

      localStorage.setItem('finalList', JSON.stringify(this.finalList));
    } else {
      this.finalList = JSON.parse(localStorage.getItem('finalList'));
    }

    // prints Data
    [...this.finalList]
      .map((key) => this.data[key])
      .forEach((entry) => {
        const item = entry;
        const { text, autor, obra, topicos } = item;
        item.DOMElement = document.createElement('section');

        item.DOMElement.innerHTML = renderNote(text, autor, obra, topicos);
        item.DOMElement.classList.add('dayentry');

        this.container.appendChild(item.DOMElement);
      });
  }

  start() {
    localStorage.clear();
    this.handleData();
    this.bindNav();
    console.log(this);
  }
}
