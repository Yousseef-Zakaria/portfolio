import './header.css'; 
function HeaderComponent() {
    return(
    <div className="w-[100%] bg-[#0F0715] flex justify-center">
    <header className="text-xl py-6 font-semibold w-[85%] text-white
    justify-between items-center flex">
        <a href="">Youssef.Zakaria@svnu.edu.eg</a>
        <nav className="">
            <ul className="flex justify-center items-center gap-10">
                <li>
                    Projects
                </li>
                <li>
                    Resume
                </li>
                <li>
                    Skills
                </li>
                <li>
                    Contact
                </li>
                <li className="ml-1.5">
                <button className="button">
                    Hire me!
                    <div className="hoverEffect">
                        <div></div>
                    </div>
                </button>
                </li>
            </ul>
        </nav>
    </header>
    </div>
    );
}
export default HeaderComponent;