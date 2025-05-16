'use client'
import {useRouter} from 'next/navigation'
import React, {useEffect} from 'react'

import {SidebarProvider} from '@/components/ui/sidebar'

import AppHeader from '../_components/AppHeader'
import {AppSidebar} from '../_components/AppSidebar'
import {useAuthContext} from '../provider'

function DashboardProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!user?.user && user.user) return router.replace('/')

    user?.user && checkUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const checkUser = async () => {
    // const result = await axios.post('/api/user', {
    //   userName: user?.user?.displayName,
    //   userEmail: user?.user?.email,
    // })
    console.log(user)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <AppHeader />
        {/* <SidebarTrigger /> */}
        <div className='p-10'>{children}</div>
      </main>
    </SidebarProvider>
  )
}

export default DashboardProvider
