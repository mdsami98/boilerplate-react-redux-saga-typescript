import React, { Children } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const PageWrapper = ({children, pageTitle}: any) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
        <h1>Header</h1>
        {children}
        <h1>footer</h1>
    
    </HelmetProvider>
  )
}

export default PageWrapper