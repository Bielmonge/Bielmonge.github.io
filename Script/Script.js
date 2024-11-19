anoAtual = new Date().getFullYear();


function calculoDeIdade(){
idade = anoAtual - 2006;
};

window.onload = function calculoDeIdade(){

        const anoNascimento = 2006; 
        const mesNascimento = 11;    
        const diaNascimento = 23;    

        const dataAtual = new Date();  
        const anoAtual = dataAtual.getFullYear();  
        const mesAtual = dataAtual.getMonth();    
        const diaAtual = dataAtual.getDate();    

        
        let idade = anoAtual - anoNascimento;

       
        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade -= 1;
        }

        
        document.getElementById('idade').innerText = idade;
    
};