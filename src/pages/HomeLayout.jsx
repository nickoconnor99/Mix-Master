import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
const HomeLayout = () => {
  return (
    <div>
    <Navbar></Navbar>
    <section className="page"><Outlet></Outlet>
    </section>
    </div>
  ) 
}

export default HomeLayout
