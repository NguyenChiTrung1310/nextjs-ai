'use client'
import Image from 'next/image'

import Authentication from './_components/Authentication'
import ProfileAvatar from './_components/ProfileAvatar'
import {useAuthContext} from './provider'

export default function Home() {
  // const user = auth?.currentUser;
  // console.log(user)
  const user = useAuthContext()
  console.log(user?.user)
  return (
    <div>
      <header className='z-50 flex w-full flex-wrap border-b border-gray-200 bg-white py-3 text-sm dark:border-neutral-700 dark:bg-neutral-800 sm:flex-nowrap sm:justify-start sm:py-0'>
        <nav className='relative mx-auto w-full max-w-[85rem] p-4 px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8' aria-label='Global'>
          <div className='flex items-center justify-between'>
            {/* <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a> */}
            <div>
              {/* <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> */}
              <Image src={'/logo.svg'} alt='logo' width={150} height={150} />
              {/* </button> */}
            </div>
          </div>
          <div id='navbar-collapse-with-animation' className='hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7'>
              {!user?.user?.email ? (
                <Authentication>
                  <div className='flex items-center gap-x-2 py-2 font-medium text-gray-500 hover:text-blue-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 sm:my-6 sm:ms-4 sm:border-s sm:border-gray-300 sm:py-0 sm:ps-6'>
                    <svg className='size-4 flex-shrink-0' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                      <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                    </svg>
                    Get Started
                  </div>
                </Authentication>
              ) : (
                <ProfileAvatar />
              )}
            </div>
          </div>
        </nav>
      </header>
      <div className="relative overflow-hidden before:absolute before:start-1/2 before:top-0 before:-z-[1] before:size-full before:-translate-x-1/2 before:transform before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-cover before:bg-top before:bg-no-repeat dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
        <div className='mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8'>
          <div className='flex justify-center'>
            <a
              className='inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-1 ps-3 text-sm text-gray-800 transition hover:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-neutral-600'
              href='tubeguruji.com'
              target='_blank'
            >
              TUBEGURUJI Membership - Join Now
              <span className='inline-flex items-center justify-center gap-x-2 rounded-full bg-gray-200 px-2.5 py-1.5 text-sm font-semibold text-gray-600 dark:bg-neutral-700 dark:text-neutral-400'>
                <svg
                  className='size-4 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </span>
            </a>
          </div>

          <div className='mx-auto mt-5 max-w-2xl text-center'>
            <h1 className='block text-4xl font-bold text-gray-800 dark:text-neutral-200 md:text-5xl lg:text-6xl'>
              Build Something
              <span className='bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent'> With NextJs</span>
            </h1>
          </div>

          <div className='mx-auto mt-5 max-w-3xl text-center'>
            <p className='text-lg text-gray-600 dark:text-neutral-400'>
              Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality apps in seconds.
            </p>
          </div>

          <div className='mt-8 flex justify-center gap-3'>
            <a
              className='inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:focus:ring-offset-gray-800'
              href='/dashboard'
            >
              Get started
              <svg
                className='size-4 flex-shrink-0'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m9 18 6-6-6-6' />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <div className='grid items-center gap-2 sm:grid-cols-2 lg:grid-cols-4'>
          <a className='group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-neutral-800 md:p-7' href='#'>
            <div className='flex size-12 items-center justify-center rounded-xl bg-blue-600'>
              <svg
                className='size-6 flex-shrink-0 text-white'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect width='10' height='14' x='3' y='8' rx='2' />
                <path d='M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4' />
                <path d='M8 18h.01' />
              </svg>
            </div>
            <div className='mt-5'>
              <h3 className='text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400'>25+ templates</h3>
              <p className='mt-1 text-gray-600 dark:text-neutral-400'>Responsive, and mobile-first project on the web</p>
              <span className='mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 group-hover:underline'>
                Learn more
                <svg
                  className='size-4 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </span>
            </div>
          </a>

          <a className='group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-neutral-800 md:p-7' href='#'>
            <div className='flex size-12 items-center justify-center rounded-xl bg-blue-600'>
              <svg
                className='size-6 flex-shrink-0 text-white'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M20 7h-9' />
                <path d='M14 17H5' />
                <circle cx='17' cy='17' r='3' />
                <circle cx='7' cy='7' r='3' />
              </svg>
            </div>
            <div className='mt-5'>
              <h3 className='text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400'>Customizable</h3>
              <p className='mt-1 text-gray-600 dark:text-neutral-400'>Components are easily customized and extendable</p>
              <span className='mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 group-hover:underline'>
                Learn more
                <svg
                  className='size-4 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </span>
            </div>
          </a>

          <a className='group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-neutral-800 md:p-7' href='#'>
            <div className='flex size-12 items-center justify-center rounded-xl bg-blue-600'>
              <svg
                className='size-6 flex-shrink-0 text-white'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
                <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
              </svg>
            </div>
            <div className='mt-5'>
              <h3 className='text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400'>Free to Use</h3>
              <p className='mt-1 text-gray-600 dark:text-neutral-400'>Every component and plugin is well documented</p>
              <span className='mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 group-hover:underline'>
                Learn more
                <svg
                  className='size-4 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </span>
            </div>
          </a>

          <a className='group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 dark:hover:bg-neutral-800 md:p-7' href='#'>
            <div className='flex size-12 items-center justify-center rounded-xl bg-blue-600'>
              <svg
                className='size-6 flex-shrink-0 text-white'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z' />
                <path d='M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1' />
              </svg>
            </div>
            <div className='mt-5'>
              <h3 className='text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400'>24/7 Support</h3>
              <p className='mt-1 text-gray-600 dark:text-neutral-400'>Contact us 24 hours a day, 7 days a week</p>
              <span className='mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 group-hover:underline'>
                Learn more
                <svg
                  className='size-4 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
