import React, { Children } from 'react'

const PageWrapper = ({children}: any) => {
  return (
    <>
        <h1>Header</h1>
        {children}
        <h1>footer</h1>
    
    </>
  )
}

export default PageWrapper