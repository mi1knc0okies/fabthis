import Logo from './images/FABThis_sm.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen bg-cover bg-no-repeat bg-center bg-opacity-40 bg-[url('./images/weldingpic.jpg')]">
        {/* Info Box */}
        <div className="flex flex-grow justify-center items-center">
          {/* Centered Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 lg:w-1/2 h-3/4 md:h-1/2 rounded-lg shadow-lg overflow-hidden">
            {/* First Column */}
            <div className="grid grid-rows-2 col-span-1 bg-opacity-80 bg-black bg-blend-overlay">
              {/* Logo Section */}
              <div className="flex justify-center items-center p-4">
              <Image src={Logo} alt="FAB This" height={340} width={500} />
              </div>
              {/* Contact Info and Socials Section */}
              <div className="flex justify-center items-center p-4">
                <h1 className='text-primary font'>Crafting the Future: Your Premier Fabrication Destination, Coming Soon! </h1>
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
    <footer className="p-4 bg-black text-white text-center bg-opacity-50 relative grid-span-1">
    <p>© {new Date().getFullYear()} Fluent Innovations</p>
  </footer>
    </div>
    
  )
}
