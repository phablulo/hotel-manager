var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db.db');


class CheckinRoom {

  CheckinRoom() {

  }

  checkin(FORM){ 
  
    var formu;
    formu = FORM;
  
    db.serialize(function() {
      db.run("INSERT INTO cliente (nome, telefone, profissao, nacionalidade, sexo, data_nascimento, cpf, proximo_destino_cidade, motivo_viagem_id, meio_transporte_id, email, proximo_destino_estado, proximo_destino_pais, ultima_visita_cidade, ultima_visita_pais, ultima_visita_estado) VALUES ('"+formu['nome']+"', '"+formu['telefone']+"', '"+formu['profissao']+"', '"+formu['nacionalidade']+"', '"+formu['genero']+"', '"+formu['aniversario']+"', '"+formu['cpf']+"', '"+formu['ProxCidade']+"', '"+formu['Motivo']+"', '"+formu['MeioDeTranspote']+"', '"+formu['email']+"', '"+formu['ProxEstado']+"', '"+formu['ProxPais']+"', '"+formu['ProcCidade']+"', '"+formu['ProcPais']+"', '"+formu['ProcEstado']+"')");
      
      db.run("INSERT INTO documento (cliente_id, numero, tipo, orgao_expedidor) VALUES ('"+formu['cpf']+"', '"+formu['numero']+"', '"+formu['tipo']+"', '"+formu['orgao']+"')");
      db.run("INSERT INTO check_in (id, entrada, saida, numero_hospede, uhnumero, checkin) VALUES ('"+formu['cpf']+"', '"+formu['Entrada']+"', '"+formu['Saida']+"', '"+formu['NumeroHospede']+"', '"+formu['UHNumero']+"', 'Y')");
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
          db.run("DELETE FROM cliente WHERE cpf =" + formu['cpf']);
          
          db.run("DELETE FROM documento WHERE cliente_id =" + formu['cpf']);
          db.run("DELETE FROM empresa WHERE id =" + formu['cpf']);
          
          db.run("DELETE FROM endereco WHERE cliente_id =" + formu['cpf']);
          db.run("DELETE FROM meio_transporte WHERE id =" + formu['cpf']);
          db.run("DELETE FROM motivo_viagem WHERE id =" + formu['cpf']);        
      });
  
      this.checkin(formu);
      return formu;
  }
  
  getCheckin(FORM, res) { //
    var formu = FORM;
    var aux = [];
    aux.push(formu['nome']);
    aux.push(formu['cpf']);
    
    db.serialize(function(){
      db.all("SELECT * FROM check_in WHERE id= " + formu['cpf'], function(err, rows) {
        if (rows == 'undefined') {
          console.log(typeof rows);
          formu['NumeroHospede'] = rows[0]['numero_hospede'];
        }
        //formu = formu.concat(rows);
      });
      
      db.all("SELECT * FROM cliente WHERE id_cliente= " + formu['cpf'], function(err, rows) {
        if (rows == 'undefined') {
          formu['telefone'] = rows[0]['telefone'];
          formu['profissao'] = rows[0]['profissao'];
          formu['nacionalidade'] = rows[0]['nacionalidade'];
          formu['genero'] = rows[0]['sexo'];
          formu['aniversario'] = rows[0]['data_nascimento'];
          formu['email'] = rows[0]['email'];
        }
        //formu = formu.concat(rows);
      });
  
      db.all("SELECT * FROM documento WHERE cliente_id= " + formu['cpf'], function(err, rows) {
        if (rows == 'undefined') {
          formu['numero'] = rows[0]['numero'];
          formu['tipo'] = rows[0]['tipo'];
          formu['orgao'] = rows[0]['orgao_expedidor'];
        }
        //formu = formu.concat(rows);
      });
  
      db.all("SELECT * FROM empresa WHERE cliente_id= " + formu['cpf'], function(err, rows) {
        if (rows == 'undefined') {
          formu['EmpRazaoSocial'] = rows[0]['razao_social'];
          formu['EmpNomeFantasia'] = rows[0]['nome_fantasia'];
          formu['EmpRede'] = rows[0]['rede'];
          formu['EmpEndereco'] = rows[0]['endereco'];
          formu['EmpEstado'] = rows[0]['estado'];
          formu['EmpMunicipio'] = rows[0]['cidade'];
          formu['EmpCNPJ'] = rows[0]['cnpj'];
          formu['EmpCadastur'] = rows[0]['cadastur'];
          formu['EmpTipo'] = rows[0]['tipo'];
          formu['EmpCep'] = rows[0]['cep'];
          formu['EmpEmail'] = rows[0]['email'];
          formu['EmpCat'] = rows[0]['cat'];
          formu['EmpTelefone'] = rows[0]['telefone'];
        }
        //formu = formu.concat(rows);
      });
  
      db.all("SELECT * FROM endereço WHERE id= " + formu['cpf'], function(err, rows) {
        if (rows == 'undefined') {
          formu['pais'] = rows[0]['pais'];
          formu['estado'] = rows[0]['estado'];
          formu['cidade'] = rows[0]['cidade'];
          formu['bairro'] = rows[0]['bairro'];
          formu['complemento'] = rows[0]['complemento'];
          formu['numeroRua'] = rows[0]['numero'];
          formu['cep'] = rows[0]['cep'];  
        }
        //formu = formu.concat(rows);
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
      if (rows == null) {
        res.send({"fail": "Os quartos não puderam ser consultados"})
      } else {
        res.send(rows);
      }
    });
  });
  }

  getQuarto1(res){ //
    db.serialize(function() {
      
      db.all("SELECT preco_padrao FROM quarto WHERE estado='livre'", function(err, rows){
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