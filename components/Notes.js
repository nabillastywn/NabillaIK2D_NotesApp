import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView } from 'react-native-web';
import * as Style from '../assets/styles';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Icon, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Alert, Keyboard } from 'react-native';

const Notes = ({ navigation, ...props }) => {

    const [searchNote, setSearchNote] = useState();

    function deleteNote(index) {
        let newArray = [...props.notes];
        let movedNote = newArray.splice(index, 1);
        props.setNotes(newArray);
        props.setMoveToBin(movedNote);

        let bin = [movedNote, ...props.moveToBin];
        props.setMoveToBin(bin);
    }

    return (
        <View style={[styles.notesContainer]}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Write Your Everyday Notes !!</Text>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity style={[styles.button, { marginLeft: 40 }]} onPress={() => navigation.navigate('DeletedNotes')}>
                        <IconRegistry icons={EvaIconsPack} />
                        <ApplicationProvider {...eva} theme={eva.light}>
                            <Icon name='trash-2-outline' fill="white" style={{ width: 25, height: 50 }} />
                        </ApplicationProvider>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, { marginLeft: 25 }]} onPress={() => navigation.navigate('AddNote')}>
                        <IconRegistry icons={EvaIconsPack} />
                        <ApplicationProvider {...eva} theme={eva.light}>
                            <Icon name='plus-outline' fill="white" style={{ width: 25, height: 50 }} />
                        </ApplicationProvider>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, { marginLeft: 25 }]} onPress={() => navigation.navigate('login')}>
                        <IconRegistry icons={EvaIconsPack} />
                        <ApplicationProvider {...eva} theme={eva.light}>
                            <Icon name='arrow-forward-outline' fill="white" style={{ width: 25, height: 50 }} />
                        </ApplicationProvider>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.divider}></View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {props.notes.length === 0
                    ?
                    <View style={styles.emptyNoteContainer}>
                        <Text style={styles.emptyNoteText}>There is no Note yet! click on the + button to add note</Text>
                    </View>
                    :

                    props.notes.map((item, index) =>

                        <View style={styles.item} key={index}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <View style={styles.note}>
                                    <Text style={styles.index}>{index + 1}. </Text>
                                    <Text style={styles.text}>{item}</Text>
                                </View>

                                <TouchableOpacity onPress={() => deleteNote(index)}>
                                    <IconRegistry icons={EvaIconsPack} />
                                    <ApplicationProvider {...eva} theme={eva.light}>
                                        <Icon name='trash-outline' fill="red" style={{ width: 25, height: 20 }} />
                                    </ApplicationProvider>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text>{props.date}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('EditNote', {
                                    i: index,
                                    n: item
                                })}>
                                    <Text style={styles.delete}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
            </ScrollView>
        </View>
    )
}

export const styles = StyleSheet.create({
    notesContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom: 70,
        opacity: 1.0
    },
    heading: {
        fontSize: 40,
        fontWeight: '600',
        color: '#006b3c',
    },
    divider: {
        width: '100%',
        height: 3,
        backgroundColor: '#646049',
        marginTop: 10,
        marginBottom: 5,
    },
    item: {
        marginBottom: 20,
        padding: 15,
        color: 'black',
        opacity: 0.8,
        marginTop: 10,
        shadowColor: Style.color,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius: 5,
        borderLeftWidth: 15,
    },
    index: {
        fontSize: 20,
        fontWeight: '800',
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#784B84',
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        height: 50,
    },
    buttonText: {
        colors: 'white',
        fontSize: 32,
        fontWeight: '800'
    },
    scrollView: {
        marginBottom: 70,
    },
    note: {
        flexDirection: 'row',
        width: '75%',
    },
    text: {
        fontWeight: '700',
        fontSize: 17,
        alignSelf: 'center',
    },
    delete: {
        color: Style.color,
        fontWeight: '700',
        fontSize: 15
    },
    input: {
        height: 40,
        paddingHorizontal: 20,
        width: '65%',
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
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    searchButton: {
        backgroundColor: Style.color,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        borderRadius: 5,
        height: 40,
    },
    searchButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 12,
    },
    emptyButtonText: {
        alignItems: 'center',
        marginTop: 240,
    },
    emptyNoteText: {
        color: Style.color,
        fontWeight: '600',
        fontSize: 15
    },
    dateContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
})
export default Notes;