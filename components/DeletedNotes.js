import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import * as Style from '../assets/styles';
import { Platform, TouchableOpacity } from "react-native-web";
import { styles } from './Notes'

const DeletedNotes = ({...props}) => {

    function undoNote(index){
        let getBack = props.moveToBin[index];
        let array = [getBack, ...props.notes];
        props.setNotes(array);

        let newArray = [...props.moveToBin];
        newArray.splice(index, 1);
        props.setMoveToBin(newArray);
    }

    return (
        <ScrollView>
            <View style={[styles.notesContainer]}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <TouchableOpacity style={style.emptyButton} onPress={() => {
                        let deletedNotes = [...props.moveToBin];
                        let notes = [...props.notes];
                        deletedNotes.forEach((item, index) => {
                            notes.push(item)
                        })
                        props.setMoveToBin([]);
                        props.setNotes(deletedNotes);
                    }
                    }>
                        <Text style={{
                            color: 'white',
                            fontSize: 18
                        }}>Undo All</Text>
                    </TouchableOpacity>

                    <Text style={{fontWeight: '700', fontSize: 18, color: Style.color}}>
                        Total: {props.moveToBin.length}
                    </Text>

                    <TouchableOpacity style={style.emptyButton} onPress={() => 
                    {
                        let emptyArray = [...props.moveToBin];
                        emptyArray = [];
                        props.setMoveToBin(emptyArray);
                    }
                    }>
                        <Text style={{
                            color: 'white',
                            fontSize: 18
                        }}>Empty</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider}></View>

                {props.moveToBin.length === 0 
                ?

                <View style={styles.emptyNoteContainer}>
                    <Text style={styles.emptyNoteText}>Nothing to Show yet...!</Text>
                </View>
                :
                
                props.moveToBin.map((item, index) => 

                    <View style={styles.item} key={index}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                        <View style={styles.note}>
                            <Text style={styles.index}>{index + 1}. </Text>
                            <Text style={styles.text}>{item}</Text>
                        </View>

                        <TouchableOpacity onPress={() => undoNote(index)}>
                            <Text style={styles.delete}>Undo</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dateContainer}>
                        <Text>{props.date}</Text>

                        <TouchableOpacity onPress={() => {
                            let newArray = [...props.moveToBin];
                            newArray.splice(index, 1);
                            props.setMoveToBin(newArray);
                        }} >
                            <Text style={{
                                color: '#900603',
                                fontWeight: '700',
                                fontSize: 15
                            }}>Delete</Text>
                        </TouchableOpacity>
                    </View>

                    </View>
                )}
                </View>
            
        </ScrollView>
    )
}

export const style = StyleSheet.create({
    emptyButton: {
        backgroundColor: Style.color,
        width: '25%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        marginBottom: 5,
    },

})
export default DeletedNotes;