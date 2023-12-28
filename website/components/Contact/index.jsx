import React from 'react'
import Form from '../Form'

export default function Contact() {
  return (
    <div className="w-full lg:h-[736px] h-[600px]">
        <div className="w-full h-full flex flex-row justify-center items-center place-content-center">
            <div className="md:w-2/4 w-3/4">
              <Form />
            </div>
        </div>
    </div>
  )
}