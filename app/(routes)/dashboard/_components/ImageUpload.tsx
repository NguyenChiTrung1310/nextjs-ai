'use client'
import axios from 'axios'
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import {CloudUpload, Loader2Icon, WandSparkles, X} from 'lucide-react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import React, {ChangeEvent, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {useAuthContext} from '@/app/provider'
import {Button} from '@/components/ui/button'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {Textarea} from '@/components/ui/textarea'
import {storage} from '@/configs/firebaseConfig'

const AiModelList = [
  {
    name: 'Gemini Google',
    icon: '/google.png',
    modelName: 'google/gemini-2.0-flash-001',
  },
  {
    name: 'llama By Meta',
    icon: '/meta.png',
    modelName: 'google/gemini-2.0-flash-001',
  },
  {
    name: 'Deepkseek',
    icon: '/deepseek.png',
    modelName: 'qwen/qwen-turbo',
  },
]

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const [model, setModel] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState<string>()

  const {user} = useAuthContext()
  const router = useRouter()

  const onChangeUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const imageUrl = URL.createObjectURL(files[0])
      setFile(files[0])
      setPreviewUrl(imageUrl)
    }
  }

  const onConverToCodeButtonClick = async () => {
    if (!file || !model || !description) {
      console.log('Select All Field')
      return
    }
    setLoading(true)
    //Save Image to Firebase
    const fileName = Date.now() + '.png'
    const imageRef = ref(storage, 'Wireframe_To_Code/' + fileName)
    await uploadBytes(imageRef, file).then(() => {
      console.log('Image Uploaded...')
    })

    const imageUrl = await getDownloadURL(imageRef)
    console.log(imageUrl)

    const uid = uuidv4()
    console.log(uid)
    // Save Info To Database
    const result = await axios.post('/api/wireframe-to-code', {
      uid: uid,
      description: description,
      imageUrl: imageUrl,
      model: model,
      email: user?.email,
    })
    if (result.data?.error) {
      console.log('Not Enough credits')
      setLoading(false)
      return
    }
    setLoading(false)
    router.push('/view-code/' + uid)
  }

  return (
    <div className='mt-10'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        {!previewUrl && (
          <div className='flex flex-col items-center justify-center rounded-md border border-dashed p-7 shadow-md'>
            <CloudUpload className='h-10 w-10 text-primary' />
            <h2 className='text-lg font-bold'>Upload Image</h2>

            <p className='mt-2 text-gray-400'>Click Button Select Wireframe Image </p>

            <div className='mt-4 flex w-full justify-center border border-dashed p-5'>
              <label htmlFor='imageSelect'>
                <h2 className='rounded-md bg-blue-100 p-2 px-5 font-bold text-primary'>Select Image</h2>
              </label>
            </div>
            <input type='file' id='imageSelect' className='hidden' multiple={false} onChange={onChangeUpload} />
          </div>
        )}

        {previewUrl && (
          <div className='border border-dashed p-5'>
            <Image src={previewUrl} alt='preview' width={500} height={500} className='h-60 w-full object-contain' />
            <X className='ite flex w-full cursor-pointer justify-end' onClick={() => setPreviewUrl(null)} />
          </div>
        )}

        <div className='rounded-lg border p-7 shadow-md'>
          <h2 className='text-lg font-bold'>Select AI Model</h2>
          <Select onValueChange={(value) => setModel(value)}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select AI Model' />
            </SelectTrigger>
            <SelectContent>
              {AiModelList.map((model, index) => (
                <SelectItem value={model.name} key={index}>
                  <div className='flex items-center gap-2'>
                    <Image src={model.icon} alt={model.name} width={25} height={25} />
                    <h2> {model.name}</h2>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <h2 className='mt-7 text-lg font-bold'>Enter Description about your webpage</h2>
          <Textarea onChange={(event) => setDescription(event?.target.value)} className='mt-3 h-[150px]' placeholder='Write about your web page' />
        </div>
      </div>

      <div className='mt-10 flex items-center justify-center'>
        <Button onClick={onConverToCodeButtonClick} disabled={loading}>
          {loading ? <Loader2Icon className='animate-spin' /> : <WandSparkles />}
          Convert to Code
        </Button>
      </div>
    </div>
  )
}

export default ImageUpload
