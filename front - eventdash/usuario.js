function exibirusuario() {
    var userstr = localStorage.getItem("userlogado");
    if (userstr == null) {
        window.location = "login.html";
    } else {
        var userjson = JSON.parse(userstr);
        document.getElementById("foto").innerHTML =
            "<img width='200' src=imagens/" + userjson.foto + ">";
        document.getElementById("dados").innerHTML =
            "<h3>" + userjson.email + "<br>" + userjson.nome + "<br>ID: " + userjson.id + "</h3>";
    }
}

function logar() {
    //var username = document.getElementById("txtuser").value;
    //if (username.includes("@")) {
    var carta = {
        email: document.getElementById("txtuser").value,
        //email:document.getElementById("txtemail").value,
        senha: document.getElementById("txtsenha").value
    };
    //} else {
    //    var carta1 = {
    //        racf: document.getElementById("txtuser").value,
    //        //email:document.getElementById("txtemail").value,
    //        senha: document.getElementById("txtsenha").value

    var envelope = {
        method: "POST",
        body: JSON.stringify(carta),
        headers: {
            "Content-type": "application/json"
        }
    };
    //var envelope1 = {
    //method: "POST",
    //body: JSON.stringify(carta1),
    //headers: {
    //"Content-type": "application/json"
    //}
    //};

    //fetch("http://localhost:8080/login2", envelope)
    //.then(res => res.json())
    //.then(res => {
    //localStorage.setItem("userlogado", JSON.stringify(res));
    //window.location = "usuario.html";
    //})
    //.catch(err => {
    //windows.alert("Não foi possível realizar Login")
    //});
    fetch("http://localhost:8080/login", envelope)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("userlogado", JSON.stringify(res));
            window.location = "usuario.html";
        })
        .catch(err => {
            windows.alert("Não foi possível realizar Login")
        });
};  