/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react'
import { data } from './mock'
import { login, logout, getWallet } from './utils'
import Big from 'big.js'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  const [messages, useMessage] = useState([])

  const onSubmit = async e => {
    const BOATLOAD_OF_GAS = Big(3)
      .times(10 ** 13)
      .toFixed()

    await window.contract.addMessage(
      { text: `${window?.accountId} - Donated for - ${e?.name}` },
      BOATLOAD_OF_GAS,
      Big(1 /* near quantity */)
        .times(10 ** 24)
        .toFixed()
    )
  }

  const handleFetchMessage = async () => {
    const data = await window?.contract.getMessages()
    console.log(data)
    useMessage(data)
  }

  useEffect(() => {
    // TODO: don't just fetch once; subscribe!

    handleFetchMessage()
  }, [])

  return (
    <div class="h-full w-full" style={{ backgroundColor: '#ffffff' }}>
      <Header />
      <section class="grid w-full mx-auto sm:px-6 lg:px-8 p-8 justify-center">
        {/* <div class="text-center pb-12">
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-800">
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
                onClick={getWallet}
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-2xl mt-8"
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </div> */}
        <div class="grid grid-cols-4 gap-8 xl:max-w-7xl">
          <div class="grid col-span-4">
            <div class="grid xl:grid-cols-5 gap-6">
              {data?.map(e => (
                // <div class="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
                <div class="w-full border rounded-lg border-gray-300 overflow-hidden flex flex-col items-center">
                  <div class="mb-8">
                    <img
                      class="object-center object-cover h-full w-full"
                      src={e?.image}
                      alt="photo"
                    />
                  </div>
                  <div class="text-center pb-6">
                    <p class="text-xl text-gray-800 font-bold ">{e?.name}</p>
                    {window?.walletConnection?.isSignedIn() && (
                      <button
                        onClick={() => onSubmit(e)}
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg mt-6"
                      >
                        1 NEAR
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div class="grid col-span-1 content-start gap-4">
            <h1 class="font-bold text-3xl font-heading text-gray-800">
              Notification
            </h1>
            {messages?.reverse()?.map(
              e =>
                e?.text &&
                e?.text !== 'thank you' && (
                  <div
                    class={`${
                      window?.accountId === e?.sender
                        ? 'bg-green-500'
                        : 'bg-purple-500'
                    } text-white font-bold py-2 px-4 rounded text-lg`}
                  >
                    <p>{e?.text} </p>
                  </div>
                )
            )}
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default App
