export class Email {
  subject: string;
  body: string;
  email: string;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.subject = "";
    this.body = "";
    this.email = "";
  }


}