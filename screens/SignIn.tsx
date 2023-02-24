import {Alert, Button,StyleSheet, Text, TextInput, View} from "react-native";

const SignIn = () => {
    return( 
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} placeholder='Username' placeholderTextColor='#555555'></TextInput>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' placeholderTextColor='#555555'></TextInput>
            </View>
                <Button
                    title = "Sign In"
                    onPress={() => Alert.alert("Sign in was pressed!")}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
        alignItems: "center",
        justifyContent: "center",
    },
    inputView: {
        backgroundColor: '#FFC0CB',
        borderBottomColor: '#000000',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,
        alignItems: 'center',
        marginLeft: 20,
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10, 
      }
})

export default SignIn;
