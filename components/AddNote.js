import { NavigationContainer } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React from "react";
import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView, Keyboard, TextInput, onChangeText } from 'react-native';
import { Platform, TouchableOpacity } from "react-native-web";
import * as Style from '../assets/styles';


const AddNote = ({ navigation, ...props }) => {
    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'windows' ? 'padding' : 'height'}
            >

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ padding: 20, justifyContent: 'space-around' }}>
                        <TextInput style={[styles.input]} placeholder='Type Here...'
                            multiline={true}
                            value={props.note} onChangeText={(text) => props.setNote(text)} />

                        <TouchableOpacity style={styles.button} onPress={() => {

                            props.handleNote();
                            navigation.navigate('Notes')
                        }}>
                            <Text style={styles.buttonText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}


export const styles = StyleSheet.create({
    addNoteContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Style.color,
        borderWidth: 2,
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
        backgroundColor: '#746D69',
        width: '30%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        alignSelf: 'flex-end',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
})

export default AddNote;