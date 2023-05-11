const chartbar = document.querySelectorAll('.chartbar')
const grafico = document.querySelector('#chart');
const chartSpan = document.querySelectorAll('.amount-span')
console.log(chartSpan)
getDataJSON()

function getDataJSON() {
fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    datosJSON = data
    generarGrafico(datosJSON)
    
  })
  .catch(error => {
    console.error('Error al obtener el archivo JSON:', error);
  });}


function generarGrafico(datos) {

const maxY = Math.max(...datos.map(d => d.amount));

for (let index = 0; index < datos.length; index++) {
    let bar = chartbar[index]
    let spanBar = chartSpan[index]
    let spanAmount = datos[index].amount
    bar.addEventListener('mouseover',function () {
      spanBar.classList.toggle('hidden')
      spanBar.textContent = '$' + spanAmount
    })
    bar.addEventListener('mouseout',function () {
      spanBar.classList.toggle('hidden')
    })
    
    let barHeight = Math.round((datos[index].amount / maxY) * 100) + '%';
  
    bar.style.height = barHeight
    
  };
  }
  

