

const decrypt = require("./decrypt")

exports.handler = async (event) => {
  
  console.log(JSON.stringify(event));
  
  let parameters = event.Details.Parameters;
  
  
   value  = await decrypt().decryptData(parameters.values);

   return {}



 };