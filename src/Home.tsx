import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import About from "./components/About";
import Projects from './components/Projects';
import Footer from "./components/Footer";

const Home = () => {
  const controlsAbout = useAnimation();
  const controlsProjects = useAnimation();
  const controlsFooter = useAnimation();

  const [refAbout, inViewAbout] = useInView({ triggerOnce: true });
  const [refProjects, inViewProjects] = useInView({ triggerOnce: true });
  const [refFooter, inViewFooter] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inViewAbout) {
      controlsAbout.start('visible').then(() => {
        controlsProjects.start('visible');
      });
    }
  }, [controlsAbout, inViewAbout]);

  useEffect(() => {
    if (inViewProjects) {
      controlsProjects.start('visible').then(() => {
        controlsFooter.start('visible');
      });
    }
  }, [controlsProjects, inViewProjects]);

  useEffect(() => {
    if (inViewFooter) {
      controlsFooter.start('visible');
    }
  }, [controlsFooter, inViewFooter]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
      <div className="min-h-screen bg-gradient-to-tl from-[#09203F] to-[#537895] flex flex-col justify-center items-center">
        <div className="pt-16 w-full flex flex-col items-center mt-40">
          <motion.div ref={refAbout} initial="hidden" animate={controlsAbout} variants={variants}>
            <About />
          </motion.div>
          
          <motion.div ref={refProjects} initial="hidden" animate={controlsProjects} variants={variants}>
            <Projects />
          </motion.div>

          <motion.div ref={refFooter} initial="hidden" animate={controlsFooter} variants={variants}>
            <Footer />
          </motion.div>
        </div>
      </div>
  );
}

export default Home;
