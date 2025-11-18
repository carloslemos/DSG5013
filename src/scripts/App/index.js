import renderNote from './renderNote';

export default class App {
  constructor(data) {
    this.data = data;
    this.container = document.getElementById('main');
  }

  pickNext() {
    const current = this.data[this.finalList[this.navPosition]];
    const sortPot = [...current.relations]
      .filter(
        (item) => !this.finalList.includes(item.target) // eslint-disable-line
      )
      .slice(0, 5);

    const pickIndex = Math.floor((sortPot.length - 1) * Math.random());
    const { target } = sortPot[pickIndex];
    this.container.appendChild(this.data[target].DOMElement);
    this.finalList.push(target);
    localStorage.setItem('finalList', JSON.stringify(this.finalList));

    console.log('adicionou', this.data[target]);
  }

  bindNav() {
    const navPrevious = document.getElementById('up');
    const navNext = document.getElementById('down');
    const { height } = this.container.getBoundingClientRect();

    this.navPosition = !localStorage.getItem('navPosition')
      ? 0
      : Number(localStorage.getItem('navPosition'));

    localStorage.setItem('navPosition', this.navPosition);

    this.container.scrollTo({
      top: height * this.navPosition
    });

    navNext.addEventListener('click', () => {
      if (this.navPosition < this.data.length) {
        if (!this.finalList[this.navPosition + 1]) {
          this.pickNext();
        }

        this.navPosition += 1;

        this.container.scrollTo({
          top: height * this.navPosition,
          behavior: 'smooth'
        });
        localStorage.setItem('navPosition', this.navPosition);
      }
    });

    navPrevious.addEventListener('click', () => {
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
    this.data.forEach((entry) => {
      const item = entry;
      const { text, autor, obra, topicos, relations } = item;
      item.DOMElement = document.createElement('section');

      item.DOMElement.innerHTML = renderNote(text, autor, obra, topicos);
      item.DOMElement.classList.add('dayentry');

      relations.sort((a, b) => b.weight - a.weight);
    });

    if (!localStorage.getItem('finalList')) {
      const pickIndex = Math.floor((this.data.length - 1) * Math.random());
      this.finalList = [];
      this.finalList.push(pickIndex);
    } else {
      this.finalList = JSON.parse(localStorage.getItem('finalList'));
    }

    [...this.finalList]
      .map((key) => this.data[key])
      .forEach((item) => {
        this.container.appendChild(item.DOMElement);
      });

    localStorage.setItem('finalList', JSON.stringify(this.finalList));

    /*
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
    */
  }

  start() {
    localStorage.clear();
    this.handleData();
    this.bindNav();
    console.log(this);
  }
}
