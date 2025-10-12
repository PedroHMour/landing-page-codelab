import './styles/main.scss'

const menuToggle = document.getElementById('menu-toggle') as HTMLButtonElement;
const mainMenu = document.getElementById('main-menu') as HTMLElement;


if (menuToggle && mainMenu) {


  menuToggle.addEventListener('click', () => {

    mainMenu.classList.toggle('is-active');

    const isMenuOpen = mainMenu.classList.contains('is-active');
    if (isMenuOpen) {
      menuToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      `;
      menuToggle.setAttribute('aria-label', 'Fechar menu');
    } else {
      menuToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      `;
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    }
  });
}
const signupForm = document.getElementById('signup-form');

if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Inscrição recebida! Obrigado pelo seu interesse. (Esta é uma demonstração)');
    (signupForm as HTMLFormElement).reset();
  });
}

console.log("CodeLab Landing Page Carregada!");