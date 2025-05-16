'use client'
import {signOut} from 'firebase/auth'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

import {Button} from '@/components/ui/button'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {auth} from '@/configs/firebaseConfig'

import {useAuthContext} from '../provider'

function ProfileAvatar() {
  const user = useAuthContext()
  const router = useRouter()
  const onButtonPress = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.replace('/')
      })
      .catch(() => {
        // An error happened.
      })
  }
  return (
    <div>
      <Popover>
        <PopoverTrigger>{user?.user?.photoURL && <Image src={user?.user?.photoURL} alt='profile' className='h-[35px] w-[35px] rounded-full' />}</PopoverTrigger>
        <PopoverContent className='mx-w-sm w-[100px]'>
          <Button variant={'ghost'} onClick={onButtonPress} className=''>
            Logout
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ProfileAvatar
