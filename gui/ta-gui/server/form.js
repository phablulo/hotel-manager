"use strict";
exports.__esModule = true;
var Form = /** @class */ (function () {
    function Form() {
        this.clean();
    }
    Form.prototype.clean = function () {
        this.nome = "";
        this.email = "";
        this.telefone = "";
        this.celular = "";
        this.profissao = "";
        this.nacionalidade = "";
        this.aniversario = "";
        this.genero = "";
        //documento
        this.numero = "";
        this.tipo = "";
        this.orgao = "";
        this.cpf = "";
        //endereço
        this.endereco = "";
        this.complemento = "";
        this.bairro = "";
        this.numeroRua = "";
        this.cidade = "";
        this.estado = "";
        this.pais = "";
        this.cep = "";
        //procedência
        this.ProcPais = "";
        this.ProcEstado = "";
        this.ProcCidade = "";
        //proximo destino
        this.ProxPais = "";
        this.ProxEstado = "";
        this.ProxCidade = "";
        //
        this.Motivo = "";
        this.MeioDeTranspote = "";
        this.Obcervacoes = "";
        //
        this.NumeroHospede = "";
        this.UHNumero = "";
        this.Entrada = new Date(0, 0, 0);
        this.Saida = new Date(0, 0, 0);
        //Empresa
        this.EmpRazaoSocial = "";
        this.EmpNomeFantasia = "";
        this.EmpRede = "";
        this.EmpEndereco = "";
        this.EmpEstado = "";
        this.EmpMunicipio = "";
        this.EmpCNPJ = "";
        this.EmpCadastur = "";
        this.EmpTipo = "";
        this.EmpCep = "";
        this.EmpEmail = "";
        this.EmpCat = "";
        this.EmpTelefone = "";
    };
    return Form;
}());
exports.Form = Form;
