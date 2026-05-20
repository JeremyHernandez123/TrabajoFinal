import { getTasques } from "./storage.js";

let grafic = null;

export function mostrarGrafic() {

    let tasques = getTasques();

    if (tasques == null) {
        tasques = [];
    }

    let mesos = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let totals = [0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0,0];

    for (let i = 0; i < tasques.length; i++) {

        let tasca = tasques[i];

        if (tasca.realitzada == true) {
            let dataMes = tasca.data.split("-");
            let mes = parseInt(dataMes[1]);

            if (mes >= 1 && mes <= 12) {
                totals[mes - 1] = totals[mes - 1] + 1;
            }
        }
    }

    let canvas = document.getElementById("myChart");

    if (grafic != null) {
        grafic.destroy();
    }

    grafic = new Chart(canvas, {
        type: "line",
        data: {
            labels: mesos,
            datasets: [{
                label: "Tasques Acabades",
                data: totals,
                borderColor: "rgb(252, 95, 197)",
                backgroundColor: "rgba(192, 75, 184, 0.2)",
                borderWidth: 4,
                pointBorderColor: "rgb(252, 95, 197)",
                pointBackgroundColor: "rgba(192, 75, 184, 0.2)",
                pointRadius: 3,
                tension: 0.4
            }]
        },
        options: {
            responsive: true
        }
    });
}
