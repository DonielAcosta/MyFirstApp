import { StyleSheet, View } from "react-native";

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'gray',

    },
    box1:{
        backgroundColor:'blue',
        flex: 1,  //1 + 2 + 3 = 1/6
    },
    box2:{
        backgroundColor:'yellow',
        flex: 2,  //1/6  = 1/3
    },
    box3:{
        backgroundColor:'green',
        flex: 3,  //3/6    = 1/6
    },
});
