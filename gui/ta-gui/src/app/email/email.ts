export class Email {
  subject: string;
  body: string;
  profissao: string;
  nacionalidade: string;
  cidade: string;
  estado: string;
  pais: string;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.subject = "";
    this.body = "";
    this.profissao = "";
    this.nacionalidade = "";
    this.cidade = "";
    this.estado = "";
    this.pais = "";

  }


}