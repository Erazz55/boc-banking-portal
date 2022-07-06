import { SideNavigation } from "../../components/cards/SideNavigation";
import Navigation from "../../components/navigation/Navigation";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
    return(
        <>
        <Navigation/>
        <SideNavigation/>
        </>
    );

}

export default Dashboard;