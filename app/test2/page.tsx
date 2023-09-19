"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function page() {
  const [imgsrc, setImgsrc] = useState('')
  const convertToBase64 = (file: File | null) => {
    if(!file) return
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve(reader.result)
        }
        reader.onerror = (err) => {
          reject(err)
        }
    }
  )}

  const toImage = (chars : string) => {
    const base64Data = chars.substr(chars.indexOf(',') + 1)
    const byteCharecters = atob(base64Data)
    const byteNumbers = new Array(byteCharecters.length)
    for(let i = 0; i < byteCharecters.length; i++) {
      byteNumbers[i] = byteCharecters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    let image = new Blob([byteArray], {type: 'image/png'})
    let imageUrl = URL.createObjectURL(image)
    setImgsrc(imageUrl)
    console.log(imageUrl)
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target!.files![0]
    const base64 = await convertToBase64(file) as string
    toImage(base64)
  }



  return (
    <div className="">
        <h1>Page 2</h1>
        <input 
          type='file' 
          aria-label='Image' 
          name='myfile' 
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleChange(e)}
        />
       {imgsrc && <Image width={200} height={40} src={imgsrc} alt='hello'/>}
    </div>
    
  )
}
