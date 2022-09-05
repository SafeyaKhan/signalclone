import { StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect   } from 'react'
import { Avatar, ListItem } from 'react-native-elements'
import { db } from '../../firebase'
const CustomListItem = ({ id , chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('chats').doc(id).collection('messages')
    .orderBy('timestamp','desc').onSnapshot(snapshot => setChatMessages(snapshot.docs.map(doc => doc.data())))
    return unsubscribe
  },[])

  return (
    <ListItem onPress={() => enterChat(id,chatName)} key={id} bottomDivider>
       <Avatar rounded source={{uri : chatMessages?.[0]?.photoURL ||  "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png" }}/>
        {/* <Avatar rounded source={{ uri:"https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1656592402~hmac=a9fd4ac787ca0699fe8147c47f6ac225 "}}/> */}
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight : "800"}}>{chatName}</ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">{chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}</ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>

  )
}

export default CustomListItem

const styles = StyleSheet.create({})

