import React, { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Menu from '@/components/layout/menu/Menu'
import Footer from '@/components/layout/Footer'

type Props = {
  children: React.ReactNode
  hideFooter?: boolean
}

const PageLayout = ({ children, hideFooter }: Props) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Navbar onMenu={() => setShowMenu(true)} />
      <Menu isOpen={showMenu} onClose={() => setShowMenu(false)} />
      <main className="min-h-screen">{children}</main>
      {!hideFooter && <Footer />}
    </>
  )
}

export default PageLayout
