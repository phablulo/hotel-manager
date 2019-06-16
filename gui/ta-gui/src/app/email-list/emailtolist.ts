export class Emailtolist {
  id: string;
  subject: string;
  body: string;
  destinatario: string;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.id = "";
    this.subject = "";
    this.body = "";
    this.destinatario = "";

  }


}