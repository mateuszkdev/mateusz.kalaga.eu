const About = () => {

    return (

        <div id="about" className="bg-[#243b55] bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-2xl mt-8">
            <img src="data:image/png;base64,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" alt="so-so"></img>
            <h1 className="text-3xl font-bold mb-4 text-white w-max flex items-center space-x-4">
                <p className="cursor typewriter-animation">
                    Hello There!
                </p>
            </h1>
            <p className="text-gray-300 mb-4 text-center">
                <a className="p-5">
                    Hi, I'm Mateusz, {new Date().getFullYear() - 2002} year's old seasoned backend developer with {new Date().getFullYear() - 2018} years of experience. My expertise lies in backend systems using mainly node/deno and js/ts but I'm not completely unfamiliar with other technologies. I also have a good grasp of fundamental web development.
                </a>
            </p>

            <div className="flex justify-center space-x-4">
                <a href="https://github.com/mateuszkdev" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    GitHub
                    </span>
                </a>

                <a href="https://github.com/mateuszkdev" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Discord
                    </span>
                </a>

                <a href="/repos" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Projects
                    </span>
                </a>
                
            </div>

        </div>
  
    );
  
  }
  
export default About

