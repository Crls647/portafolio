import Navbar from "./Navbar"
import Head from "next/head" 
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import NProgress from 'nprogress'

const Layout = ({ children }) => {
    
    const router = useRouter();
    
    useEffect(() => {
        
        const handleRouteChange = url => {
            console.log(url)
            NProgress.start();
        }
        router.events.on('routerChangeStart', handleRouteChange)

        router.events.on('routerChangeComplete', () => NProgress.done());

        return () => {
            router.events.off('routerChangeStart', handleRouteChange)
        }

    }, [])

    return (
        <>
        <Navbar />

        <main className="container py-4">
            {children}    
        </main>

        <footer className="bg-dark text-light text-center">
            <div className="container p-4">
                <h1>&copy; Portafolio de Carlos Yucra </h1>
                <p>2000 - {new Date().getFullYear()}</p>
                <p>Todos los derechos reservados</p>
                
            </div>
            
        </footer>
    </>
    )
}

export default Layout;