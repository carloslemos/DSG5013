const renderNote = (text, autor, obra, topicos) => `
    <div class="dayentry__wrapper">
        <p class="dayentry__text">${text}</p>
        <blockquote class="dayentry__quote">
            <p class="dayentry__author">${autor}, <cite class="dayentry__cite">${obra}</cite></p>
            <small class="dayentry__topic">${topicos.join(' - ')}</small>
        </blockquote>
    </div>
`;

export default renderNote;
