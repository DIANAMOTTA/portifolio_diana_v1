// Seleciona o ícone do menu (geralmente um ícone tipo "hambúrguer")
let menuIcon = document.querySelector('#menu-icon');
// Seleciona o menu de navegação principal
let navbar = document.querySelector('.navbar');

// Quando o ícone do menu é clicado...
menuIcon.onclick = () => {
    // Alterna a classe 'bx-x' no ícone (muda o ícone de menu para X e vice-versa)
    menuIcon.classList.toggle('bx-x');
    // Alterna a classe 'active' na navbar (mostra ou esconde o menu)
    navbar.classList.toggle('active');
}

// Seleciona todas as seções da página (ex: Home, Sobre, Contato, etc.)
let section = document.querySelectorAll('section');
// Seleciona todos os links de navegação dentro do header (ex: Home, Sobre, Contato, etc.)
let navLinks = document.querySelectorAll('header nav a');

// Quando a página for rolada (scroll)...
window.onscroll = () => {
     // Para cada seção da página...
    section.forEach(sec => {
        let top = window.scrollY;  // Pega a posição atual da rolagem da página

        // Pega a posição da seção no topo da página, com um "desconto" de 150px
        let offset = sec.offsetTop - 150;

         // Altura da seção (usado para saber onde ela termina)
        let height = sec.offsetHeight;

        // Verifica se o scroll está dentro dos limites dessa seção
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');

                  // Adiciona a classe 'active' ao link correspondente à seção visível 
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    
    });

     // Seleciona o header (cabeçalho)
    let header = document.querySelector('header');

     // Se o scroll passou de 100px, adiciona a classe 'sticky' para fixar o header no topo
    header.classList.toggle('sticky', window.scrollY > 100);


        // Fecha o menu quando um link é clicado
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


// Google Analytics

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-cookies');
  
    // Mostra o pop-up apenas se o usuário não tiver aceitado antes
    if (!localStorage.getItem('cookies-accepted')) {
      popup.style.display = 'block';
    }
  
    // Ao clicar em "Aceitar"
    acceptBtn.addEventListener('click', function() {
      localStorage.setItem('cookies-accepted', 'true');
      popup.style.display = 'none';
      loadGoogleAnalytics(); // Carrega o Google Analytics
    });
  
    // Função para carregar o GA
    function loadGoogleAnalytics() {
      if (localStorage.getItem('cookies-accepted') === 'true') {
        // Script do Google Analytics (substitua G-XXXXXXXXXX pelo seu ID)
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WY5DPTLF71';
        document.head.appendChild(script);
  
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-WY5DPTLF71');
      }
    }
  
    // Carrega o GA se já tiver sido aceito antes
    loadGoogleAnalytics();
  });