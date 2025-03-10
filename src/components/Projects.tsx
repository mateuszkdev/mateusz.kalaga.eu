const projects = [
    { 
        title: "Project 1",     
        description: "Description of project 1."
    },
    { 
        title: "Project 2",     
        description: "Description of project 2."
    },
    { 
        title: "Project 3",     
        description: "Description of project 3."
    },
]

const About = () => {

    return (

        <div id="projects" className="bg-[#243b55] bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-2xl mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Projects</h2>
            <div className="space-y-8">
                <div className="flex flex-col space-y-4">

                    {projects.map((project, index) => (
                        <div key={index} className={`bg-gradient-to-b from-[#141e30]  to-[#243b55] p-4 rounded-lg shadow-md w-full ${index % 2 === 0 ? 'self-start' : 'self-end'}`}>
                            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-300">{project.description}</p>

                        </div>
                    ))}

                </div>
            </div>
        </div>
  
    );
  
  }
  
export default About


