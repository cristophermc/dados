let array = [];
let tipo = "";
function tirar(){
    let cantidad = document.getElementById("cantidad").value;
    let resultados = document.getElementById("resultados");
    tipo = document.getElementById("dados").value;
    array = [];
    switch (tipo){
        case "d4":
        for(var i = 0; i<cantidad; i++){
        let aleatorio = Math.floor(Math.random()*4)+1;
        array.push(aleatorio);
    }
        break;
        case "d6":
        for(var i = 0; i<cantidad; i++){
            let aleatorio = Math.floor(Math.random()*6)+1;
            array.push(aleatorio);
    }
        break;

        case "d8":
        for(var i = 0; i<cantidad; i++){
            let aleatorio = Math.floor(Math.random()*8)+1;
            array.push(aleatorio);
    }
        break;

        case "d10":
        for(var i = 0; i<cantidad; i++){
            let aleatorio = Math.floor(Math.random()*10)+1;
            array.push(aleatorio);
    }
        break;

    case "d12":
        for(var i = 0; i<cantidad; i++){
            let aleatorio = Math.floor(Math.random()*12)+1;
            array.push(aleatorio);
    }
        break;
    case "d20":
        for(var i = 0; i<cantidad; i++){
            let aleatorio = Math.floor(Math.random()*20)+1;
            array.push(aleatorio);

    }
        break;

    case "d100":
        for(var i = 0; i<cantidad; i++){
            let aleatorio = Math.floor(Math.random()*100)+1;
            array.push(aleatorio);
    }
        break;

}
    resultados.value = array.join(',')


}
function cambiarImagen(){
    let valor = document.getElementById("dados").value;
    let imagen = document.getElementById("imagen");
    switch(valor){
        case "d4":
            imagen.src="./assets/d4.png";
            document.body.style.backgroundColor = " #cb7d7d"
            break;
        case "d6":
            imagen.src="./assets/d6.png";
            document.body.style.backgroundColor = "rgb(125, 165, 203)"
            break;
        case "d8":
            imagen.src="./assets/d8.png";
            document.body.style.backgroundColor = "rgb(125, 203, 169)"
            break;
        case "d10":
            imagen.src="./assets/d10.png";
            document.body.style.backgroundColor = "rgb(180, 125, 203)"
            break;
        case "d12":
            imagen.src="./assets/d12.png";
            document.body.style.backgroundColor = "rgb(189, 203, 125)"
            break;
        case "d20":
            imagen.src="./assets/d20.png";
            document.body.style.backgroundColor = "rgb(203, 167, 125)"
            break;
        case "d100":
            imagen.src="./assets/d100.png";
            document.body.style.backgroundColor = "rgb(50, 58, 96)"
            break;
        default:
            imagen.src="";
            break;             
    }
}