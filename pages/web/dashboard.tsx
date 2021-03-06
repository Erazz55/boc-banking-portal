import { SideNavigation } from "../../components/cards/SideNavigation";
import Navigation from "../../components/navigation/Navigation";
import DashBoardWrapper from "../../layouts/dashboard/DashBoardWrapper";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <>
      <Navigation />
      <div className="flex flex-row">
        <SideNavigation />
        <DashBoardWrapper/>
      </div>
    </>
  );
};

export default Dashboard;
