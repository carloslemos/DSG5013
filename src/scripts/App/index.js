import renderNote from './renderNote';

export default class App {
  constructor(data) {
    this.data = data;
    this.container = document.getElementById('main');
    this.DOMconsole = document.getElementById('console');
    this.DOMtable = document.getElementById('table');
    this.time = {
      start: 0,
      end: 0
    };
  }

  // escreve o console de leitura
  writeConsole() {
    this.DOMtable.innerHTML = '';

    [...this.finalList.slice(0, this.finalList.length - 1)].forEach((key) => {
      const item = this.data[key];
      const content = `
        <td>#${key}</td>
        <td>${item.autor}</td>
        <td>${Math.min(100, Math.round(item.readCompletion * 100))}%</td>
        <td>${[...item.sortPot].map((el) => el.target).join(', ')}</td>
      `;

      const topic = document.createElement('tr');
      topic.innerHTML = content;

      this.DOMtable.appendChild(topic);
    });
  }

  // resolve o tempo de leitura
  endReadCurrent() {
    this.time.end = new Date();
    const current = this.data[this.finalList[this.navPosition]];
    current.readByUser = this.time.end.getTime() - this.time.start.getTime();
    current.isRead = true;
    current.readCompletion = current.readByUser / current.readTime;
  }

  pickNext() {
    this.endReadCurrent();
    const current = this.data[this.finalList[this.navPosition]];

    // recorta os 5 tópicos com mais relação ao post atual
    const sortPot = [...current.relations]
      .filter(
        (item) => !this.finalList.includes(item.target) // eslint-disable-line
      )
      .slice(0, 5);

    current.sortPot = sortPot;

    // melhora os resultados de todos os recortados em todos textos em caso de 50% de leitura ou mais
    if (current.readCompletion > 0.5) {
      this.data.forEach((item) => {
        item.relations
          .filter((relation) => sortPot.includes(relation.target))
          .forEach((relation) => {
            const element = relation;
            element.weight += Math.min(0.2, 0.2 * current.readCompletion);
          });
      });
    }

    const pickIndex = Math.floor((sortPot.length - 1) * Math.random());
    const { target } = sortPot[pickIndex];
    this.container.appendChild(this.data[target].DOMElement);
    this.finalList.push(target);
    localStorage.setItem('finalList', JSON.stringify(this.finalList));

    // console.log('adicionou', this.data[target]);
  }

  bindNav() {
    const navPrevious = document.getElementById('up');
    const navNext = document.getElementById('down');
    const navStats = document.getElementById('stats');
    const { height } = this.container.getBoundingClientRect();

    this.navPosition = !localStorage.getItem('navPosition')
      ? 0
      : Number(localStorage.getItem('navPosition'));

    localStorage.setItem('navPosition', this.navPosition);

    this.container.scrollTo({
      top: height * this.navPosition
    });

    navNext.addEventListener('click', () => {
      if (this.navPosition < this.data.length - 1) {
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
        const current = this.data[this.finalList[this.navPosition]];
        if (!current.isRead) this.endReadCurrent();
        this.navPosition -= 1;
        this.container.scrollTo({
          top: height * this.navPosition,
          behavior: 'smooth'
        });
        localStorage.setItem('navPosition', this.navPosition);
      }
    });

    // botão de estatísticas
    navStats.addEventListener('click', () => {
      this.DOMconsole.classList.remove('stats--hidden');
      this.writeConsole();
    });

    this.DOMconsole.addEventListener('click', () => {
      this.DOMconsole.classList.add('stats--hidden');
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

      item.readTime = text.length * 100;
      item.isRead = false;
    });

    if (!localStorage.getItem('finalList')) {
      const pickIndex = Math.floor((this.data.length - 1) * Math.random());
      this.finalList = [];
      this.finalList.push(pickIndex);
    } else {
      this.finalList = JSON.parse(localStorage.getItem('finalList'));
    }

    this.time.start = new Date();

    [...this.finalList]
      .map((key) => this.data[key])
      .forEach((item) => {
        this.container.appendChild(item.DOMElement);
      });

    localStorage.setItem('finalList', JSON.stringify(this.finalList));
  }

  start() {
    localStorage.clear();
    this.handleData();
    this.bindNav();
    console.log(this);
  }
}
