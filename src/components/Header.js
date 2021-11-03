/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { login, logout } from '../utils'

const Header = () => {
  return (
    <header class="text-gray-100 bg-gray-900 body-font shadow w-full">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a class="mr-5 text-lg font-semibold cursor-pointer border-b border-transparent">
            Home
          </a>
          <a class="mr-5 text-lg font-semibold cursor-pointer border-b border-transparent">
            Recent
          </a>
          <a class="mr-5 text-lg font-semibold cursor-pointer border-b border-transparent">
            Stats
          </a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
          <div class="w-1/2">
            <img
              src="https://source.unsplash.com/ZneH-h-iu-s"
              class="mx-auto w-16 h-16 rounded-full"
            />
          </div>
          <div class="h-full w-1/2 flex flex-col justify-center text-2xl">
            <span class="font-semibold text-white">Banana</span>
            <span class="font-semibold text-white">Cards</span>
          </div>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 ">
          <div class="text-center">
            {!window?.walletConnection?.isSignedIn() ? (
              <button
                onClick={login}
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-xl"
              >
                Connect Ⓝ Wallet
              </button>
            ) : (
              <div>
                <button
                  onClick={logout}
                  class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-xl"
                >
                  Disconnect Wallet
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
