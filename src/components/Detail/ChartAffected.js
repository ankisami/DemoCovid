import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

// Modules

// Components


const W = Dimensions.get('window').width;

const ChartAffected = ({ deathInEhpad, deathInHospital }) => {

    const [averageDeathHospital, setAverageDeathHospital] = useState((deathInHospital / (deathInEhpad + deathInHospital) * 100).toFixed(0));
    const [averageDeathEhpad, setAverageDeathEhpad] = useState((deathInEhpad / (deathInEhpad + deathInHospital) * 100).toFixed(0));



    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.title}>DÉCÈS</Text>
                <View style={styles.containerDot}>
                    <View style={styles.dot} />
                    <Text style={styles.male}>EHPAD</Text>
                </View>

                <View style={styles.containerDot}>
                    <View style={[styles.dot, { backgroundColor: '#2A4DA6' }]} />
                    <Text style={styles.male}>Hôpital</Text>
                </View>
            </View>

            <View style={styles.containerRight}>
                <View style={styles.right}>
                    <View style={styles.oval} />
                </View>
                <View style={styles.percent1}>
                    <Text style={{ color: '#2A4DA6' }}>{averageDeathHospital}%</Text>
                </View>
                <View style={styles.percent2}>
                    <Text style={{ color: '#E47CC0' }}>{averageDeathEhpad}%</Text>
                </View>
            </View>


        </View>
    );
};

export default ChartAffected;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 10,
        marginTop: 20,
    },
    male: {
        color: 'gray',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
    dot: {
        width: 12,
        height: 12,
        backgroundColor: '#E47CC0',
        borderRadius: 12,
        marginRight: 6,
    },
    containerDot: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    left: {
        flex: 1,
    },
    oval: {
        width: W / 5,
        height: W / 5,
        borderWidth: 10,
        borderRadius: W / 5,
        borderColor: '#E47CC0',
        borderTopColor: '#E47CC0',
        // borderBottomColor: 'transparent',
        // borderLeftColor: 'transparent',
        borderColor: '#2A4DA6',
        transform: [{ rotate: '-45deg' }],
    },
    percent1: {
        position: 'absolute',
        top: 90,
        right: 1,
    },
    percent2: {
        position: 'absolute',
        bottom: 90,
        left: 1,
    },
    containerRight: {
        padding: 15,
    },
});