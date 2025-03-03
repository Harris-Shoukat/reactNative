import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Getapi = () => {

    const[apiData, setApiData] = useState([])

    useEffect(() => {
        axios.get('http://10.0.2.2:3000/users').then((result)=>{
            // console.log(result.data);
            setApiData(result.data);
        })
    },[]);




  return (
    <View>
      <Text style={{fontSize:20, textAlign:'center', marginVertical:10}}>Getapi</Text>
        {
            apiData.map((item)=>(
                <Text key={item.id} style={{marginHorizontal:10, fontSize:20,  marginVertical:10}}>{item.name}</Text>
            ))
        }
    </View>
  )
}

export default Getapi

const styles = StyleSheet.create({})