import About from "./components/About";
import Projects from './components/Projects';
import Footer from "./components/Footer";

const Home =() => {

  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#09203F] to-[#537895] flex flex-col justify-center items-center">

      <div className="pt-16 w-full flex flex-col items-center">

        <About />
        
        <Projects />

        <Footer />

      </div>

    </div>

  );
}

export default Home;
