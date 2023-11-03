import { useAppStore } from "../../appStore";
import "./LoadingAnimation.css"

const LoadingAnimation = () => {
    const { darkMode } = useAppStore();
  return (
    <div className="w-14 h-14">
      <div className="w-full h-full relative">
        <div className={`absolute inset-0 animate-shapes ${darkMode?"text-teal-500":"text-gray-500"} `}></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
