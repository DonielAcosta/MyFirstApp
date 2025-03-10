import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import {Dimensions} from 'react-native';

// const {width,height} =Dimensions.get('window');
export const DimensionScreen = () => {

    const  {width,height} = useWindowDimensions();
  return (
    <View>
        <View style={ styles.container }>
            {/* <Text >DimensionScreen</Text> */}
            <View style={{
                ...styles.purpleBox,
                width: width * 0.5,
            }} />
        </View>
        <Text style={styles.title}>Width: {width}, Height:{height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        // width: '100%',
        width:300,
        height:300,
        backgroundColor:'red',
    },
    purpleBox:{
        backgroundColor:'#5856d6',
        height: '50%',
        width: '50%',
    },
    title:{
        fontSize:20,
        textAlign: 'center',
    },
});
//https://reactnative.dev/docs/dimensions