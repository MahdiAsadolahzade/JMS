import { useAppStore } from "../../appStore";

import { RxDashboard } from "react-icons/rx";
interface DashboardBarProps {}

const DashboardBar: React.FC<DashboardBarProps> = ({}) => {
  const { language } = useAppStore();

  return (
    <span className="flex flex-col justify-center items-center">
      <RxDashboard />

      {language === "English" && <span className=" ">Dashboard</span>}
      {language === "Farsi" && <span className="font-bold ">داشبورد</span>}
    </span>
  );
};

export default DashboardBar;
