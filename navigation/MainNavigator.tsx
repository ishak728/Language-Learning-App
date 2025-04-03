import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Splashcreen from "../screens/splash/SplashScreen"
import SignIncreen from "../screens/auth/SignInScreen"
import SignUpcreen from "../screens/auth/SignUpScreen"
import TabNavigator from "./TabNavigator"

const MainStack=createNativeStackNavigator()
const MainNavigator=()=>{
    return(
        <MainStack.Navigator initialRouteName="TabNavigator" screenOptions={{headerShown:false}}>
            <MainStack.Screen name="Splash" component={Splashcreen}/>
            <MainStack.Screen name="SignIn" component={SignIncreen}/>
            <MainStack.Screen name="SignOut" component={SignUpcreen}/>
            <MainStack.Screen name="TabNavigator" component={TabNavigator}/>
        </MainStack.Navigator>
    )
}

export default MainNavigator