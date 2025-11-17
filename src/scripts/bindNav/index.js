export default function bindNav() {
  const mainDIV = document.getElementById('main');
  const navDown = document.getElementById('up');
  const navUp = document.getElementById('down');
  let navPosition = !localStorage.getItem('navPosition') ? 0 : Number(localStorage.getItem('navPosition'));
  
  mainDIV.scrollTo({
    top: innerHeight * navPosition
  });

  navUp.addEventListener('click', () => {
    const { innerHeight } = window;
    if (navPosition < 39) {
      navPosition = navPosition + 1;
      mainDIV.scrollTo({
        top: innerHeight * navPosition,
        behavior: 'smooth'
      });
      localStorage.setItem('navPosition', navPosition);
    }
  });

  navDown.addEventListener('click', () => {
    const { innerHeight } = window;
    if (navPosition > 0) {
      navPosition = navPosition - 1;
      mainDIV.scrollTo({
        top: innerHeight * navPosition,
        behavior: 'smooth'
      });
      localStorage.setItem('navPosition', navPosition);
    }
  });
}