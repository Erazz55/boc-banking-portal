import RegisterCard from "../../components/cards/RegisterCard";
import LandingPageNavigation from "../../components/navigation/LandingPageNavigation";

export interface RegisterProps {}

const Register: React.FC<RegisterProps> = (props) => {
    return(
        <>
        <LandingPageNavigation/>
        <RegisterCard/>
        </>
    );

}

export default Register;