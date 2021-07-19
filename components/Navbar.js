import Link from 'next/link'
import navStyles from '../styles/Navbar.module.css'

export default function Navbar() {
   return (
      <nav className={navStyles.navbar}>
         <h1>
            <a className={navStyles.title}>Linux Jockey</a>
         </h1>
         <p className={navStyles.description}>Weblog de informática e IT</p>
         <ul className={navStyles.menu}>
            <li>
               <Link href='/'>
                  Inicio
               </Link>
            </li>
            <li>
               <Link href='/about'>
                  Acerca de 
               </Link>
            </li>
         </ul>
      </nav>
   )
}
