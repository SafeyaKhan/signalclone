import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useLayoutEffect} from 'react'
import { Button, Input } from 'react-native-elements';
import { db } from '../firebase';

const AddChatScreen = ({ navigation }) => {
  const [input,setInput] = useState('');

  useLayoutEffect(() => {
   navigation.setOptions({
    title: "Add a new Chat",
    headerBackTitle: "Chats"
   })
  }, [navigation])

  const createChat = async () => {
    await db.collection("chats")
    .add({
      chatName: input
    })
    .then(() => navigation.goBack())
    .catch(error => alert(error))
  }

  return (
    <View style={{ backgroundColor: 'white',padding: 30,height:'100%'}}>
        <Input value={input} placeholder="Enter a chat name" onChangeText={text => setInput(text)}/>
        <Button  disabled={!input} onPress={createChat} title="Create new Chat"/>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({})