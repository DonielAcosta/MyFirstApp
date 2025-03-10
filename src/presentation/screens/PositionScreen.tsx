import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.title}>PositionScreen</Text> */}
        <View style={styles.purpleBox} />
        <View style={styles.orangeBox} />
        <View style={styles.greenBox} />


    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#28C4D9',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    purpleBox: {
        width:100,
        height:100,
        backgroundColor:'#5856d6',
        borderWidth:10,
        borderColor:'white',
        // position: 'absolute',
        // top:0,
    },
    orangeBox: {
        width:100,
        height:100,
        backgroundColor:'#F0A23B',
        borderWidth:10,
        borderColor:'white',
        top:0,
        left:0,
    },
    greenBox: {
        width:100,
        height:100,
        backgroundColor:'green',
        borderWidth:10,
        borderColor:'white',
        top:0,
        left:0,
    },
});
