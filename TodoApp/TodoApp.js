import React,{useState} from 'react'
import { View,TextInput, Text, StyleSheet,Button,TouchableHighlight} from 'react-native'
import Item from './Item'

export default function TodoApp() {
const [task, settask] = useState('');
const [items, setitems] = useState([]);

const handleAdd=()=>{
setitems([...items,task])
settask(null);
}

  return (
    <View style={styles.conatiner}>
        <Text style={styles.txt}>
            Todo App 
        </Text>
        <TextInput style={styles.input}
        value={task}
        onChangeText={(txt)=>settask(txt)}
        placeholder='Enter item'
        />
        <TouchableHighlight style={styles.btn}
        >
        <Button onPress={handleAdd} title='Add' color='red'></Button>
        </TouchableHighlight>
        {
            items.map((itm,index)=>{
                {
                    return  <Item key={index} task={itm}></Item>}
            })
                
            
        }
       
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        alignItems:'center',
    },
    txt:{
        paddingTop:60,
        fontSize:30,
        fontWeight:'bold',
    },
    input:{
        backgroundColor:'pink',
        width:'80%',
        height:'30',
    },
    btn:{
        width:80,
    }
})
