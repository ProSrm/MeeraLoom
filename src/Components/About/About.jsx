import logo from "../../assets/contact-us.svg"
const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center">

        <div className="flex-1 space-y-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About MeeraLoom: Your Partner in Tech Excellence</h1>
            <h2 className="text-2xl text-gray-600 mb-4">Driving Change Through Technology</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              we believe in harnessing the power of technology to create innovative solutions that drive progress and shape the future. Founded by a group of passionate engineers and entrepreneurs, our mission is to make cutting-edge technology accessible and impactful for businesses and individuals around the world.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Simple & Intuitive</h3>
              <p className="text-gray-600">"Our solutions are designed to be simple, intuitive, and user-friendly, ensuring seamless experiences for everyone."</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Impact</h3>
              <p className="text-gray-600">"Through our innovative solutions, we've helped businesses increase efficiency, reduce costs, and stay ahead of the competition."</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission & Values</h3>
              <p className="text-gray-600">"Our mission is to empower businesses through innovation, and collaboration, delivering solutions that make a difference."</p>
            </div>
          </div>


          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              We're a dedicated team of developers and designers working together to
              create the best task management experience for our users. Our diverse
              backgrounds and shared passion for productivity tools drive us to
              continuously improve and innovate.
            </p>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex-1 max-w-lg w-full">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-auto">

            <rect x="0" y="0" width="800" height="600" fill="#f8f9fa" />
            <circle cx="400" cy="300" r="200" fill="#e9ecef" opacity="0.5" />


            <rect x="200" y="350" width="400" height="20" fill="#495057" />
            <rect x="220" y="370" width="360" height="80" fill="#343a40" />


            <rect x="350" y="250" width="100" height="80" fill="#212529" />
            <rect x="360" y="260" width="80" height="60" fill="#0066cc" />
            <rect x="380" y="330" width="40" height="20" fill="#212529" />
            <rect x="370" y="350" width="60" height="5" fill="#212529" />


            <circle cx="300" cy="280" r="30" fill="#ff922b" />
            <rect x="285" y="310" width="30" height="60" fill="#ff922b" />
            <rect x="275" y="320" width="10" height="40" fill="#ff922b" />
            <rect x="315" y="320" width="10" height="40" fill="#ff922b" />


            <circle cx="500" cy="280" r="30" fill="#20c997" />
            <rect x="485" y="310" width="30" height="60" fill="#20c997" />
            <rect x="475" y="320" width="10" height="40" fill="#20c997" />
            <rect x="515" y="320" width="10" height="40" fill="#20c997" />


            <circle cx="150" cy="150" r="50" fill="#339af0" opacity="0.2" />
            <circle cx="650" cy="450" r="70" fill="#ff6b6b" opacity="0.2" />
            <rect x="100" y="500" width="100" height="10" fill="#495057" opacity="0.3" />
            <rect x="600" y="200" width="100" height="10" fill="#495057" opacity="0.3" />
          </svg> */}
          <img src={logo} alt="Logo" viewBox="0 0 800 600" className="w-full h-auto" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-auto">

            <rect x="0" y="0" width="800" height="600" fill="#f8f9fa" />
            <circle cx="400" cy="300" r="200" fill="#e9ecef" opacity="0.5" />


            <circle cx="150" cy="150" r="50" fill="#339af0" opacity="0.2" />
            <circle cx="650" cy="450" r="70" fill="#ff6b6b" opacity="0.2" />
            <rect x="100" y="500" width="100" height="10" fill="#495057" opacity="0.3" />
            <rect x="600" y="200" width="100" height="10" fill="#495057" opacity="0.3" />

            <text x="200" y="100" fontSize="80" fill="#333" fontFamily="Arial">ABOUT US</text>


          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
