import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <Text style={styles.innerText}>Sigma Phi Delta</Text>
                <Image style={styles.crest} source={require('./assets/coat-of-arms.png')}/>
            </SafeAreaView>
            <SafeAreaView style={styles.body}/>
            <SafeAreaView style={styles.footer}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 5,
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
        backgroundColor: '#1E2022',
        borderTopWidth: 1,
        borderTopColor: '#52616B',
    },
    innerText: {
        color: 'white',
        fontSize: 30 
    },
    crest: {
        width: 100,
        height: 100
    }
});

