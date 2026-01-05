import './styles/main.scss'

// --- Lógica do Menu Mobile (Mantida e Ajustada) ---
const menuToggle = document.getElementById('menu-toggle') as HTMLButtonElement;
const mainMenu = document.getElementById('main-menu') as HTMLElement;

if (menuToggle && mainMenu) {
  menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('is-active');

    const isMenuOpen = mainMenu.classList.contains('is-active');
    
    // Troca o ícone (Hambúrguer <-> X)
    if (isMenuOpen) {
      menuToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      `;
      menuToggle.setAttribute('aria-label', 'Fechar menu');
      // Opcional: Bloquear rolagem do body quando menu estiver aberto
      document.body.style.overflow = 'hidden';
    } else {
      menuToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      `;
      menuToggle.setAttribute('aria-label', 'Abrir menu');
      document.body.style.overflow = '';
    }
  });

  // Fechar menu ao clicar em um link
  const menuLinks = mainMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainMenu.classList.remove('is-active');
      menuToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      `;
      document.body.style.overflow = '';
    });
  });
}

// --- Lógica do Formulário (Mantida) ---
const signupForm = document.getElementById('signup-form');

if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('🚀 Inscrição recebida! Bem-vindo à CodeLab. (Demo)');
    (signupForm as HTMLFormElement).reset();
  });
}

// --- NOVO: Animações de Scroll (Intersection Observer) ---
// Isso faz os elementos com a classe .scroll-reveal aparecerem suavemente
const observerOptions = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.1 // 10% do elemento visível dispara a animação
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Anima apenas uma vez
    }
  });
}, observerOptions);

const elementsToReveal = document.querySelectorAll('.scroll-reveal');
elementsToReveal.forEach(el => observer.observe(el));

console.log("CodeLab Landing Page Carregada e Otimizada!");