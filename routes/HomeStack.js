import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import GetStarted from "../screens/getStarted";
import Login from "../screens/login";
import HomePage from "../screens/HomePage";
import PreAdmission from "../screens/PreAdmission";
import PostAdmission from "../screens/PostAdmission";
import YourStay from "../screens/YourStay";

const screens = {
    GetStarted: {
        screen: GetStarted
    },
    Login: {
        screen: Login
    },
    HomePage: {
        screen: HomePage
    },
    PreAdmission: {
        screen: PreAdmission
    },
    PostAdmission: {
        screen: PostAdmission
    },
    YourStay: {
        screen: YourStay
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);