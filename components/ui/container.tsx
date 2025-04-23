import React from 'react'

export const Container = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <div className='container mx-auto px-4 sm:px-6'>
        {children}
    </div>
  )
}
