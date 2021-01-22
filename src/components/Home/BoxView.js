import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// Modules


// Components
import { refontNumber } from '../../functions/NumberTools';


const BoxView = ({ title, num, color }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Text style={[styles.number, { color: color }]} > {refontNumber(num)}</Text>
            </View>

            <View style={styles.graphic} >
                <View style={styles.graphicContainer}>
                    {
                        Array(15).fill(0).map((item, index) => {
                            return (
                                <LineGraphic
                                    style={[index == 15 && { marginRight: 0 }]}
                                    height={30 + parseInt(70 * Math.random())}
                                    key={index.toString()}
                                    color={color}
                                />
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
};


const LineGraphic = ({ height, style, color }) => {
    return (
        <View style={[styles.line, { height }, style]} >
            <View style={[styles.fill, { height: '25%', backgroundColor: color }]} />
        </View>
    )
};


export default BoxView;

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        height: 228,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginHorizontal: 15,
        padding: 10,

        // Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    header: {
        padding: 20,
        flex:1
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    number: {
        fontSize: 40,
        fontWeight: '500',
        color: '#E25858',
    },


    // LineGraphic
    graphic: {
        padding: 10,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    graphicContainer: {
        flexDirection: 'row',

        alignSelf: 'center',
        alignItems: 'flex-end',
    },
    line: {
        width: 3,
        // height: 100,
        backgroundColor: '#EAEAE8',
        justifyContent: 'flex-end',
        marginRight: 7,
    },
    fill: {
        // height: 28, 
        backgroundColor: "#856A63"
    },
});
