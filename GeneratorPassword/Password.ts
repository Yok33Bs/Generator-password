 export default class Password {
    private length: number = 8;
    private hash :string = "";

    public createPassword() : void{
        const chars : string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
        this.hash = '';
        
        for(let i : number = 0; i < this.length ; i++){
            this.hash += chars.charAt( Math.random()*chars.length);
        };
    };  
    public getHash():string{
        return this.hash;
    };
    public setLength( length:number) : void{
        this.length = length ;
    };
    public getLength() : number {
        return this.length
    };
    
    public passwordStrongh():boolean{
        let regex1 : RegExp = /[A-Z]/g
        let regex2 : RegExp = /[a-z]/g
        let regex3 : RegExp = /[0-9]/g

        let arr : Array<string>= this.hash.match(regex1) || [];
        let arr2 : Array<string>= this.hash.match(regex2) || [];
        let arr3 : Array<string>= this.hash.match(regex3) || [] ;        
        
        if(arr.length  < 2) return false ;
        if(arr2.length < 1) return false ;
        if(arr3.length < 5) return false ;

        return true ;
    };  
};

const clave1 : Password = new Password();

clave1.setLength(9);

clave1.createPassword()

console.log(clave1.getHash());

console.log(clave1.passwordStrongh());
