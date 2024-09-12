class RecintosZoo {

    analisaRecintos(animal, quantidade) {  
        let erro = false;
        let recintosViaveis = [];

        let recintosDisponiveis = [
            {
                numero: 1,
                bioma: 'savana',
                tamanhoTotal: 10,
                tamanhoOcupado: 3, 
                especies: 'MACACO'
            },
            {
                numero: 2,
                bioma: 'floresta',
                tamanhoTotal: 5,
                tamanhoOcupado: 0, 
                especies: null
            },
            {
                numero: 3,
                bioma: 'savana e rio',
                tamanhoTotal: 7,
                tamanhoOcupado: 2, 
                especies: 'GAZELA'
            },
            {
                numero: 4,
                bioma: 'rio',
                tamanhoTotal: 8,
                tamanhoOcupado: 0, 
                especies: null
            },
            {
                numero: 5,
                bioma: 'savana',
                tamanhoTotal: 9,
                tamanhoOcupado: 3, 
                especies: 'LEAO'
            }
        ]
        

        //Checando se o animal e quantidade são válidos
        if (animal != 'LEAO' && animal != 'LEOPARDO' && animal != 'CROCODILO' && animal != 'MACACO' && animal != 'GAZELA' && animal != 'HIPOPOTAMO') {
            erro = 'Animal inválido';
            recintosViaveis = false;
            return {erro, recintosViaveis};
        } else if (quantidade <1){
            erro = 'Quantidade inválida';
            recintosViaveis = false;
            return {erro, recintosViaveis};
        }
        

        //-----------------------------------------------------------
        if (animal == 'MACACO') {
            let espaçoAserOcupado = 0;
            //Detalhes do macaco:
            //Não pode ficar sozinho
            //Ocupa 1 espaço por animal
            //Gosta de savana e floresta

            //Ordem dos ifs
            //Checar se o macaco não vai ficar sozinho
            //Checar se existem outras espécies e se essas não são carnívoras, caso existam outras, considerar um espaço extra a ser ocupado
            //Checar se há espaço suficiente pros animais
            //Checar se os biomas são os corretos


            for (let i = 0; i < 5; i++) {
                if(((recintosDisponiveis[i].tamanhoOcupado == 0) && (quantidade != 1)) || (recintosDisponiveis[i].tamanhoOcupado != 0)){
                    
                    if((recintosDisponiveis[i].especies != 'LEAO') && (recintosDisponiveis[i].especies != 'LEOPARDO') && (recintosDisponiveis[i].especies != 'CROCODILO')) {
                        if((recintosDisponiveis[i].especies != 'MACACO') && (recintosDisponiveis[i].especies != null)){
                            espaçoAserOcupado = (quantidade*1) + 1;

                            if((recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado ) >= espaçoAserOcupado){ 
                                if((recintosDisponiveis[i].bioma == 'savana') || (recintosDisponiveis[i].bioma == 'floresta') || (recintosDisponiveis[i].bioma == 'savana e rio')) {
                                    recintosViaveis.push("Recinto " + recintosDisponiveis[i].numero + " (espaço livre: " + (recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado - espaçoAserOcupado) + " total: " + recintosDisponiveis[i].tamanhoTotal + ")");
                                }
                            }
 
                        } else {
                            espaçoAserOcupado = quantidade*1;
                            
                            if((recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado ) >= espaçoAserOcupado){
                                if((recintosDisponiveis[i].bioma == 'savana') || (recintosDisponiveis[i].bioma == 'floresta') || (recintosDisponiveis[i].bioma == 'savana e rio')) {
                                    recintosViaveis.push("Recinto " + recintosDisponiveis[i].numero + " (espaço livre: " + (recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado - espaçoAserOcupado) + " total: " + recintosDisponiveis[i].tamanhoTotal + ")");
                                }
                            }
                            
                        }
                    
                    }
                }
            }
            
            //Checando existe algum recinto viável, caso não, retornar o seguinte erro, AQUI NO FINAL MUDAR O RECINTO VIAVEL PARA FALSE CASO NÃO TENHA
            if (recintosViaveis.length == 0){
                recintosViaveis = false;
                erro = 'Não há recinto viável';
                return {erro, recintosViaveis};
            } else {
                return {erro, recintosViaveis};
            }
        } 
        //Fim do if do macaco




        //-----------------------------------------------------------
        if(animal == 'CROCODILO') {
            let espaçoAserOcupado = 0;

            //Detalhes do crocodilo:
            //É carnívoro, portanto só pode ficar com a mesma espécie
            //Ocupa 3 espaços por animal
            //Gosta somente do bioma de rio

            //Ordem dos ifs
            //Checar se há outra espécie no recinto
            //Checar se há espaço suficiente pros animais
            //Checar se os bioma é de rio

            for (let i = 0; i < 5; i++) {
                if((recintosDisponiveis[i].especies == null) || (recintosDisponiveis[i].especies == 'CROCODILO')){
                    espaçoAserOcupado = quantidade*3;
                    if((recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado) >= espaçoAserOcupado){
                        if(recintosDisponiveis[i].bioma == 'rio'){
                            recintosViaveis.push("Recinto " + recintosDisponiveis[i].numero + " (espaço livre: " + (recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado - espaçoAserOcupado) + " total: " + recintosDisponiveis[i].tamanhoTotal + ")");
                        }
                    }
                }
            }


            //Checando existe algum recinto viável, caso não, retornar o seguinte erro, AQUI NO FINAL MUDAR O RECINTO VIAVEL PARA FALSE CASO NÃO TENHA
            if (recintosViaveis.length == 0){
                recintosViaveis = false;
                erro = 'Não há recinto viável';
                return {erro, recintosViaveis};
            } else {
                return {erro, recintosViaveis};
            }
        }
        //Fim do if do crocodilo





        //-----------------------------------------------------------
        if(animal == 'LEAO') {
            let espaçoAserOcupado = 0;

            //Detalhes do leão
            //É carnívoro, portanto só pode ficar com a mesma espécie
            //Ocupa 3 espaços por animal
            //Gosta somente do bioma de savana

            //Ordem dos ifs
            //Checar se há outra espécie no recinto
            //Checar se há espaço suficiente pros animais
            //Checar se os bioma é de savana

            for (let i = 0; i < 5; i++) {
                if((recintosDisponiveis[i].especies == null) || (recintosDisponiveis[i].especies == 'LEAO')){
                    espaçoAserOcupado = quantidade*3;
                    if((recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado) >= espaçoAserOcupado) {
                        if(recintosDisponiveis[i].bioma == 'savana') {
                            recintosViaveis.push("Recinto " + recintosDisponiveis[i].numero + " (espaço livre: " + (recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado - espaçoAserOcupado) + " total: " + recintosDisponiveis[i].tamanhoTotal + ")");
                        }
                    }
                }
            }


            //Checando existe algum recinto viável, caso não, retornar o seguinte erro, AQUI NO FINAL MUDAR O RECINTO VIAVEL PARA FALSE CASO NÃO TENHA
            if (recintosViaveis.length == 0){
                recintosViaveis = false;
                erro = 'Não há recinto viável';
                return {erro, recintosViaveis};
            } else {
                return {erro, recintosViaveis};
            }
        }
        //Fim do if do leão     

        


        //-----------------------------------------------------------
        if(animal == 'LEOPARDO') {
            let espaçoAserOcupado = 0;

            //Detalhes do leopardo
            //É carnívoro, portanto só pode ficar com a mesma espécie
            //Ocupa 3 espaços por animal
            //Gosta somente do bioma de savana

            //Ordem dos ifs
            //Checar se há outra espécie no recinto
            //Checar se há espaço suficiente pros animais
            //Checar se os bioma é de savana

            for (let i = 0; i < 5; i++) {
                if((recintosDisponiveis[i].especies == null) || (recintosDisponiveis[i].especies == 'LEOPARDO')){
                    espaçoAserOcupado = quantidade*2;
                    if((recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado) >= espaçoAserOcupado) {
                        if(recintosDisponiveis[i].bioma == 'savana') {
                            recintosViaveis.push("Recinto " + recintosDisponiveis[i].numero + " (espaço livre: " + (recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado - espaçoAserOcupado) + " total: " + recintosDisponiveis[i].tamanhoTotal + ")");
                        }
                    }
                }
            }


            //Checando existe algum recinto viável, caso não, retornar o seguinte erro, AQUI NO FINAL MUDAR O RECINTO VIAVEL PARA FALSE CASO NÃO TENHA
            if (recintosViaveis.length == 0){
                recintosViaveis = false;
                erro = 'Não há recinto viável';
                return {erro, recintosViaveis};
            } else {
                return {erro, recintosViaveis};
            }
        }
        //Fim do if do leopardo





        //-----------------------------------------------------------
        if(animal == 'GAZELA') {
            let espaçoAserOcupado = 0;

            //Detalhes da gazela
            //Ocupa 2 espaços por animal
            //Gosta somente do bioma de savana

            //Ordem dos ifs
            //Checar se não há espécies carnívoras ali
            //Checar se há espaço suficiente pros animais
            //Checar se os bioma é de savana ou savana e rio
            //Caso existam espécies diferentes, considerar um espaço extra ocupado


            for (let i = 0; i < 5; i++) {
                if((recintosDisponiveis[i].especies != 'LEAO') && (recintosDisponiveis[i].especies != 'LEOPARDO') && (recintosDisponiveis[i].especies != 'CROCODILO')) { //Não podem ter espécies carnívoras
                    if((recintosDisponiveis[i].especies != 'GAZELA') && (recintosDisponiveis[i].especies != null)) { //Checando se há outras espécies
                        espaçoAserOcupado = (quantidade*2) + 1; //Caso existam outras espécies

                        if((recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado ) >= espaçoAserOcupado) { //Check se há espaço suficiente
                            if((recintosDisponiveis[i].bioma == 'savana') || (recintosDisponiveis[i].bioma == 'savana e rio')) {
                                recintosViaveis.push("Recinto " + recintosDisponiveis[i].numero + " (espaço livre: " + (recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado - espaçoAserOcupado) + " total: " + recintosDisponiveis[i].tamanhoTotal + ")");
                            }
                        }

                    } else { //Caso tenham somente gazelas ou nenhum animal ali
                        espaçoAserOcupado = quantidade*2;

                        if((recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado ) >= espaçoAserOcupado) { 
                            if((recintosDisponiveis[i].bioma == 'savana') || (recintosDisponiveis[i].bioma == 'savana e rio')) {
                                recintosViaveis.push("Recinto " + recintosDisponiveis[i].numero + " (espaço livre: " + (recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado - espaçoAserOcupado) + " total: " + recintosDisponiveis[i].tamanhoTotal + ")");
                            }
                        }
                    }
                }
            }



            //Checando existe algum recinto viável, caso não, retornar o seguinte erro, AQUI NO FINAL MUDAR O RECINTO VIAVEL PARA FALSE CASO NÃO TENHA
            if (recintosViaveis.length == 0){
                recintosViaveis = false;
                erro = 'Não há recinto viável';
                return {erro, recintosViaveis};
            } else {
                return {erro, recintosViaveis};
            }
        }
        //Fim do if da gazela       





        //-----------------------------------------------------------
        if(animal == 'HIPOPOTAMO') {
            let espaçoAserOcupado = 0;

            //Detalhes do hipopotamo
            //Ocupa 4 espaços por animal
            //Gosta dos biomas savana, rio ou savana e rio
            //Hipopotamo só tolera outras espécies se for no bioma de savana e rio

            //Ordem dos ifs
            //Checar se não há espécies carnívoras ali
            //Checar se há outras espécies, caso sim, somente o bioma de savana e rio é aceitável, também considerar espaço extra ocupado
            //Checar se há espaço suficiente pros animais
            //Checar se os bioma é de savana, rio ou savana e rio


            for (let i = 0; i < 5; i++) {
                if((recintosDisponiveis[i].especies != 'LEAO') && (recintosDisponiveis[i].especies != 'LEOPARDO') && (recintosDisponiveis[i].especies != 'CROCODILO')) { //Não podem ter espécies carnívoras
                    if((recintosDisponiveis[i].especies != 'HIPOPOTAMO') && (recintosDisponiveis[i].especies != null)) { //Checando se há outras espécies
                        espaçoAserOcupado = (quantidade*4) + 1; //Caso existam outras espécies

                        if((recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado ) >= espaçoAserOcupado) { //Se há espaço
                            if(recintosDisponiveis[i].bioma == 'savana e rio') { //Precisa ser savana e rio para ter outras espécies
                                recintosViaveis.push("Recinto " + recintosDisponiveis[i].numero + " (espaço livre: " + (recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado - espaçoAserOcupado) + " total: " + recintosDisponiveis[i].tamanhoTotal + ")");
                            }
                        }

                    } else { //Só existem hipopotamos lá ou não há nenhum animal
                        espaçoAserOcupado = quantidade*4;

                        if((recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado ) >= espaçoAserOcupado) { //Há espaço
                            if((recintosDisponiveis[i].bioma == 'savana') || (recintosDisponiveis[i].bioma == 'rio') || (recintosDisponiveis[i].bioma == 'savana e rio')) { //Check de biomas
                                recintosViaveis.push("Recinto " + recintosDisponiveis[i].numero + " (espaço livre: " + (recintosDisponiveis[i].tamanhoTotal - recintosDisponiveis[i].tamanhoOcupado - espaçoAserOcupado) + " total: " + recintosDisponiveis[i].tamanhoTotal + ")");
                            }
                        }
                    }
                }  
            }



            //Checando existe algum recinto viável, caso não, retornar o seguinte erro, AQUI NO FINAL MUDAR O RECINTO VIAVEL PARA FALSE CASO NÃO TENHA
            if (recintosViaveis.length == 0){
                recintosViaveis = false;
                erro = 'Não há recinto viável';
                return {erro, recintosViaveis};
            } else {
                return {erro, recintosViaveis};
            }
        }
            
    }

}

export { RecintosZoo as RecintosZoo };

/*const resultado = new RecintosZoo().analisaRecintos('GAZELA', 2);
console.log(resultado.erro);
console.log(resultado.recintosViaveis);*/