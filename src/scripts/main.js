import { fetchJSON } from './utils';

export default function main() {
    fetchJSON('./data/data.json', (data) => {
        const mainDIV = document.getElementById('main')
        
        data.forEach(item => {
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
}