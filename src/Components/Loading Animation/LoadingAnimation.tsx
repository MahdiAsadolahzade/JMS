import { useAppStore } from "../../appStore";
import "./LoadingAnimation.css"

const LoadingAnimation = () => {
    const { darkMode } = useAppStore();
  return (
    <div className="dots">
    <div className={`dot before ${darkMode ? "dark-mode" : ""}`}></div>
    <div className={`dot after ${darkMode ? "dark-mode" : ""}`}></div>
  </div>
  );
};

export default LoadingAnimation;
