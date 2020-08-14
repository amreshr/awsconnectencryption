const Utils = require("./utils.js");

const decrypt = ()=> {

    return {
        decryptData : async (data) =>{
            
            const dt=Date.now();
            
            let privateKey = await Utils.getPrivateKey();
            if (!privateKey) {
                console.log("Key missing")
                return "keymissing";
            }
            
            
             console.log(`Started in ${Date.now()-dt} milliseconds`);
            let encryptedData = data;
            var decryptedData = '';
            if (encryptedData && encryptedData.length>1) {
                decryptedData =  await Utils.decryptDataUsingPrivateKey(encryptedData,privateKey);
            } else {
                console.log("No data provided!")
                decryptedData = "nodata";
            }
             console.log(`Finished in ${Date.now()-dt} milliseconds`);
            return decryptedData;
        }
    }
};
module.exports = decrypt;
