let miCanvas = document.getElementById("MiGrafica").getContext("2d");

var chart = new Chart(miCanvas,{
    type : "bar",
    data:{
        labels:["Vino", "Tequila", "Cerveza", "Ron"],
        datasets:[
            {
                label : "Mi grafica de bebidas",
                backgroundColor : "rgb(0,0,0)",
                borderColor: "rgb(255,255,0)",
                data:[12,39,5,30]
            }
        ]
    }
});