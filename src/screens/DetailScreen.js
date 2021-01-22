import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

// Modules

// Components
// import Header from '../components/Detail/Header';
import Header from '../components/Header';
import ChartAffected from '../components/Detail/ChartAffected';
import ChartAge from '../components/Detail/ChartAge';

const DetailScreen = (props) => {

    const apiData = props.route.params.data.FranceGlobalLiveData[0];

    console.log("route", apiData)

    return (
        <ScrollView style={styles.container}>
            <Header
                title="Cas total de Corona Virus"
                numCas={apiData.casConfirmes}
            />

            <ChartAffected
                deathInHospital={apiData.deces}
                deathInEhpad={apiData.decesEhpad}
            />

            <ChartAge />
        </ScrollView>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#F4F4F4',
    },
});