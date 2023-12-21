export default function Home() {
    return (
      <div className="flex flex-col h-screen w-full bg-cover bg-no-repeat bg-center bg-opacity-40 bg-[url('./images/weldingpic.jpg')]">
        {/* Content */}
        <div className="flex-grow flex justify-center items-center">
          {/* Centered Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-1/2 lg:w-2/5 h-3/5 md:h-1/2 rounded-lg shadow-lg overflow-hidden">
            {/* First Column */}
            <div className="grid grid-rows-2 col-span-1 bg-opacity-50 bg-black bg-blend-overlay">
              {/* Logo Section */}
              <div className="flex justify-center items-center p-4">
                <h1 className="text-4xl font-bold text-white">Under Construction</h1>
              </div>
              {/* Contact Info and Socials Section */}
              <div className="flex justify-center items-center p-4">
                <p className="text-white">Contact info and socials</p>
              </div>
            </div>
  
            {/* Second Column */}
            <div className="hidden md:block relative col-span-1">
              {/* Background Image and Countdown */}
              <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('./images/ComingSoon.png')]">
                {/* Countdown */}
                <div className="flex justify-center items-center h-full">
                  <div className="text-white text-4xl">
                    {/* Countdown Components */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="p-4 bg-black text-white text-center">
          © 2023 Your Company Name
        </footer>
      </div>
    )
  }
  