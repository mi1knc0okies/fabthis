export default function Home() {
    return (
      <div className="flex flex-col h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('./images/weldingpic.jpg')]">
        {/* Content */}
        <div className="flex-grow flex justify-center items-center">
          {/* Centered Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 lg:w-1/2 h-3/4 md:h-1/2 rounded-lg shadow-lg overflow-hidden">
            {/* First Column */}
            <div className="grid grid-rows-2 col-span-1 bg-black bg-opacity-50">
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
            <div className="col-span-1 flex flex-col justify-between">
              {/* Countdown */}
              <div className="flex justify-center items-center flex-grow">
                <div className="text-neutral text-4xl">
                                {/* Countdown Components */}
                                
                </div>
              </div>
              {/* Footer */}
              <footer className="p-4 bg-black bg-opacity-20 text-white text-center w-full">
                © 2024 Fluent Innovations
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
  