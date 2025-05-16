import React from 'react'

import {SidebarTrigger} from '@/components/ui/sidebar'

import ProfileAvatar from './ProfileAvatar'

function AppHeader() {
  return (
    <div className='flex w-full items-center justify-between p-4 shadow-sm'>
      <SidebarTrigger />
      <ProfileAvatar />
    </div>
  )
}

export default AppHeader
