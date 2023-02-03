import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Barlet from './components/barlet';

export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <Text style={styles.innerText}>Pro Bono</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.body}/>
            <SafeAreaView style={styles.footer}>
                <Barlet/>
                <Barlet/>
                <Barlet/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: '#1E2022',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#52616B',
    },
    body: {
        flex: 15,
        backgroundColor: '#1E2022'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#1E2022',
        borderTopWidth: 1,
        borderTopColor: '#52616B',
    },
    innerText: {
        color: 'white',
        fontSize: 30 
    }
});

