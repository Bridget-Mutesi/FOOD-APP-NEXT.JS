import Image from 'next/image'
import Navigation from './components/navigation/page';
import About from "./components/home/home";
import Service from "./components/service/service";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";


export default function Home() {
  return (
    <main>
      <div>
        <Navigation/>
        <About/>
        <Service/>

        <Menu/>

        <Footer/>
      
       
      </div>
    </main>
  )
}
