


const cnv=document.getElementById('histogram');
const ctx = cnv.getContext('2d');



function generer(){
  let values=document.querySelectorAll(".val")
  let datas=[];
  for(i=0;i<values.length;i++){
      datas.push(parseInt(values[i].value));
  }
  container=document.querySelector(".container");
  cnv.style.display="block";
  container.innerHTML="<button class='btn btn-primary' onclick='window.location.reload(true)'>back</button>";
  const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Monday", "tuesday", "thursday", "wednsday", "friday","saturday","sunday"],
        datasets: [{
          label: 'Number of Arrivals',
          data: datas,
          backgroundColor: 'green',
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false,
            barPercentage: 0.5,
            ticks: {
              max: 3,
            }
          }, {
            display: true,
            ticks: {
              autoSkip: false,
              max: 4,
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
}