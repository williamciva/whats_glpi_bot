const jsonResponses = require("./respostas.json");

module.exports = class Core{
    constructor(message) {
        this.message = message;
        this.nameUser = "_*"+this.message.sender.name+"*_"
    }
    
    nerveImpulse(){
        
        if ( this.message.isNewMsg === true){
            console.log( this.message )
            let hi = "Olá "+this.nameUser
            let str = jsonResponses["isNewMsg"]

            let messageReturn = ( hi + str )
            return  messageReturn
        }

        // Comando para que o bot liste as opções disponíveis
        if ( this.message.body === "/comandos" ){
            str = jsonResponses["/comandos"]
            
            let messageReturn = ( hi + str )
            return  messageReturn
        }

        else {
            return "Teste"
        };

    };
};