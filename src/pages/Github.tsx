import Header from "../components/Header";
import Repos from "../components/Repos";

const Github =() => {

  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#09203F] to-[#7490a5] flex flex-col justify-center items-center">

      <Header />

      <div className="pt-16 pb-50 w-full flex flex-col items-center">

        <Repos />

      </div>

    </div>

  );
}

export default Github;
