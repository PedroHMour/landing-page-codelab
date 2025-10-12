import './styles/main.scss'

// --- LÓGICA DO MENU MOBILE ---

// 1. Seleciona os elementos do HTML que vamos manipular.
// Usamos "as HTMLElement" para dizer ao TypeScript que temos certeza
// de que estes elementos são do tipo HTMLElement.
const menuToggle = document.getElementById('menu-toggle') as HTMLButtonElement;
const mainMenu = document.getElementById('main-menu') as HTMLElement;

// 2. Verifica se os elementos realmente existem na página antes de continuar.
// Isso previne erros caso o HTML seja alterado.
if (menuToggle && mainMenu) {

  // 3. Adiciona um "ouvinte de evento" de clique no botão.
  // Isso significa: "Quando o botão for clicado, execute a função a seguir".
  menuToggle.addEventListener('click', () => {

    // 4. A função a ser executada:
    // O método .toggle() adiciona a classe se ela não existir,
    // e a remove se ela já existir. É como um interruptor de luz.
    mainMenu.classList.toggle('is-active');

    // Bônus: Mudar o ícone para um "X" quando o menu está aberto
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

console.log("CodeLab Landing Page Carregada!");