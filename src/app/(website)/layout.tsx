import React from 'react'

const LayoutWebsite = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
    </div>
  )
}

export default LayoutWebsite