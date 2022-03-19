export = Core

class Core{
    nerveImpulse( message ){
        if ( message.body === "/comandos" ){
            let messageReturn = (message.from, "Olá " + message.sender.name + ", obrigado por mandar mensagem para mim./n Estamos trabalhando para deixar esse bot legal e funcional 😅" )
            return  messageReturn
        }
    };
};