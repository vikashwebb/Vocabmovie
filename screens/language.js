import React, {useState} from "react";
import {Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { RadioButton } from 'react-native-paper';

const LanguageScreen = () => {
    const [value, setValue] = React.useState('first');
    return(
        <>
        <View>
            <Text style={styles.Heading}>Choose the Language</Text>
        </View>
        <View style={styles.langWraper}>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>Hindi (हिन्दी)</Text>
                    <RadioButton style={styles.radioStyle} value="hindi"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>English (English)</Text>
                    <RadioButton value="english"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>Spanish (Español) <Text style={styles.comingText}> Coming Soon</Text></Text>
                 
                    <RadioButton value="spanish"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>French (Français) <Text style={styles.comingText}> Coming Soon</Text></Text>
                    
                    <RadioButton value="french"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>German (Deutsch) <Text style={styles.comingText}> Coming Soon</Text></Text>
        
                    <RadioButton value="german"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>Italian (Italiano) <Text style={styles.comingText}> Coming Soon</Text></Text>
                   
                    <RadioButton value="italian"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>Portuguese (Português) <Text style={styles.comingText}> Coming Soon</Text></Text>
                    
                    <RadioButton value="portuguese"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>Russian (Русский) <Text style={styles.comingText}> Coming Soon</Text></Text>
                    <RadioButton value="russian"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>Thai (ไทย) <Text style={styles.comingText}> Coming Soon</Text></Text>
              
                    <RadioButton value="thai"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>Arabic (العربية) <Text style={styles.comingText}> Coming Soon</Text></Text>
                    
                    <RadioButton value="arabic"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>Chinese (中文) <Text style={styles.comingText}> Coming Soon</Text></Text>
                   
                    <RadioButton value="chinese"  color="#258de8" />
                </View>
                <View style={styles.langButton}>
                    <Text style={styles.langButtonText}>Japanese (日本語) 
                        <Text style={styles.comingText}> Coming Soon</Text>
                    </Text>
                    <RadioButton value="japanese"  color="#258de8" />
                </View>
            </RadioButton.Group> 
             
        </View>
        <View style={styles.continueWraper}>
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>
                    Continue 
                </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    radioStyle:{
        position: 'absolute',
        right: 10
    },
    continueButtonText:{
        backgroundColor: '#258de8',
        paddingVertical: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        color: '#fff',
        textAlign: 'center',
        borderRadius: 5,
        fontSize: 16
    },
    continueWraper:{
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0
    },
    comingText:{
        paddingVertical: 10,
        fontSize: 12,
        color: '#00000060'
        // backgroundColor: '#ccc', 
    },
    langWraper:{
        paddingTop: 10,
        paddingBottom: 100
    },
    langButtonText:{
      paddingVertical: 10,
      paddingHorizontal: 20,
      color: '#000'
    },
    langButton:{
        // borderWidth: 1,
        // borderColor: '#258de8', 
        borderRadius: 5, 
        marginVertical: 5,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    Heading:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 10
    }
})


export default LanguageScreen;