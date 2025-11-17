import bindNav from './../bindNav';

export default function readData(data) {
  const mainDIV = document.getElementById('main');

  // random picks Array
  let finalList;
  
  if (!localStorage.getItem('finalList')) {
    finalList = [];
    let pickIndex = Math.round(data.length * Math.random());
    finalList.push(pickIndex);

    while (finalList.length < data.length) {
      const pickElement = data[pickIndex];
      const related = [...pickElement.relations].filter((item) => !finalList.includes(item.target));
      related.sort((a, b) => b.weight - a.weight);
      pickIndex = Number(related[0].target);
      console.log(pickIndex, related[0].weight);
      finalList.push(pickIndex);
    }

    localStorage.setItem('finalList', JSON.stringify(finalList));
  } else {
    finalList = JSON.parse(localStorage.getItem('finalList'));
  }

  // prints Data
  finalList.forEach((item) => {
    const { text, autor, obra, topicos } = data[item];
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

    bindNav();
  });
}
