import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Modules
import Feather from 'react-native-vector-icons/Feather';

// Components


const BottomBar = ({ navigation, data }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.volumnCon}
                onPress={() => navigation.navigate("Detail", {data: data})}
            >
                <Feather name="plus" size={30} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
};

export default BottomBar;

const styles = StyleSheet.create({
    container: {
    },
    volumnCon: {
        alignSelf: 'center',
        backgroundColor: '#257AF2',
        position: 'absolute',
        width: 70,
        height: 70,
        top: -90,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});