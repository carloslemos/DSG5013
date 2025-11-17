export default function fetchJSON(url, callback) {
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      if (typeof callback === 'function') {
        callback(json);
      } else {
        console.log('Função sem callback');
      }
    })
    .catch((err) => console.error('Erro ao carregar JSON:', err));
}
