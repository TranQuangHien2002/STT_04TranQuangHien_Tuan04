import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

import { CheckBox } from "react-native-elements";
import { useState } from "react";

export default function screens_2c() {
    const [passLength, setPassLength] = useState('');
    const [lowerCase, setLowerCase] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [number, setNumber] = useState(false);
    const [specialSymbol, setSpecialSymbol] = useState(false);
    const [password, setPassword] = useState('');

    const handleGeneratePassword = () => {
        setPassword(genaratePassword(passLength, lowerCase, upperCase, number, specialSymbol));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> PASSWORD GENERATOR </Text>
            <TextInput 
                style={styles.input} 
                editable={false} 
                value={password}
            />
            <View style={styles.wrap}>
                <Text style={styles.label}> Password length </Text>
                <TextInput 
                    style={styles.pass_lenght}
                    value={passLength}
                    onChangeText={(text) => setPassLength(text)}
                ></TextInput>
            </View>
            <View style={styles.wrap}>
                <Text style={styles.label}> Include lower case letters </Text>
                <CheckBox
                    style={styles.checkbox}
                    checked={lowerCase}
                    onPress={() => {
                        setLowerCase(!lowerCase);
                    }}
                />
            </View>
            <View style={styles.wrap}>
                <Text style={styles.label}> Include upcase letters </Text>
                <CheckBox
                    style={styles.checkbox}
                    checked={upperCase}
                    onPress={() => {
                        setUpperCase(!upperCase);
                    }}
                />
            </View>
            <View style={styles.wrap}>
                <Text style={styles.label}> Include number </Text>
                <CheckBox
                    style={styles.checkbox}
                    checked={number}
                    onPress={() => {
                        setNumber(!number);
                    }}
                />
            </View>
            <View style={styles.wrap}>
                <Text style={styles.label}> Include special symbol </Text>
                <CheckBox
                    style={{width: '200px'}}
                    checked={specialSymbol}
                    onPress={() => {
                        setSpecialSymbol(!specialSymbol);
                    }}
                />
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text
                    style={styles.btn_text}
                    checked={lowerCase}
                    onPress={handleGeneratePassword}
                >
                    Generate password
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const genaratePassword = (passLength, lowerCase, upperCase, number, specialSymbol) => {

    const in_LowerCase = "abcdefghijklmnopqrstuvwxyz";
    const in_UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const in_Number = "0123456789";
    const in_SpecialSymbol = "!@#$%^&*()_+";

    let characters = "";
    let pass = "";

    if (lowerCase) {
        characters += in_LowerCase;
    }
    if (upperCase) {
        characters += in_UpperCase;
    }
    if (number) {
        characters += in_Number;
    }
    if (specialSymbol) {
        characters += in_SpecialSymbol;
    }

    for (let i = 0; i < passLength; i++) {
        pass += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return pass;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#23235b",
        display: "fixed",
        width: "100%",
        height: "100%",
        borderWidth: 20,
        borderColor: "#6262AA",
        
    },

    title: {
        fontSize: 24,
        width: '181px',
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
        paddingBottom: 10,
        textTransform: "uppercase",
      
    },
    input: {
        backgroundColor: "#151537",
        width: "80%",
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'white'
    },
    wrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 10,
    },
    label: {
        color: "#fff",
        fontSize: 16,
    },

    pass_lenght: {
        color: "#000",
        fontSize: 16,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 5,
        marginTop: 10,
        width: 100,
    },

    btn: {
        backgroundColor: "#3b3b98",
        width: "80%",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    btn_text: {
        color: "#fff",
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: 600,
    },
    checkbox: {
        backgroundColor: "#fff",
    },
});