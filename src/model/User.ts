export class User {

  public id: number;
  public username: string;
  public password: string;

  constructor(public inId: number, public inUsername: string, public inPassword: string){
    this.id = inId;
    this.username = inUsername;
    this.password = inPassword;
  }
}
