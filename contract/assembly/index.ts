import { SendNear, response } from './model'

export function sendNear(text: string): void {
  const data = new SendNear(text)
  response.push(data)
}
