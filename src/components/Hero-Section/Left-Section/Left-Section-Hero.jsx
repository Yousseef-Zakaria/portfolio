import './Left-Section.css'

const LeftSection = () => {
  return (
    <div className='z-10 p-5 md:p-0'>
      <h2 className="text-[2.25rem] text-for-query text-white font-bold">I am Youssef</h2>
      <h1 className="text-4xl md:mt-5 pb-3 text-for-query font-bold text-gradient-purple">
        Full-Stack Developer +<br></br> Software Engineer
      </h1>
      <h3 className="text-[#dddddd] font-light text-[1.25rem] text-balance mt-5">
        Transforming ideas into seamless, user-friendly web solutions <br></br>
        that solve real-world challenges.
      </h3>
      <div className='icons flex gap-3 items-center mt-5'>
        <a href="./assets/files/Youssef-CV.pdf" download="Youssef Zakaria CV.pdf"
          class="cursor-pointer flex justify-between bg-transparent px-3 py-2 border-[#8750F7] border-1 rounded-full text-white hover:bg-[#8750F7] hover:border-transparent duration-500  font-mono w-[150px]">
          Downalod CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            ></path>
          </svg>
        </a>

        <a href="https://www.facebook.com/profile.php?id=100010924809273" className='links'>
          <img src="/assets/images/facebook-app-symbol.png" loading='lazy' alt="Facebook" className='w-[25px]'/>
        </a>

        <a href="https://www.linkedin.com/in/youssef-zakaria-3ab759326/" className='links'>
          <img src="/assets/images/linkedin.png" loading='lazy' alt="LinkedIn" className='w-[25px]'/>
        </a>

        <a href="https://github.com/Yousseef-Zakaria" className='links'>
          <img src="/assets/images/github.png" loading='lazy' alt="Github" className='w-[25px]'/>
        </a>

      </div>
    </div>
  );
};
export default LeftSection;