export class Form {
    nome: string;
    email: string;
    telefone: string;
    celular: string;
    profissao: string;
    nacionalidade: string;
    aniversario: string;
    genero: string;

    //documento
    numero: string;
    tipo: string;
    orgao: string;
    cpf: string;

    //endereço
    endereco: string;
    complemento: string;
    bairro: string;
    numeroRua: string;
    cidade: string;
    estado: string;
    pais: string;
    cep: string;

    //proxima procedência
    ProcPais: string;
    ProcEstado: string;
    ProcCidade: string;

    //proximo destino
    ProxPais: string;
    ProxEstado: string;
    ProxCidade: string;
    
    //
    Motivo: string;
    MeioDeTranspote: string;
    Obcervacoes: string;

    //
    NumeroHospede: string;
    UHNumero: string;
    Entrada: Date;
    Saida: Date;
    
    //Empresa
    EmpRazaoSocial: string;
    EmpNomeFantasia: string;
    EmpRede: string;
    EmpEndereco: string;
    EmpEstado: string;
    EmpMunicipio: string;
    EmpCNPJ: string;
    EmpCadastur: string;
    EmpTipo: string;
    EmpCep: string;
    EmpEmail: string;
    EmpCat: string;
    EmpTelefone: string;
    
    constructor() {
        this.clean();
    }

    clean(): void {
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
        this.Entrada = new Date();
        this.Saida = new Date();

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
    }

    JSONtoForm(a: JSON) {
        this.nome = a['nome'];
        this.email = a['email'];
        this.telefone = a['telefone'];
        this.celular = a['celular'];
        this.profissao = a['profissao'];
        this.nacionalidade = a['nacionalidade'];
        this.aniversario = a['aniversario'];
        this.genero = a['genero'];

        //documento
        this.numero = a['numero'];
        this.tipo = a['tipo'];
        this.orgao = a['orgao'];
        this.cpf = a['cpf'];

        //endereço
        this.endereco = a['endereco'];
        this.complemento = a['complemento'];
        this.bairro = a['bairro'];
        this.numeroRua = a['numeroRua'];
        this.cidade = a['cidade'];
        this.estado = a['estado'];
        this.pais = a['pais'];
        this.cep = a['cep'];

        //procedência
        this.ProcPais = a['ProcPais'];
        this.ProcEstado = a['ProcEstado'];
        this.ProcCidade = a['ProcCidade'];

        //proximo destino
        this.ProxPais = a['ProxPais'];
        this.ProxEstado = a['ProxEstado'];
        this.ProxCidade = a['ProxCidade'];
        
        //
        this.Motivo = a['Motivo'];
        this.MeioDeTranspote = a['MeioDeTranspote'];
        this.Obcervacoes = a['Obcervacoes'];

        //
        this.NumeroHospede = a['NumeroHospede'];
        this.Entrada = new Date();
        this.Saida = new Date();

        //Empresa
        this.EmpRazaoSocial = a['EmpRazaoSocial'];
        this.EmpNomeFantasia = a['EmpNomeFantasia'];
        this.EmpRede = a['EmpRede'];
        this.EmpEndereco = a['EmpEndereco'];
        this.EmpEstado = a['EmpEstado'];
        this.EmpMunicipio = a['EmpMunicipio'];
        this.EmpCNPJ = a['EmpCNPJ'];
        this.EmpCadastur = a['EmpCadastur'];
        this.EmpTipo = a['EmpTipo'];
        this.EmpCep = a['EmpCep'];
        this.EmpEmail = a['EmpEmail'];
        this.EmpCat = a['EmpCat'];
        this.EmpTelefone = a['EmpTelefone'];
    }
}
