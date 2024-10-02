
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import React from 'react'

function Login() {
  return (
    <div className='flex gap-4 items-center'>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <p className='text-white cursor-pointer'>Login</p>
        </SignInButton>
      </SignedOut>

    </div>
  )
}

export default Login