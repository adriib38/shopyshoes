
//====
//Summer discount countdown
//====
const fechaFinal = new Date('7/01/2023 00:00:01');

const cajaDias = document.getElementById('sd-box-days');
const cajaHoras = document.getElementById('sd-box-hours')
const cajaMinutos = document.getElementById('sd-box-minutes');
const cajaSegundos = document.getElementById('sd-box-seconds');

const MS_MINUTO = 1000 * 60;
const MS_HORA = MS_MINUTO * 60;
const MS_DIA = MS_HORA * 24;

function actualizarContador() {
    const ahora = new Date();
    const duracion = fechaFinal - ahora;
    const diasRestantes = Math.floor(duracion / MS_DIA);
    const horasRestantes = Math.floor((duracion % MS_DIA) / MS_HORA);
    const minutosRestantes = Math.floor((duracion % MS_HORA) / MS_MINUTO);
    const segundosRestantes = Math.floor((duracion % MS_MINUTO) / 1000);

    cajaDias.textContent = diasRestantes + " DAYS ";
    cajaHoras.textContent = horasRestantes + " HOURS ";
    cajaMinutos.textContent = minutosRestantes + " MINUTES ";
    cajaSegundos.textContent = segundosRestantes + " SECONDS ";
    
}

window.onload = function() {
    actualizarContador();
    setInterval(actualizarContador, 1000);
}
    
//====
//Add ONE product to cart animation
//====
const img_addCircle = document.querySelectorAll('.add-circle');
img_addCircle.forEach(img => {
    img.addEventListener('click', () => {

        let cardProduct = img.parentElement.parentElement;

        cardProduct.classList.add('add-one-cart');
        setTimeout(() => {
            cardProduct.classList.remove('add-one-cart');
        }, 2000);
    });
});

//====
//Remove ONE product to cart animation
//====
const img_removeCircle = document.querySelectorAll('.remove-circle');
img_removeCircle.forEach(img => {
    img.addEventListener('click', () => {

        let cardProduct = img.parentElement.parentElement;

        cardProduct.classList.add('remove-one-cart');
        setTimeout(() => {
            cardProduct.classList.remove('remove-one-cart');
        }, 2000);
    });
});

console.log(
    ' __ _                       __ _                      \n' +
    '/ _\\ |__   ___  _ __  _   _/ _\\ |__   ___   ___  ___  \n' +
    '\\ \\| \'_ \\ / _ \\| \'_ \\| | | \\ \\| \'_ \\ / _ \\ / _ \\/ __| \n' +
    '_\\ \\ | | | (_) | |_) | |_| |\\ \\ | | | (_) |  __/\\__ \\ \n' +
    '\\__/ |_| |_|\\___/| .__/ \\__, \\__/_| |_|\\___/ \\___||___/ \n' +
    '                  |_|    |___/                           '
);

console.log('----------------------------------------');

console.log('https://github.com/adriib38');
console.log('https://github.com/adriib38');
console.log('https://github.com/adriib38');
