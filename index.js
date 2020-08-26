var http = require('http');

//criaremos o nosso primeiro Servidor
http.createServer(function(req, res){
    res.write('Ceunsp AnDes - Servidor Node')
    res.end(); //fim da resposta
}).listen(5000);

//o Servidor ficará ouvindo na porta 5000