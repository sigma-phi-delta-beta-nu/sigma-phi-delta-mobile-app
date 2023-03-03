import {Alert, TouchableOpacity, StyleSheet, Text, TextInput, View} from "react-native";
import { createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";

type SignInProps = NativeStackScreenProps<RootStackParamList, "SignIn">;

export type RootStackParamList = {
    SignIn: undefined;
    Main: undefined;
};

const SignIn: React.FC<SignInProps> = (props) => {
    const pressSignIn = () => {
        props.navigation.navigate("Main")
    }

    return( 
        <View style = {styles.container}>
                <Text style={styles.title}>Pro Bono</Text> 
                <View style={styles.inputView}>
                    <TextInput style={styles.textInput} placeholder='Username' placeholderTextColor='#ffffff'></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' placeholderTextColor='#ffffff' ></TextInput>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Main")}
                    >
                    <Text style={styles.signInButton}>Sign In</Text>
                </TouchableOpacity> 
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        paddingVertical: 8,
        paddingHorizontal: 48,
        marginBottom: 20,
        fontSize: 30,
        color: '#ffffff',
        borderWidth: 6,
        borderRadius: 14,
        backgroundColor: "#950000",
        borderColor: '#101010',
        alignSelf: 'center',
        fontWeight: 'bold',
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        backgroundColor: "#101010",
        alignItems: "center",
        justifyContent: "center",
    },
    
    inputView: {
        backgroundColor: '#950000',
        borderBottomColor: '#000000',
        borderRadius: 30,
        width: 150,
        height: 45,
        marginBottom: 15,
        alignItems: 'center',
        //marginLeft: 0,
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10, 
    },
    signInButton: {
        color: '#ffffff' 
    }

})

export default SignIn;
