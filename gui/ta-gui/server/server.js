const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db.db');
var resultado;
const CHECK = require('./checkinRoom');

room = new CHECK();


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());

app.post('/email', function (req = express.Request, res = express.Response) {
  var email = req.body; 
  getEmails(email, res);
});

function getEmails(email, res){
console.log(email);
var condicao = "";
  
  if(email.profissao != ""){
    condicao += "AND c.profissao = '"+email.profissao+"'";

  }


  if(email.nacionalidade != ""){
  condicao +=  "AND c.nacionalidade = '"+email.nacionalidade+"'";

  }

  if(email.cidade != ""){
  condicao +=  "AND e.cidade = '"+email.cidade+"'";

  }

  if(email.estado != ""){
  condicao +=  "AND e.estado = '"+email.estado+"'";

  }

  if(email.pais != ""){
  condicao +=  "pais = '"+email.pais+"'";

  }

 db.serialize(function() {

  sql = "SELECT distinct c.email, c.nome FROM cliente c, endereco e WHERE visivel = 'true' "+condicao;
  console.log(sql)
  db.all(sql, function(err, rows){
    console.log(rows);
    for (var i = rows.length - 1; i >= 0; i--) {

      if(i == 0){enviar(email, rows[i].nome, rows[i].email, true, res);} else {
      enviar(email, rows[i].nome, rows[i].email, false, res);
      }
      saveEmail(email,rows[i].email, rows[i].nome);
      
    }
   
  });
});

}

function saveEmail(email, dest, nome){ 

var subject = email.subject;
var body = email.body;
console.log(nome)
db.serialize(function() {
  db.run("INSERT INTO email (subject, body) VALUES ('"+subject+"', '"+body.replace("$cliente", nome )+"')");
  sql = "INSERT INTO envio_email (email_id, destinatario) VALUES ((SELECT id FROM email WHERE body = '"+body.replace("$cliente", nome )+"'), '"+dest+"' )";
  console.log(sql)
  db.run(sql);



});
 

}


function enviar(email, nome, dest, last, res){
  //console.log(email, 'data of form');
  var corpo = email.body.replace("$cliente", nome )
  var configs = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465',
    auth: {

app.post('/check', function (req = express.Request, res = express.Response) {
  result = room.checkinUpdate(req.body)
  console.log(result, "aqui");
  if (result) {
    res.send({"success": "enviado com sucesso!"});
  } else {
    res.send({"failure": "check-in mal sucedido"});
  }
});


app.put('/check', function (req = express.Request, res = express.Response) { 
  console.log(req.body, "aqui");
  room.getCheckin(req.body);
  if (result) {
    res.send({"success": "enviado com sucesso!"});
  } else {
    res.send({"failure": "check-in mal sucedido"});
  }
});


app.get('/quarto', function (req, res) {
  console.log('req.body');
  room.getQuarto(res);
  //res.send(JSON.stringify(cadastro.getAlunos()));
})

app.listen(3000, () => {
  console.log("server run!!!");
});
