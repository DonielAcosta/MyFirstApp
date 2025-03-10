import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
// import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
// import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
// import { PositionScreen } from './src/presentation/screens/PositionScreen';
import { FlexScreen } from './src/presentation/screens/FlexScreen';

export const App = () => {
    return (
        <PaperProvider
            settings={{
                icon: (props) => <Icon {...props} />, // Configura PaperProvider para usar Ionicons
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                {/* <BoxObjectModelScreen /> */}
                {/* <DimensionScreen/> */}
                {/* <PositionScreen/> */}
                <FlexScreen/>
            </SafeAreaView>
        </PaperProvider>
    );
};
