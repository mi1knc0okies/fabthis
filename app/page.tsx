export default function Home() {
  return (
      <div className="relative h-screen w-full inset-0 bg-cover bg-no-repeat bg-center bg-opacity-40 bg-[url('./images/weldingpic.jpg')] ">
        {/* Info Box */}
        <div className="flex justify-center items-center h-screen">
          {/* Centered Box */}
          <div className="grid grid-cols-2 w-1/2 h-1/2 rounded-lg shadow-lg overflow-hidden">
            {/* First Column */}
            <div className="grid grid-rows-2 col-span-1 bg-opacity-80 bg-black bg-blend-overlay">
              {/* Logo Section */}
              <div className="flex justify-center items-center p-4">
                <h1 className="text-4xl font-bold text-primary">Under Construction</h1>
              </div>
              {/* Contact Info and Socials Section */}
              <div className="flex justify-center items-center p-4">
                Contact info and socials
              </div>
            </div>

          {/* Second Column */}
          <div className="relative col-span-1">
            {/* Background Image and Countdown */}
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('./images/ComingSoon.png')]">
              {/* Countdown */}
              <div className="flex justify-center h-full items-end py-1">
                <div className="text-neutral text-4xl">
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                      <span style={{"--value":30}}></span>
                    </span>
                    days
                  </div> 
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                      <span style={{"--value":18}}></span>
                    </span>
                    hours
                  </div> 
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                      <span style={{"--value":24}}></span>
                    </span>
                    min
                  </div> 
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                      <span style={{"--value":51}}></span>
                    </span>
                    sec
                  </div>
                  </div>
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
