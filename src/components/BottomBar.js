import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Modules
import Feather from 'react-native-vector-icons/Feather';

// Components


const BottomBar = ({ navigation, data }) => {

    return (
        <View>
            <View style={styles.container}>
                <View style={[styles.col1, { borderTopRightRadius: 200 }]}>
                    {/* <Feather name="cast" size={30} color="#B6BBC4" /> */}
                </View>

                <View style={[styles.col1, { borderTopLeftRadius: 200 }]}>
                    {/* <Feather name="bell" size={30} color="#B6BBC4" /> */}
                </View>
            </View>
            <View style={styles.center} />
            <View style={styles.center2} />

            <TouchableOpacity
                style={styles.volumnCon}
                onPress={() => navigation.navigate("Detail", { data: data })}
            >
                <Feather name="plus" size={30} color="#222" />
            </TouchableOpacity>
        </View>
    );
};

export default BottomBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F4F4F4',
    },
    col1: {
        width: '42%',
        height: 60,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    center: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        position: 'absolute',
        width: 100,
        height: 400,
        top: 10,
        borderRadius: 40,
    },
    center2: {
        alignSelf: 'center',
        backgroundColor: '#F4F4F4',
        position: 'absolute',
        width: 70,
        height: 70,
        top: -46,
        borderRadius: 100,
    },
    volumnCon: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        position: 'absolute',
        width: 70,
        height: 70,
        top: -50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});