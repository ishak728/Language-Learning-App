import React, { createContext, useContext, useEffect, useState } from "react";
import { Word } from "../../types/Word";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface WordContextProps{
  savedWordIds: string[];
  favoriteWordIds: string[];
  toggleSave: (word: Word) => void;
  toggleFavorite: (word: Word) => void;
  isSaved: (wordId: string) => boolean;
  isFavorite: (wordId: string) => boolean;
}

const SAVED_KEY = 'SAVED_WORDS';
const FAVORITE_KEY = 'FAVORITE_WORDS';


const WordContext=createContext<WordContextProps | undefined>(undefined)

export const WordProvider:React.FC<{children:React.ReactNode}>=({children})=>{
    const [savedWordIds, setSavedWordIds] = useState<string[]>([]);
    const [favoriteWordIds,setFavoriteWordIds]=useState<string[]>([])

    useEffect(()=>{
loadData()
    },[])

    const loadData=async()=>{

        const savedData=await AsyncStorage.getItem(SAVED_KEY)
        const favoriteData=await AsyncStorage.getItem(FAVORITE_KEY)
        
        if(savedData) setSavedWordIds(JSON.parse(savedData).map((word:Word)=>word.id))
        if(favoriteData) setFavoriteWordIds(JSON.parse(favoriteData).map((word:Word)=>word.id))
    }

    //change to void for type safety
    const toggleSave=async(word:Word)=>{

        const currentData=await AsyncStorage.getItem(SAVED_KEY)
        let currentWords:Word[]=currentData?JSON.parse(currentData):[]
        let updatedSavedIds
        if(savedWordIds.includes(word.id)){
           
           currentWords=currentWords.filter((w:Word)=>w.id!==word.id)
           updatedSavedIds=savedWordIds.filter(id=>id!==word.id)
         
            
        }
        else{
            updatedSavedIds = [...savedWordIds, word.id];
            currentWords.push(word);
      
        }

        setSavedWordIds(updatedSavedIds)
        await AsyncStorage.setItem(SAVED_KEY, JSON.stringify(currentWords));
    }

    const toggleFavorite=async(word:Word)=>{
        const currentData=await AsyncStorage.getItem(FAVORITE_KEY)
        let currentWords:Word[]=currentData?JSON.parse(currentData):[]
        let updatedWordIds
        if(favoriteWordIds.includes(word.id)){
            currentWords=currentWords.filter(w=>w.id!==word.id)
            updatedWordIds=favoriteWordIds.filter(id=>id!==word.id)
        }else{
            currentWords.push(word);
            updatedWordIds = [...favoriteWordIds, word.id];

        }
        await AsyncStorage.setItem(FAVORITE_KEY,JSON.stringify(currentWords))
        setFavoriteWordIds(updatedWordIds)
    }

    const isSaved=(wordId:string)=>savedWordIds.includes(wordId)
    const isFavorite=(wordId:string)=>favoriteWordIds.includes(wordId)



    return(
       <WordContext.Provider value={{ savedWordIds, favoriteWordIds, toggleSave, toggleFavorite, isSaved,isFavorite }}>
{children}
       </WordContext.Provider>
    )
}

export const useWordContext=()=>{
    const context=useContext(WordContext)
    if(!context){
        throw new Error("word context error")
    }
    
    return context
}


 