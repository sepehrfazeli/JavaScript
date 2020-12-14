class ShiftCipher{
    constructor(n){
        this._n = n
    }
    encrypt(str){
        str = Array.from(str).map((x)=> {
            let a = x.toUpperCase().charCodeAt(0);
            if(a>64 && a<91){
                let b = a+this._n;
                if(b > 90) b-=90;
                return String.fromCharCode(b);
            }else return x;

        });
        return Array.from(str).join('') ;
    }
    decrypt(str){
        str = Array.from(str).map((x)=> {
            let a = x.toUpperCase().charCodeAt(0);
            if(a>64 && a<91){
                let b = a-this._n;
                if(b < 65) b+=26;
                return String.fromCharCode(b).toLowerCase();
            }else return x.toLowerCase();
        });
        return Array.from(str).join('') ;
    }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
