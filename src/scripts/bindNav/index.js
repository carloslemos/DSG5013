export default function bindNav() {
  const mainDIV = document.getElementById('main');
  const navDown = document.getElementById('up');
  const navUp = document.getElementById('down');
  const { innerHeight } = window;
  let navPosition = !localStorage.getItem('navPosition')
    ? 0
    : Number(localStorage.getItem('navPosition'));

  mainDIV.scrollTo({
    top: innerHeight * navPosition
  });

  navUp.addEventListener('click', () => {
    if (navPosition < 39) {
      navPosition += 1;
      mainDIV.scrollTo({
        top: innerHeight * navPosition,
        behavior: 'smooth'
      });
      localStorage.setItem('navPosition', navPosition);
    }
  });

  navDown.addEventListener('click', () => {
    if (navPosition > 0) {
      navPosition -= 1;
      mainDIV.scrollTo({
        top: innerHeight * navPosition,
        behavior: 'smooth'
      });
      localStorage.setItem('navPosition', navPosition);
    }
  });
}
