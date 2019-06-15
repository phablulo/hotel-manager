const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var resultado;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());

app.use('/graficos', require('./graficos'))

app.post('/email', function (req = express.Request, res = express.Response) {
  var email = req.body; 
  result = enviar(email);
  console.log(result, "aqui");
  if (result) {
    res.send({"success": "enviado com sucesso!"});
  } else {
    res.send({"failure": "Email não foi enviado com sucesso!"});
  }
});
function enviar(email){
  console.log(email, 'data of form');
  var configs = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465',
    auth: {
      user: 'lvjs@cin.ufpe.br',
      pass: ''
    }
  });

  var mailOptions = {
    from: 'lvjs@cin.ufpe.br',
    to: 'lucasvini10.lvj@gmail.com', 
    cc:`lvjs@cin.ufpe.br <${email['email']}>`,
    subject:`${email['subject']}`,
    html: `
${email['body']}
          `
  };

  var resposta = configs.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return "null";
    } else {
      console.log('Email enviado: ' + info.response);
      return "sucesso";
    }
  });
  console.log(resposta);
  return resposta;
}
app.post('/check', function (req = express.Request, res = express.Response) {
  result = 0;
  console.log(result, "aqui");
  if (result) {
    res.send({"success": "enviado com sucesso!"});
  } else {
    res.send({"failure": "Email não foi enviado com sucesso!"});
  }
});

app.put('/check', function (req = express.Request, res = express.Response) { 
  result = 0;
  console.log(result, "aqui");
  if (result) {
    res.send({"success": "enviado com sucesso!"});
  } else {
    res.send({"failure": "Email não foi enviado com sucesso!"});
  }
});

app.listen(3000, () => {
  console.log("server run!!!");
});
