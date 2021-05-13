function verificar(){
    let boxVelocidade = document.getElementById('velocidade');
    let velocidade = Number(boxVelocidade.value);

    if(velocidade>80){
        document.getElementById('resposta').innerHTML = 'O MOTORISTA FOI MULTADO!';
    } 
    else if(velocidade < 0){
        document.getElementById('resposta').innerHTML = 'COLOQUE UM VALOR VÁLIDO!';
    }
    else{
        document.getElementById('resposta').innerHTML = 'O MOTORISTA NÃO FOI MULTADO!';
    }
}
