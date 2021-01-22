import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Modules

// Components


const ChartAge = () => {

    const ageArray = ["0-14", "15-44", "45-64", "65-74", "+75"];
    const pourcentageArray = [1, 3, 14, 21, 62]

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.title}>Moyenne d'Âge</Text>
            </View>

            <View style={styles.chartContainer}>
                {
                    Array(5)
                        .fill(0)
                        .map((e, i) => {

                            return (
                                <View style={[styles.chartCol, (i == 0) & { marginLeft: 0 }]} key={`${e} ${i}`}>
                                    <Text style={styles.percent}> {pourcentageArray[i]}%</Text>
                                    <View style={[styles.col, { height: pourcentageArray[i] }]} />
                                    <Text style={styles.titleCol}>{ageArray[i]}</Text>
                                </View>
                            );
                        })
                }
            </View>
        </View>
    );
};

export default ChartAge;

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
    container: {
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 10,
        marginTop: 20,
    },
    chartContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 10,
    },

    col: {
        width: 30,
        height: 40,
        backgroundColor: '#AEB8C9',
    },

    percent: {
        color: 'gray',
        textAlign: 'center',
    },
    chartCol: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },

    titleCol: {
        color: 'gray',
        fontWeight: '500',
        fontSize: 12,
        marginTop: 6,
    },
});