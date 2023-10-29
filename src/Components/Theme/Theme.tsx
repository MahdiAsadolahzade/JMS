import Switch from "react-switch";
import { useAppStore } from "../../appStore";
import Icons from "../../assets/Icons";

function Theme() {
  const { darkMode, toggleDarkMode } = useAppStore();

  return (
    <div className="theme-button flex justify-center items-center">
      <Switch
        onChange={toggleDarkMode}
        checked={darkMode}
        onColor="#007bff"
        onHandleColor="#ffffff"
        offColor="#111827"
        offHandleColor="#ffffff"
        uncheckedIcon={Icons.darkmode}
        checkedIcon={Icons.lightmode} 
        height={30}
        width={60}
      />
    </div>
  );
}

export default Theme;
