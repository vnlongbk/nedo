import {
  connect,
  Contract,
  keyStores,
  WalletConnection,
  Account,
  Near,
  utils,
} from 'near-api-js'
import getConfig from './config'

import * as nearAPI from 'near-api-js'

const nearConfig = getConfig(process.env.REACT_APP_NODE_ENV || 'development')

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet

  const keyStore = new keyStores.BrowserLocalStorageKeyStore()

  const near = await connect(
    Object.assign({ deps: { keyStore: keyStore } }, nearConfig)
  )

  window.walletConnection = new WalletConnection(near)

  window.accountId = window.walletConnection.getAccountId()

  window.account = await near.account(window.accountId)

  // const accesssKeys = await window.account.getAccessKeys()
  // await window.account.addKey(
  //   'ed25519:2x2VZ2bQJs5ncxKfs2bPVNdy4mfuXjSmnZjhtt9bXMvvHw55T9iGibJDK5LtK4efpjTepjVcu6M5hxiE2GubR64h'
  // )

  window.contract = await new Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      viewMethods: ['getMessages'],
      changeMethods: ['addMessage'],
    }
  )
}

export const getWallet = async () => {
  const accountBalance = (await window.account.getAccountBalance()).available

  console.log(window.account)

  const x = await window.account.getAccessKeys()

  console.log(x)

  // const response = await window.account.sendMoney(
  //   'longvo.testnet', // receiver account
  //   '1000000000000000000000' // amount in yoctoNEAR
  // )

  return
}

export function logout() {
  window.walletConnection.signOut()
  window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
  window.walletConnection.requestSignIn(nearConfig.contractName)
}
