import React from 'react'

const NotFound = () => {
  return (
   <div className='flex flex-col text-center items-center min-h-screen justify-center'> 
      <img src="404_NotFound.png" alt="not found" className='w-96 mb-6 max-w-full' />
      <p className=' font-semibold text-xl'>Bạn đang đi vào vùng cấm !!!</p>
      <a href="/" className='px-6 py-3 shadow-md inline-block text-white mt-10 bg-primary transition rounded-2xl hover:bg-primary-dark '>Quay lại trang chủ</a>
   </div>
  )
}

export default NotFound
