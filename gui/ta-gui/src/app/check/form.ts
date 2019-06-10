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
        this.Entrada = new Date(0, 0 ,0);
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
        
    }
}
