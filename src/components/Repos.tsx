import { useEffect, useState } from 'react';

const Projects = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://api.github.com/users/mateuszkdev/repos')
            .then(response => response.json())
            .then(data => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data = data.sort((a: any, b: any) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
                setData(data);

            });

    }, []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const projects = data.filter((x: any) => !x.fork).map((repo: any, i: number) => {
        return (

            <div className={`p-6 border border-gray-200 rounded-lg shadow-sm dark:bg-[#243b55] dark:border-gray-700 ${i % 2 == 0 ? 'md:-translate-x-20' : 'md:translate-x-20'}`} key={repo.id}>

                    <span className="bg-gray-100 text-gray-800 text-xs float-right font-medium inline-flex items-center px-2.5 py-0.5 rounded-sm me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                        
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                            {
                                repo.language ?
                                    <p className="text-gray-300"> <a className='font-bold'> </a> {repo.language} </p> :
                                    <p className="text-gray-300"> <a className='font-bold'> </a> Unknown </p>
                            }
                        </span> 

                        <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                        </svg>

                        {Math.floor((new Date().getTime() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60 * 24)) == 0 ? 
                        `${Math.floor((new Date().getTime() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60))} hours ago` : 
                        `${Math.floor((new Date().getTime() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60 * 24))} days ago`} 
                    
                    </span> 

                <a>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"> {repo.name} </h5>
                    
                </a>

                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    {repo.description ? repo.description : 'No description'}
                </p>

                <a href={repo.html_url} className="inline-flex font-medium items-center text-white hover:underline float-end">

                    <span>View on GitHub</span>

                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>

                </a>

            </div>
        )
    });

    return (

        <div id="projects" className="bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-450 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-white"> Github Public Repos </h2>
            <div className="space-y-8">
            <div className="flex flex-col space-y-4 max-w-2xl mx-auto">

                {projects}

            </div>
            </div>
        </div>
  
    );
  
  }
  
export default Projects;
