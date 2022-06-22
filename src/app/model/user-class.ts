export class UserClass {


constructor(private _name:string, private _age:number, private _email:string, private _gender:string){
 
}

public get name(): string {
    return this._name;
}

public set name(value: string) {
    this._name = value;
}
public get age():number {
    return this._age;

}
//If the age is negative it wont add the user and show an error.

public set age(value: number){
    if(value < 0) {
       throw new Error("invalid age")
    }
    this._age = value;
}

public get email(): string {
    return this._email;
}

public set email(value: string) {
    this._email = value;
}

public get gender(): string {
    return this._gender;
}

public set gender(value: string) {
    this._gender= value;
}


}
