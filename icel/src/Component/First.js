import React from 'react'

const First = ({BUTTONYES}) => {
  return (
    <div className='w-full h-screen'>
      <div className="lg:hidden flex justify-center align-middle pt-40 text-2xl font-semibold">
      Buka di Laptop dong biar lebih asik hehehe. Masa buka di hp/ipad cell. 
      </div>
      <div className='hidden lg:flex flex-col p-48 text-3xl'>
        <div className='flex justify-center align-middle mx-20 text-center'>
        Hi icel, gw suka sama lu. Lu mau gak jadi pacar gw. Ditekan ya buttonnya ada lanjutannya soalnya hehe
        </div>
        <div className='flex justify-center align-middle gap-32 mt-10'>
          <button to="mau" className='bg-blue-400 px-5 py-2 rounded-xl ' onClick={() => BUTTONYES(true)} >
          YES
          </button>
          <button to="mau" className='bg-blue-400 px-5 py-2 rounded-xl ' onClick={() => BUTTONYES(true)}>
          YES
          </button>
        </div>
      </div>
    </div>
  )
}

export default First