function Teste(){
    let numero = document.getElementById("numero").value;

    if(numero == 100){
        document.getElementById("resultado").innerText = "100";
    }
    else if(numero<100)
    {
        document.getElementById("resultado").innerText = "Menor que 100";
    }
    else{
        document.getElementById("resultado").innerText = "Maior que 100";
    }
} 