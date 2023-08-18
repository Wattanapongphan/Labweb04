document.addEventListener("DOMContentLoaded", function () {
    // Bar Chart
    const ctxBar = document.getElementById("myChart");
  
    new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์"],
        datasets: [
          {
            label: "จำนวนชั่วโมงการเรียนในแต่ละวัน",
            data: [5, 8, 3, 4.5, 6.5],
            borderWidth: 1,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
            hoverBorderColor: "rgba(75, 192, 192, 1)",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  
    // Doughnut Chart
    const ctxDoughnut = document.getElementById("myDoughnutChart");
  
    const dataDoughnut = {
      labels: ["อาคาร จุฬาภรณ์", "อาคาร 60 ปี", "อาคาร 80 ปี"],
      datasets: [
        {
          label: "จำนวนการใช้อาคารที่เรียน",
          data: [8, 2, 2],
          backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
          hoverOffset: 4,
        },
      ],
    };
  
    const configDoughnut = {
      type: "doughnut",
      data: dataDoughnut,
    };
  
    new Chart(ctxDoughnut, configDoughnut);
  
    // Radar Chart
    const radarData = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Running',
        'Walking',
        'Study',
        'Relax'
      ],
      datasets: [{
        label: 'ชีวิตประจำวัน',
        data: [67, 66, 58, 47, 66, 65, 69],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
    };
    
    const radarConfig = {
      type: 'radar',
      data: radarData,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    };
    
    // Create Radar Chart
    const ctxRadar = document.getElementById('myRadarChart').getContext('2d');
    new Chart(ctxRadar, radarConfig);
  
    // Line Chart
    const lineLabels = ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"];
    const lineData = {
      labels: lineLabels,
      datasets: [{
        label: 'รายจ่าย',
        data: [110, 90, 85, 107, 100, 90, 82,],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
  
    const lineConfig = {
      type: 'line',
      data: lineData
    };
  
    // Create Line Chart
    const ctxLine = document.getElementById('myLineChart').getContext('2d');
    new Chart(ctxLine, lineConfig);
  });
  