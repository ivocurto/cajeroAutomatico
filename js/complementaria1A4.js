let savedPIN = '1812';

function login(){

    let access = false;

    for (let i = 2; i >= 0 ; i--) {
        let userPIN = prompt('Ingresa tu PIN. Tienes '+(i+1)+' oportunidades');
        if (userPIN===savedPIN) {
            alert('Ingreso exitoso. Bienvenido/a');
            access = true;
            break;
        }else{
            alert('Error. Te quedan '+i+' intentos.');
        }
    }

    return access;
}

/* console.log(login()); */

if(login()){
    let balance = 200000;

    let option = prompt('Elegí una opción: \n1- Ver saldo. \n2- Retirar dinero. \n3- Depositar. \nPresioná X para finalizar.');

    while (option!='X'&&option!='x'){
        switch (option) {
            case '1':
                alert('Tu saldo es $'+balance);
                break;
            case '2':
                let withdraw = parseInt(prompt('Ingresa la cantidad a retirar'));
                if(withdraw<=balance){
                    balance = balance-withdraw;
                    alert('Retiro exitoso. Tu nuevo saldo es $'+balance);
                    
                }else{
                    alert('Fondos insuficientes');
                }
                break;
            case '3':
                let deposit = parseInt(prompt('Ingresa el monto a depositar'));
                balance = balance + deposit;
                alert('Deposito exitoso. Tu nuevo saldo es $'+balance);
                break;

            default:
                alert('Elegiste una opción inválida')
                break;
        }
        option = prompt('Elegí una opción: \n1- Ver saldo. \n2- Retirar dinero. \n3- Depositar. \nPresioná X para finalizar.');
    }

}else{

    alert('Retendremos tu tarjeta por seguridad');
}

alert('Hasta luego');