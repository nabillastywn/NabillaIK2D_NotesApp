import React from 'react';
import { PropsService, TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import { Keyboard, Platform, Text } from 'react-native';
import { KeyboardAvoidingView, View, ScrollView, TextInput, TouchableOpacity } from 'react-native-web';
import { styles } from './AddNote'
import { useState } from 'react';

const EditNote = ({ route, navigation, ...props }) => {
    const { i, n } = route.params;
    const [newEdit, setNewEdit] = useState(n)


    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'windows' ? 'padding' : 'height'}

            >

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ padding: 20, justifyContent: 'space-around' }}>
                        <TextInput style={[styles.input]} placeholder='Type Here...'
                            value={newEdit.toString()} onChangeText={(text) => setNewEdit(text)}
                        />
                        <TouchableOpacity style={styles.button} onPress={() => {
                            let edited = [...props.notes];
                            edited[i] = newEdit;
                            props.setNotes(edited);

                            navigation.navigate('Notes')
                        }
                        }>
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default EditNote;