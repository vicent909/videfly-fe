import { Cancel } from '@/assets'
import React from 'react'

export default function ImageDeleteBtn() {
  return (
    <div className='bg-bg-main h-fit w-fit rounded-full -ml-4 -mt-1 p-0.5 cursor-pointer' onClick={() => alert('click')}>
        <Cancel />
    </div>
  )
}
