const Header = () => {

  return (

    <header className="bg-[#3a6186] p-4 w-full flex justify-center space-x-8 fixed top-0 left-0 right-0 shadow-lg">
        <a href="#about" className="text-white hover:underline">About</a>
        <a href="#projects" className="text-white hover:underline">Projects</a>
        <a href="#contact" className="text-white hover:underline">Contact</a>
    </header>

  );

}

export default Header