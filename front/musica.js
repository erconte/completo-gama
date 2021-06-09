function filtrar(){
    fetch("http://localhost:8080/intervalo/" + 
    document.getElementById("txtinicio").value + "/" + 
    document.getElementById("txttermino").value)
        .then(res => res.json())
        .then(res => {
            var tabela = 
            "<table class='table' border='1' align='center' width='80%'>" + 
            "<tr>" + 
            "<th>Música</th>" + 
            "<th>Artista</th>" + 
            "<th>Cadastro</th>" +
            "</tr>";
            for (contador=0;contador<res.length;contador++){
                tabela+=
                "<tr>" +
                "<td>" + res[contador].titulo + "</td>" +
                "<td>" + res[contador].artista.nomeArtistico + "</td>" +
                "<td>" + res[contador].cadastro + "</td>" +
                "</tr>";
            }
            tabela+="</table>";
            document.getElementById("resultado").innerHTML = tabela;
        })
        .catch();
}