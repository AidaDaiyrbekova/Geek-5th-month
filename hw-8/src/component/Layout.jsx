import { Link, Outlet } from "react-router-dom"
import style from "./Layout.module.css"

export const Layout = () => {
  return (
   <>
   <header className={style.header}>
    <nav><Link to={"/"}>Home</Link></nav>
    <nav><Link to={"/about"}>About</Link></nav>
    <nav><Link to={"/posts"}>Posts</Link></nav>
   </header>
    <Outlet />

   <footer className={style.footer}> Made by HomeWork © 2025</footer>
   </>
  )
}
