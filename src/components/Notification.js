const { useState, useEffect } = 'react'

const Notification = () => {
  const [messages, useMessage] = useState([])

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
    <div class="grid col-span-1 content-start gap-4">
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
    </div>
  )
}

export default Notification
