import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import { navItems } from '@/config/site'
import React from 'react'

const Home = ({
  children
}: {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar logo={navItems.logo} menu={navItems.menu} auth={navItems.auth} />
        {children}
        <Footer/>
    </div>
  )
}

export default Home;