import cryptoJs from 'crypto-js'

export default class CommonUtils {

    private readonly secretKey: string;

    constructor() {

        // this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

        if (process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY
          //   this.secretKey = "din16"
        } else {
            throw new Error("Secret key is not defined");
        }
    }

/**
 * 
 * @param encData {Data need to be encrypted}
 * @returns 
 */
    public encrypt (encData) : string {
          const encryptData =   cryptoJs.AES.encrypt(encData , this.secretKey).toString();
          return encryptData;
    }

    /**
     * 
     * @param decData {Data need to be decrypted}
     * @returns 
     */
    public decrypt (decData):string {
       const decryptData =  cryptoJs.AES.decrypt(decData , this.secretKey).toString(cryptoJs.enc.Utf8);
       return decryptData;
    }

}