import { useAppStore } from "../../appStore";
import JMSLogo from "../../../public/Logo/JMS.svg"; // Import your SVG logo file

const Hero = () => {
  const { darkMode } = useAppStore();

  return (
    <section className={`hero bg-blue-500 text-white `}>
      <div className="container mx-auto text-center">
        {/* Embed the SVG logo directly using JSX */}
        <img
          src={JMSLogo}
          alt="JMS Logo"
          className="w-32 h-32 mb-4" // Adjust the size as needed
        />
        <h1 className="text-4xl font-bold mb-4">Welcome to JMS</h1>
        <p className="text-lg mb-8">Your Journal Management System</p>
        <a href="/search" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
