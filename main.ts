const  wa  =  require ( '@open-wa/wa-automate' );

const pathChrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

wa.create({
    multiDevice: false,                 // Permite Multiplos Dispositivos
    authTimeout: 0,                     // Permite que o Whatsapp aguarde para sempre voce escanear o qrcode
    qrTimeout: 0,                       // Nao renova o qrcode
    autoRefresh: false,                 // Nao fica recarregando o qrcode
    cacheEnabled: true,                 // Habilita a  criacao de cache
    deleteSessionDataOnLogout: true,    // Deleta os dados de sessao ao desconectar ( essa opcao é muito util para testes onde é ...
                                        // ... necessario desconectar-se várias vezes, esses SessionsData podem gerar conflitos )    
    executablePath: pathChrome,         // Caminho do path executavel do chrome
    useChrome: true,                    // Detecta automaticamente uma instancia do Chrome
    headless: true,                     // Quando desabilitada permite que uma janela do chrome seja aberta para ser vizualido o bot, marque como true caso nao queira essa informacao
    ezqr: true,                         // Gera um link com o qrcode
    killClientOnLogout: true,           // Mata o cliente quando um logout for detectado
    legacy: true,                       // Usa as versoes mais estaveis da lib
    logConsole: true,                   // Registra todos os logs do navegador no terminal
    logConsoleErrors: true,             // Registra todos os logs de erros do navegador no terminal
    logFile: true,                      // Gera logs da sessao no caminho relativo [pd]/[sessionId]/[start timestamp].log
    screenshotOnInitializationBrowserError: true,   // Quando verdadeira, esta opção fará uma captura de tela do navegador quando ocorrer um erro inesperado no navegador ...
                                                    //  durante criar inicialização. O caminho será [working directory]/logs/[session ID]/[start timestamp]/[timestamp].jpg      
    throwErrorOnTosBlock: true,         // Definir isso como true gerará um erro se uma sessão não conseguir obter um código QR ou não puder reiniciar uma sessão
    //onError:{}                        // Trata um erro de execucao, documentacao: https://docs.openwa.dev/enums/api_model_config.OnError.html
    //pQueueDefault:{}                  // Define como será o funcionamento da threads, documentacao: https://docs.openwa.dev/interfaces/api_model_config.ConfigObject.html#pQueueDefault
    devtools:{                          // Gera um link web para as ferramentas de desenvolvedor da aplicacao
        pass: '',                       // Senha
        user: ''                        // Usuario
    },
    discord: 'Linck#7638'               // Discrod do desenvolvedor
});