import { NavigationContainer } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React from "react";
import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView, Keyboard, TextInput, onChangeText } from 'react-native';
import { Platform, TouchableOpacity } from "react-native-web";
import * as Style from '../assets/styles';
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


const loginpage = ({ navigation, ...props }) => {

    const navigate = useNavigation();
    const moveToNotes = () => {
        navigate.replace('Notes')
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#dbe4f3' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'windows' ? 'padding' : 'height'}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 60,
                    }}>
                    <Image
                        source={require('./assets/noteslogo.png')}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                        My<Text style={{ color: '#2396F2' }}>NOTEsAPP</Text>
                    </Text>
                    <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 18 }}>
                        Login
                    </Text>
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ padding: 20, justifyContent: 'space-around' }}>
                        <TextInput style={{
                            padding: 20,
                            paddingTop: 20,
                            width: '30%',
                            fontSize: 17,
                            color: 'black',
                            fontWeight: '500',
                            opacity: 0.6,
                            shadowColor: '#4b6043',
                            shadowOpacity: 0.5,
                            shadowOffset: { width: 9, height: 8 },
                            shadowRadius: 17,
                            elevation: 8,
                            backgroundColor: 'white',
                            borderColor: Style.color,
                            borderWidth: 2,
                            borderRadius: 5,
                            height: 50,
                            alignSelf: 'center',
                            marginTop: 30
                        }} placeholder='Enter Your Username'
                             />
                        <TextInput style={{
                           padding: 20,
                           paddingTop: 20,
                           width: '30%',
                           fontSize: 17,
                           color: 'black',
                           fontWeight: '500',
                           opacity: 0.6,
                           shadowColor: '#4b6043',
                           shadowOpacity: 0.5,
                           shadowOffset: { width: 9, height: 8 },
                           shadowRadius: 17,
                           elevation: 8,
                           backgroundColor: 'white',
                           borderColor: Style.color,
                           borderWidth: 2,
                           borderRadius: 5,
                           height: 50,
                           alignSelf: 'center',
                           marginTop: 30 
                        }} placeholder='Enter Your Password'
                             />
                        <TouchableOpacity style={{
                            backgroundColor: '#79b465',
                            width: '10%',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            alignSelf: 'center',
                            marginTop: 20,
                        }} onPress={moveToNotes}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

// props.handleLogin();

export const styles = StyleSheet.create({
    addNoteContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        padding: 20,
        paddingTop: 20,
        widh: '100%',
        fontSize: 19,
        color: 'black',
        fontWeight: '600',
        opacity: 0.8,
        shadowColor: Style.color,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius: 5,
        height: 300
    },
    button: {
        backgroundColor: Style.color,
        width: '40%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        // alignSelf: 'flex-end',
        marginLeft: 200,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
})

export default loginpage;