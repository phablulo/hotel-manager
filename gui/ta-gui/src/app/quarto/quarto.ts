//classe dummy para hospede 
class Hospede{
  id : number;
  clean(): void{
    this.id=null;
  }
  clone(): Hospede{
    var returnValue : Hospede;
    returnValue = new Hospede();
    returnValue.id = this.id;
    return returnValue;
  }
  copyFrom(from:Hospede): void{
    this.id = from.id;
  }
}

export class Quarto {
  public numeroQuarto : Number;
  public estado : string;
  public hospede : Hospede;


}