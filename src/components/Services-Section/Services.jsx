import './Services.css';
const Services = () => {
    let services = [
        {
            title: "Front-End Development",
            description: "I craft responsive, SEO-optimized, and high-performance user interfaces that are not only visually stunning but also enhance user experience and engagement across all devices.",
        },
        {
            title: "Back-End Development",
            description: "I develop secure, scalable, and efficient back-end systems following industry best practices—ensuring reliability, speed, and smooth integration with front-end applications.",
        },
        {
            title: "Instructor",
            description: "With a passion for teaching, I simplify complex topics in Front-End, Back-End, Computer Science fundamentals, OOP, Data Structures, and Databases—empowering students to build real-world applications with confidence.",
        },
    ];
    return(
        <div className='flex flex-col items-center justify-center w-full'>
            <span className='text-[2.8rem] font-bold text-gradient-purple'>My Quality Services</span>
            <span className='text-[#DDDDDD] '>put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</span>
            <div className='w-[85%] mt-5 flex flex-col items-center'>
                {services.map((service, index) => (
                    <>                    
                    <div className='service-card w-[100%] py-5 flex items-center flex-wrap justify-between custom-bg
                    hover:bg-[#5932A5] transition-all duration-200 ease-in-out'>
                        <span className='text-[1.8rem] font-bold text-white'>
                            <span className='text-[1.8rem] font-bold text-[#8750F7] me-3'>{index+1}</span>
                            {service.title}
                        </span>
                        <span className='text-[#DDDDDD]'>{service.description}</span>
                    </div>
                    <div className="line w-[100%] border-b-1 border-[#512D98]"></div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Services;