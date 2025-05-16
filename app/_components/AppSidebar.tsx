'use client'
import {CircleDollarSign, Home, Paintbrush} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu} from '@/components/ui/sidebar'
import {cn} from '@/lib/utils'

const items = [
  {
    title: 'Workspace',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Design',
    url: '/designs',
    icon: Paintbrush,
  },
  {
    title: 'Credits',
    url: '/credits',
    icon: CircleDollarSign,
  },
]

export function AppSidebar() {
  const path = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className='p-4'>
          <Image src={'/logo.svg'} alt='logo' width={200} height={200} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className='mt-1'>
              {items.map((item, index) => (
                <Link href={item.url} key={index} className={cn('flex items-center gap-2 rounded-lg p-2 text-lg hover:bg-gray-100', path === item.url && 'bg-gray-200 font-bold')}>
                  <item.icon className='h-5 w-5' />
                  <span>{item.title}</span>
                </Link>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <h2 className='p-2 text-sm text-gray-400'>Nextjs App</h2>
      </SidebarFooter>
    </Sidebar>
  )
}
