import { View, Text, ImageBackground, Dimensions, TouchableOpacity, FlatList } from "react-native"
import { mockWords, Word } from "../../types/Word"
import { useEffect } from "react"
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useWordContext } from "../../store/context/WordContext";

const { width, height } = Dimensions.get('window');


const LearnWordsScreen = () => {

    //     useEffect(()=>{
    // console.log(mockWords)
    //     },[])

    const gridButton = (): void => {
        //TODO: i will fill this func. later
        console.log("ishaaaak")
    }

    const renderItem = (item: Word) => {
        return (
            <View style={{ width, height, justifyContent: "center" }}>
                <View style={{ alignItems: "center", }}>
                    <Text style={{ marginBottom: height * 2 / 100, fontSize: 36, fontWeight: 'bold', color: '#fff' }}>{item.text}</Text>
                    <Text style={{ marginBottom: height * 2 / 100, fontSize: 20, color: '#fff', }}>{item.pronunciation}</Text>
                    <Text style={{ marginBottom: height * 2 / 100, fontSize: 16, color: '#fff', }}>{item.meaning}</Text>
                    <Text style={{ marginBottom: height * 2 / 100, fontSize: 14, color: '#fff', fontStyle: 'italic', }}>{item.exampleSentence}</Text>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, }}>
                    <TouchableOpacity>
                        <Feather name="share" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="volume-2" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>useWordCont}>
                        <Ionicons name="heart-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="bookmark-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>



            </View>
        )
    }



    return (
        <ImageBackground
            source={require("../../assets/1.png")}
            resizeMode="cover"
            style={{ flex: 1, justifyContent: "center" }}
        >
            <TouchableOpacity style={{ backgroundColor: '#00000070', padding: 12, borderRadius: 30, position: "absolute", top: 40, right: 20 }}
                onPress={() => { gridButton() }}
            >
                <Feather name="grid" size={20} color="white" />
            </TouchableOpacity>


            <FlatList
  data={mockWords}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => renderItem(item)}
  pagingEnabled
  snapToAlignment="start"
  decelerationRate="fast"
  showsVerticalScrollIndicator={false}
  bounces={false}
  style={{ flex: 1 }}
/>


        </ImageBackground>
    )
}

export default LearnWordsScreen


