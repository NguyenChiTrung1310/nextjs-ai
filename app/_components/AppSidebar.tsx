import {Calendar, Home, Inbox, Search, Settings} from 'lucide-react'
import Image from 'next/image'

import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu} from '@/components/ui/sidebar'

const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className='p-4'>
          <Image src={'./logo.svg'} alt='logo' width={100} height={100} className='h-full w-full' />
          <h2 className='text-center text-sm text-gray-400'>Build Awesome</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className='mt-5'>
              {items.map((item, index) => (
                // <SidebarMenuItem key={item.title} className='p-2'>
                //     <SidebarMenuButton asChild className=''>
                <a href={item.url} key={index} className='flex items-center gap-2 rounded-lg p-2 text-lg hover:bg-gray-100'>
                  <item.icon className='h-5 w-5' />
                  <span>{item.title}</span>
                </a>
                //     </SidebarMenuButton>
                // </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <h2 className='p-2 text-sm text-gray-400'>Copyright @Tubeguruji</h2>
      </SidebarFooter>
    </Sidebar>
  )
}
