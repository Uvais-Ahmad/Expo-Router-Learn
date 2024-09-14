import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FlatList } from 'react-native'

const Register = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* <FlatList 
                data={[1,2,3,4,5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
                renderItem={({item}) => <View style={{height: 30, width: '80%', borderWidth:1, borderColor}}>

                </View>}
                keyExtractor={(item) => item.toString()}
            /> */}
        <Link href={"profile"} style={{color:'green'}}>Go to Profile</Link>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({})