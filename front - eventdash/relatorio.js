function alertas() {
    fetch("http://localhost:8080/alarmes")
}

function filtrar(){
    fetch("http://localhost:8080/intervalo/" + 
    document.getElementById("txtinicio").value + "/" + 
    document.getElementById("txttermino").value)
        .then(res => res.json())
        .then(res => {
            var tabela = 
            "<table class='table' border='1' align='center' width='80%'>" + 
            "<tr>" + 
            "<th>Hostname do Equipamento</th>" + 
            "<th>Tipo do Alarme</th>" + 
            "<th>Data do Evento</th>" +
            "</tr>";
            for (contador=0;contador<res.length;contador++){
                tabela+=
                "<tr>" +
                "<td>" + res[contador].equipamento.hostname + "</td>" +
                "<td>" + res[contador].alarme.nome + "</td>" +
                "<td>" + res[contador].data + "</td>" +
                "</tr>";
            }
            tabela+="</table>";
            document.getElementById("resultado").innerHTML = tabela;
        })
        .catch(err => {
            window.alert("Música não encontrada");
        });
}