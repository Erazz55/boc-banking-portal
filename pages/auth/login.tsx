import LoginCard from "../../components/cards/LoginCard";
import LandingPageNavigation from "../../components/navigation/LandingPageNavigation";

export interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
    return(
        <>
        <LandingPageNavigation/>
        <LoginCard/>
        </>
    );

}

export default Login;