
document.addEventListener('DOMContentLoaded', () => {
    
    const initialScreen = document.getElementById('initialscreen');
    const secondScreen = document.getElementById('secondscreen');
    const startButton = document.getElementById('start-button');

  
    initialScreen.classList.add('fade-transition');
    secondScreen.classList.add('fade-transition'); 

   
    startButton.addEventListener('click', () => {
   
        initialScreen.classList.add('hidden-fade');
        
      
        setTimeout(() => {
            secondScreen.classList.remove('hidden-fade');

            initialScreen.style.zIndex = '0'; 
            secondScreen.style.zIndex = '10'; 
        }, 1000); 
    });
});

const slides = document.querySelectorAll('.slider-container img');
let currentIndex = 0;

setInterval(() => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}, 3000); 


function updateLoveCounter() {
  const startDate = new Date("2024-02-14T00:00:00");
  const now = new Date();

  let diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours   = Math.floor(diff / (1000 * 60 * 60)) % 24;

  const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Calcular anos, meses e dias restantes (modo simplificado)
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const tempDate = new Date(now.getFullYear(), now.getMonth(), 0);
    days += tempDate.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("love-counter").textContent =
    `❤️ Eu te amo há ${years} ano, ${months} meses, ${days} dias, ` +
    `${hours} horas, ${minutes} minutos e ${seconds} segundos`  ;
}

// Inicializa e atualiza a cada segundo
updateLoveCounter();
setInterval(updateLoveCounter, 1000);
