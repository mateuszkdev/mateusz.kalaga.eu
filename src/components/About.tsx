const About = () => {

    return (

        <div id="about" className="bg-[#243b55] bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-2xl mt-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-white">Mateusz Kalaga</h1>
            <p className="text-gray-300 mb-4 text-center"> Node.js Software Developer</p>

            <div className="flex justify-center space-x-4">
                <a href="https://github.com/mateuszkdev" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    GitHub
                    </span>
                </a>

                <a href="https://github.com/mateuszkdev" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Discord
                    </span>
                </a>
                
            </div>

        </div>
  
    );
  
  }
  
export default About

