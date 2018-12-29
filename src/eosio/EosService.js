import { Api, Rpc, SignatureProvider } from 'eosjs';

async function takeAction(action, dataValue) {
  const privateKey = localStorage.getItem('private_key');
  const rpc = new Rpc.JsonRpc(process.env.VUE_APP_NODE_ENDPOINT);
  const signatureProvider = new SignatureProvider([privateKey]);
  const api = new Api({
    rpc,
    signatureProvider,
    textDecoder: new TextDecoder(),
    textEncoder: new TextEncoder()
  });

  try {
    const resultWithConfig = await api.transact(
      {
        actions: [
          {
            account: process.env.VUE_APP_SMART_CONTRACT_NAME,
            name: action,
            authorization: [
              {
                actor: localStorage.getItem('name_account'),
                permission: 'active'
              }
            ],
            data: dataValue
          }
        ]
      },
      {
        blocksBehind: 3,
        expireSeconds: 30
      }
    );
    return resultWithConfig;
  } catch (err) {
    throw err;
  }
}

class EosService {
  static login(acc, key) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('name_account', acc);
      localStorage.setItem('private_key', key);
      takeAction('login', { user: acc })
        .then(() => {
          resolve();
        })
        .catch(err => {
          localStorage.removeItem('name_account');
          localStorage.removeItem('private_key');
          reject(err);
        });
    });
  }
}

export default EosService;
