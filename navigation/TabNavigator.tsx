import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LearnWordsScreen from "../screens/learnWords/LearnWordsScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ReadStoriesScreen from "../screens/readStories/ReadStoriesScreen";
import SpeakWithAIScreen from "../screens/speakWithAI/SpeakWithAIScreen";
import ExercisesScreen from "../screens/exercises/ExercisesScreen";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";



const Tab = createBottomTabNavigator()


const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'transparent', // Make it clear
                position: 'absolute',           // Float over content
                borderTopWidth: 0,              // Remove shadow line
                elevation: 0,                   // Android shadow

            },
        }} initialRouteName="LearnWordsScreen">
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
                tabBarIcon: ({ }) => (
                    <Ionicons name="home-outline" size={25} color={"#ffff"} />
                ),
            }} />
            <Tab.Screen name="ReadStoriesScreen" component={ReadStoriesScreen} options={{
                tabBarIcon: ({ }) => (
                    <Ionicons name="book-outline" size={25} color={"#ffff"} />
                ),
            }} />
            <Tab.Screen name="LearnWordsScreen" component={LearnWordsScreen} options={{
                tabBarIcon: ({ }) => (
                    <Ionicons name="language-outline" size={25} color={"#ffff"} />
                ),
            }} />
            <Tab.Screen name="SpeakWithAIScreen" component={SpeakWithAIScreen} options={{
                tabBarIcon: ({ }) => (
                    <Ionicons name="chatbubble-ellipses-outline" size={25} color={"#ffff"} />
                ),
            }} />
            <Tab.Screen name="ExercisesScreen" component={ExercisesScreen} options={{
                tabBarIcon: ({ }) => (
                    <MaterialIcons name="school" size={25} color={"#ffff"} />
                ),
            }} />

        </Tab.Navigator>
    )
}

export default TabNavigator