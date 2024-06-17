import About from "./component/layout/About";
import Footer from "./component/layout/Footer";
import Hero from "./component/layout/Hero";
import Navbar from "./component/layout/Navbar";
import Qualification from "./component/layout/Qualification";
import Skills from "./component/layout/Skills";
import './globals.css'
import BurgerMenu from "./component/layout/menu/BurgerMenu";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";
import Modal from "./component/layout/Modal";



export default function App() {
  return (
    <GlobalStateProvider >
      <Navbar />
      <Modal />
      <BurgerMenu />
      <Hero />
      <About />
      <Qualification />
      <Skills />
      <Footer />
    </GlobalStateProvider>
  );
}