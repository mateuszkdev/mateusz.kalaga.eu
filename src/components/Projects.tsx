/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import data from '../projects';
import { useEffect, useRef } from 'react';

interface Project {
    archived: boolean;
    technologies: string[];
    name: string;
    description: string;
    github: string;
    image?: string;
}

const Projects = () => {
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                        entry.target.classList.remove('opacity-0');
                    } else {
                        entry.target.classList.add('opacity-0');
                    }
                });
            },
            { threshold: 0.1 }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    const projects = data.map((project: Project, i: number) => {
        return (
            <div
                className={`p-4 md:p-10 flex flex-col md:flex-row ${i % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start md:justify-between min-w-full md:min-w-[1200px] opacity-0 transition-opacity duration-500`}
                key={i}
                ref={(el) => {
                    projectRefs.current[i] = el;
                }}
            >
                <div className="w-full md:w-5/12 bg-[#354e6b] p-4 rounded-md mr-20 transition-transform duration-300 hover:scale-105">
                    {project.archived && (
                        <span className="bg-gray-800 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm border border-gray-100">
                            Archived
                        </span>
                    )}
                    {project.technologies.map((tech: any, index: number) => (
                        <span key={index} className="bg-gradient-to-tl from-[#09203F] to-[#537895] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm border border-orange-100">
                            {tech}
                        </span>
                    ))}
                    <h2 className="text-2xl font-bold mb-4 mt-3">
                        {project.name}
                    </h2>
                    <p className="text-gray-300 mb-6 text-center md:text-left">
                        {project.description}
                    </p>
                    <a href={project.github} className={`inline-flex font-medium items-center text-white hover:underline float-${i % 2 == 0 ? 'start' : 'end'} mr-20`}>
                        <span>View on GitHub</span>
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </a>
                </div>
                <div className="w-full md:w-5/12 max-w-sm bg-[#354e6b] p-4 rounded-md mr-20 transition-transform duration-300 hover:scale-105">
                    <img className="rounded-md border-none" src={project.image ? project.image : 'https://i.imgur.com/k5SyHiV.png'} alt={project.name} />
                </div>
            </div>
        );
    });

    return (
            <div className="bg-[#243b55] mt-10 rounded-2xl text-white mx-auto py-16 px-4 md:px-16 max-w-7xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Projects
                    </h1>
                </div>
                <div className="space-y-12">
                    {projects}
                </div>
            </div>
    );
}

export default Projects;
