import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//Modules
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr')

// Components
import { refontNumber } from '../functions/NumberTools';


const Header = ({ title, numCas }) => {
    const dateNow = moment().format("ll");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContain}>
                    <View style={styles.headerSub} >
                        <Text style={styles.headerDate}>{dateNow}</Text>
                        <Image
                            source={require('../assets/cast.png')}
                            resizeMode="contain"
                            style={styles.img}
                        />
                    </View>
                    <Text style={styles.headerTitle}>{title}</Text>
                    <Text style={styles.headerNumber}>{refontNumber(numCas)}</Text>
                </View>
            </View>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // borderWidth:1,
        backgroundColor: "#F4F4F4",
    },
    header: {
        padding: 20,
    },
    headerContain: {
        margin: 10,
    },
    headerSub:{
        flexDirection: 'row' ,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerDate: {
        fontSize: 14,
        fontWeight: '400',
        color: '#35343A',
    },
    img: {
        width: 30,
        height: 30,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#35343A',
        marginVertical: 8,

    },
    headerNumber: {
        fontSize: 45,
        fontWeight: '500',
        color: '#35343A',
    },

})
