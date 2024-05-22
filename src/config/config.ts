// your config code
import algosdk from "algosdk";
 
const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";
 


const mnemonic: string = "champion trap rather myself fade nasty alert innocent churn nation bracket oxygen chase employ forget salmon zone nation join speak come patient garment absent grape";
 
export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
 
export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}


