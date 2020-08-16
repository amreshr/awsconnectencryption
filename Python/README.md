# Python

## How to use 

- Add aws_encryption_layer.zip to your lambda layer

In the Lambda :
```sh
from decryptService import decrypt_string

from logger import LogHandler

def lambda_handler(event, context):
    print(json.dumps(event))
    value = decrypt_string(encrypted_value,KEY_ID)
    
```
