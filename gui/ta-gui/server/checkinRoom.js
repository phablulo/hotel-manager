var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db.db');


class CheckinRoom {

  CheckinRoom() {

  }

  checkin(FORM){ 
  
    var formu = new form();
    formu = FORM;
  
    db.serialize(function() {
      db.run("INSERT INTO check_in (id, cliente_id, entrada, saida, numero_hospede, uhnumero, check-in) VALUES ('"+formu['cpf']+"', '"+formu['cpf']+"', '"+formu['Entrada']+"', '"+formu['Saida']+"', '"+formu['NumeroHospede']+"', '"+formu['UHNumero']+"', 'Y')");
      db.run("INSERT INTO cliente (id_cliente, nome, telefone, profissao, nacionalidade, idade, sexo, data_nascimento, cpf, proximo_destino_cidade, motivo_viagem_id, meio_transporte_id, email, proximo_destino_estado, proximo_destino_pais, ultima_visita_cidade, ultima_visita_pais, ultima_visita_estado) VALUES ('"+formu['cpf']+"', '"+formu['nome']+"', '"+formu['telefone']+"', '"+formu['profissao']+"', '"+formu['nacionalidade']+"', '"+formu['aniversario']+"', '"+formu['cpf']+"', '"+formu['ProxCidade']+"', '"+formu['Motivo']+"', '"+formu['MeioDeTranspote']+"', '"+formu['email']+"', '"+formu['ProxEstado']+"', '"+formu['ProxPais']+"', '"+formu['ProcCidade']+"', '"+formu['ProcPais']+"', '"+formu['ProcEstado']+"')");
    
      db.run("INSERT INTO documento (cliente_id, numero, tipo, orgao_expedidor) VALUES ('"+formu['cpf']+"', '"+formu['numero']+"', '"+formu['tipo']+"', '"+formu['orgao']+"')");
      db.run("INSERT INTO empresa (id, razao_social, nome_fantasia, rede, endereco, estado, cidade, cnpj, cadastur, tipo, cep, email, cat, telefone) VALUES ('"+formu['cpf']+"', '"+formu['EmpRazaoSocial']+"', '"+formu['EmpNomeFantasia']+"', '"+formu['EmpRede']+"', '"+formu['EmpEndereco']+"', '"+formu['EmpEstado']+"', '"+formu['EmpMunicipio']+"', '"+formu['EmpCNPJ']+"', '"+formu['EmpCadastur']+"', '"+formu['EmpTipo']+"', '"+formu['EmpCep']+"', '"+formu['EmpEmail']+"', '"+formu['EmpCat']+"', '"+formu['EmpTelefone']+"')");
    
      db.run("INSERT INTO endereco (cliente_id, pais, estado, cidade, bairro, complemento, numero, cep) VALUES ('"+formu['cpf']+"', '"+formu['pais']+"', '"+formu['estado']+"', '"+formu['cidade']+"', '"+formu['bairro']+"', '"+formu['complemento']+"', '"+formu['numeroRua']+"', '"+formu['cep']+"')");
      db.run("INSERT INTO meio_transporte (id, meio, observaçao) VALUES ('"+formu['cpf']+"', '"+formu['MeioDeTranspote']+"', '"+formu['Obcervacoes']+"')");
    
      db.run("INSERT INTO motivo_viagem (id, motivo) VALUES ('"+formu['cpf']+"', '"+formu['Motivo']+"')");
  
  });
   
  db.close(); 
  }
  
  checkinUpdate(FORM) {
      var formu = FORM;
  
      db.serialize(function() {
          db.run("DELETE FROM check_in WHERE id =" + formu['cpf']);
          db.run("DELETE FROM cliente WHERE id_cliente =" + formu['cpf']);
          
          db.run("DELETE FROM documento WHERE cliente_id =" + formu['cpf']);
          db.run("DELETE FROM empresa WHERE id =" + formu['cpf']);
          
          db.run("DELETE FROM endereco WHERE cliente_id =" + formu['cpf']);
          db.run("DELETE FROM meio_transporte WHERE id =" + formu['cpf']);
          db.run("DELETE FROM motivo_viagem WHERE id =" + formu['cpf']);        
      });
  
      checkin(formu);
      return formu;
  }
  
  getCheckin(FORM) { //
    var formu = [];
  
    db.serialize(function(){
      db.all("SELECT * FROM check_in WHERE id= " + formu['cpf'], function(err, rows) {
        formu = formu.concat(rows)
      });
      
      db.all("SELECT * FROM cliente WHERE id_cliente= " + formu['cpf'], function(err, rows) {
        formu = formu.concat(rows)
      });
  
      db.all("SELECT * FROM documento WHERE cliente_id= " + formu['cpf'], function(err, rows) {
        formu = formu.concat(rows)
      });
  
      db.all("SELECT * FROM empresa WHERE cliente_id= " + formu['cpf'], function(err, rows) {
        formu = formu.concat(rows)
      });
  
      db.all("SELECT * FROM endereço WHERE id= " + formu['cpf'], function(err, rows) {
        formu = formu.concat(rows)
      });
  
      db.all("SELECT * FROM meio_transporte WHERE cliente_id= " + formu['cpf'], function(err, rows) {
        formu = formu.concat(rows)
      });
  
      db.all("SELECT * FROM motivo_viagem WHERE id= " + formu['cpf'], function(err, rows) {
        formu = formu.concat(rows)
      });
  
      FORM = formu;
      if (FORM == null) {
        res.send({"fail": "O hospede não pode ser atualizado"})
      } else {
        res.send(FORM);
      }
  
    });
  }
  
  
  getQuarto(res){ //
    db.serialize(function() {
      
      db.all("SELECT numero_quarto FROM quarto WHERE estado='livre'", function(err, rows){
      console.log(rows);
      if (rows == null) {
        res.send({"fail": "Os quartos não puderam ser consultados"})
      } else {
        res.send(rows);
      }
    });
  });
  }
}
module.exports = CheckinRoom;