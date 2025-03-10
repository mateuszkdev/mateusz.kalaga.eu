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

    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const projects = data.filter((x: any) => !x.fork).map((repo: any) => {
        return (
            <div key={repo.id} className={`bg-gradient-to-b from-[#141e30]  to-[#243b55] p-4 rounded-lg shadow-md w-full`}>
                <h3 className="text-xl font-bold mb-2 text-[#8cabde]">{repo.name}</h3>
                <a className="text-gray-300">{repo.description ? repo.description : 'No description'}</a>
                <p className="text-gray-300"> <a className='font-bold'> Since: </a> {repo.created_at.split('T')[0].split('-').reverse().join('.')} {repo.created_at.split('T')[1].replace('Z', '')} </p>
                <p className="text-gray-300"> <a className='font-bold'> Language: </a> {repo.language ? repo.language : 'Unknown'} </p>
                <p className="text-gray-300">
                    <a className='font-bold'> Last commit: </a> {Math.floor((new Date().getTime() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60 * 24)) == 0 ? 
                    `${Math.floor((new Date().getTime() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60))} hours ago` : 
                    `${Math.floor((new Date().getTime() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60 * 24))} days ago`} 
                </p>
            </div>
        )
    });

    return (

        <div id="projects" className="bg-[#243b55] bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-450 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Projects</h2>
            <div className="space-y-8">
            <div className="flex flex-col space-y-4 max-w-2xl mx-auto">

                {projects}

            </div>
            </div>
        </div>
  
    );
  
  }
  
export default Projects


