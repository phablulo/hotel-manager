//classe dummy para hospede 
export class Hospede{
  nome : string;
  clean(): void{
    this.nome=null;
  }
  clone(): Hospede{
    var returnValue : Hospede;
    returnValue = new Hospede();
    returnValue.nome = this.nome;
    return returnValue;
  }
  copyFrom(from:Hospede): void{
    this.nome = from.nome;
  }
}

export class Quarto {
  public numeroQuarto : Number;
  public estado : string;
  public hospede : Hospede;


}