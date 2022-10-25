const emailList =['mario@gmail.com','luca@gmail.com','giorgio@gmail.com'];
const userEmail = prompt('Inserisci la tua email');

if(emailList.includes(userEmail)){
    console.log('Email confermata');
    nUser = Math.floor(Math.random() * 6) + 1;
    nCPU = Math.floor(Math.random() * 6) + 1;
    console.log('Il tuo numero è:' + nUser);
    console.log('Il mio numero è:' + nCPU);
    if(nUser<nCPU){
        console.log('Hai perso!');
    }else
        console.log('Hai vinto!');
    if(nUser == nCPU){
        console.log('Pareggio');
    }
}else
    console.log('Email rifiutata');