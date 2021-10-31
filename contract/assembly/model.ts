import { context, u128, PersistentVector } from 'near-sdk-as'

@nearBindgen
export class SendNear {
  premium: boolean
  sender: string
  constructor(public text: string) {
    this.premium =
      context.attachedDeposit >= u128.from('10000000000000000000000')
    this.sender = context.sender
  }
}

export const response = new PersistentVector<SendNear>('m')
