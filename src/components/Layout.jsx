import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
     <Header/>
        <main className="px-12 h-screen">
            <Outlet />
        </main>
     <Footer />
    </>
  )
}

export default Layout
