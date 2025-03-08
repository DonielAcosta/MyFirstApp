import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import Icon from 'react-native-vector-icons/Ionicons';

export const App = () => {
    return (
        <PaperProvider
            settings={{
                icon: (props) => <Icon {...props} />, // Configura PaperProvider para usar Ionicons
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <CounterM3Screen />
            </SafeAreaView>
        </PaperProvider>
    );
};
