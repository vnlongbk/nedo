/* eslint-disable jsx-a11y/img-redundant-alt */
import { data } from './mock'
import { login, logout } from './utils'
import Big from 'big.js'

function App() {
  const onSubmit = async e => {
    const BOATLOAD_OF_GAS = Big(3)
      .times(10 ** 13)
      .toFixed()

    const data = await window.contract.sendNear(
      { text: 'thank you' },
      BOATLOAD_OF_GAS,
      Big(1 /* near quantity */)
        .times(10 ** 24)
        .toFixed()
    )
  }

  return (
    <div class="h-full w-full bg-gray-800">
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Wellcome to Nedo - Donate your favorite player
          </h1>
        </div>
        <div class="text-center pb-12">
          {!window?.walletConnection?.isSignedIn() ? (
            <button
              onClick={login}
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-2xl"
            >
              Connect Ⓝ Wallet
            </button>
          ) : (
            <div>
              <h1 class="font-bold text-1xl md:text-4xl lg:text-5xl font-heading text-green-400">
                Hello - {window?.accountId}
              </h1>

              <button
                onClick={logout}
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-2xl mt-8"
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map(e => (
            <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              <div class="mb-8">
                <img
                  class="object-center object-cover h-50 w-36"
                  src={e?.image}
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-white font-bold mb-2">{e?.name}</p>
                {window?.walletConnection?.isSignedIn() && (
                  <button
                    onClick={onSubmit}
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-2xl mt-8"
                  >
                    Donate 1 Ⓝ
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
