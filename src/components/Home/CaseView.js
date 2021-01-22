import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Modules
import AntDesign from 'react-native-vector-icons/AntDesign'

// Components
import { refontNumber } from '../../functions/NumberTools';


const CaseView = ({
    title,
    num,
    pourcentage1Title,
    pourcentage1Num,
    pourcentage2Title,
    pourcentage2Num,
}) => {

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.num}>{refontNumber(num)}</Text>
            </View>

            <View style={styles.right}>
                <View style={styles.itemRight}>
                    <AntDesign name="arrowdown" color={'#6AB276'} />
                    <View style={styles.itemRightFill}>
                        <Text style={styles.itemRightFillTitle}>{pourcentage1Num}</Text>
                        <Text style={styles.itemRightFillDesc}>{pourcentage1Title}</Text>
                    </View>
                </View>

                <View style={styles.itemRight}>
                    <AntDesign name="arrowup" color="#E35757" />
                    <View style={styles.itemRightFill}>
                        <Text style={styles.itemRightFillTitle}>{pourcentage2Num}</Text>
                        <Text style={styles.itemRightFillDesc}>{pourcentage2Title}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CaseView;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 10,
    },
    title: {
        fontSize: 15,
        color: 'gray',
        fontWeight: '500',
    },
    itemRightFill: {
        marginLeft: 6,
    },
    num: {
        fontSize: 42,
        fontWeight: '500',
    },
    left: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 20,
    },
    right: {
        flex: 1,
    },

    itemRight: {
        flexDirection: 'row',
        marginTop: 10,
    },
    itemRightFillTitle: {
        fontSize: 15,
        fontWeight: '600',
    },
    itemRightFillDesc: {
        color: '#CCCDCE',
        marginTop: 5,
    },
});