import Header from "../components/Header";
import Repos from "../components/Repos";
import Footer from "../components/Footer";

const Github =() => {

  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#09203F] to-[#537895] flex flex-col justify-center items-center">

      <Header />

      <div className="pt-16 w-full flex flex-col items-center">

        <Repos />

        <Footer />

      </div>

    </div>

  );
}

export default Github;
