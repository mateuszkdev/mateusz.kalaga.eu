const Footer = () => {

    return (

        <footer className="bg-[#243b55] bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-2xl mt-8">

            <h2 className="text-2xl font-bold mb-4 text-center text-white">Contact</h2>
            <p className="text-gray-300 text-center">You can reach me at <a href="mailto:mateusz@kalaga.eu" className="text-blue-500 hover:underline"> mateusz@kalaga.eu </a></p>
               
            <p className="text-gray-300 text-center"> Mateusz Kalaga © {(new Date().getFullYear() == 2025) ? '2025' : `2025 - ${new Date().getFullYear()}`} </p>

        </footer>

    );
  
  }
  
export default Footer