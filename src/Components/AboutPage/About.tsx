import { useAppStore } from "../../appStore";

const About = () => {
    const {  darkMode } = useAppStore();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            We are a passionate team dedicated to creating innovative solutions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white bg-opacity-20 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to make a difference in the world through innovation and sustainability. We are dedicated to providing high-quality products and exceptional customer service.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-20 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-lg">
              We have a talented and diverse team of professionals working together to achieve our goals. We value creativity, collaboration, and excellence in everything we do.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to Our Company
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We are dedicated to excellence and innovation.
          </p>
        </div>
      </div>

      <div className="mt-10 pb-12 bg-white sm:mt-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://via.placeholder.com/1600x600"
              alt="Company Office"
            />
            <div
              className="absolute inset-0 bg-blue-600 mix-blend-multiply"
            ></div>
          </div>
          <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg shadow-xl overflow-hidden">
              <div className="px-10 py-10 bg-white sm:p-16 sm:pb-10">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="w-24 h-24 rounded-full mx-auto"
                        src="https://via.placeholder.com/200"
                        alt="Team Member"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-center md:mt-0 md:ml-10">
                    <div className="text-3xl font-extrabold text-gray-900">
                      Jane Doe
                    </div>
                    <div className="mt-6 text-base text-gray-500">
                      Senior Vice President
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;







    


