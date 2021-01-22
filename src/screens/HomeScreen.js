import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

//Modules

// Components
import BoxView from '../components/Home/BoxView';
import CaseView from '../components/Home/CaseView';
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';

// API
import { GetDataCovid } from '../API/GetDataCovid';


const HomeScreen = (props) => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await GetDataCovid();
            setApiData(response);
        })();
    }, []);


    return (
        <>
            {
                (apiData.length === 0)
                    ? (
                        <View style={styles.loading}>
                            <ActivityIndicator size={'large'} />
                        </View>
                    )
                    : (
                        <>
                            <View style={styles.container}>
                                <ScrollView style={styles.flex}>
                                    <Header
                                        numCas={apiData.FranceGlobalLiveData[0].casConfirmes}
                                        title={"Cas total de Corona Virus"}
                                    />

                                    <View style={styles.ScrollBoxView}>
                                        <ScrollView contentContainerStyle={styles.multiBoxView} horizontal={true} showsHorizontalScrollIndicator={false}>
                                            <BoxView title="DÉCÈS" num={apiData.FranceGlobalLiveData[0].deces + apiData.FranceGlobalLiveData[0].decesEhpad} color="#E35757" />
                                            <BoxView title="GUERIS" num={apiData.FranceGlobalLiveData[0].gueris} color="#6AB376" />
                                        </ScrollView>
                                    </View>

                                    <View style={styles.caseContainer} >
                                        <CaseView
                                            title={"CAS CONFIRMÉS"}
                                            num={apiData.FranceGlobalLiveData[0].casConfirmes + apiData.FranceGlobalLiveData[0].casConfirmesEhpad}
                                            pourcentage1Title={"Hôpitaux"}
                                            pourcentage1Num={`${(apiData.FranceGlobalLiveData[0].casConfirmes / (apiData.FranceGlobalLiveData[0].casConfirmes + apiData.FranceGlobalLiveData[0].casConfirmesEhpad) * 100).toFixed(0)} %`}
                                            pourcentage2Title={"Ehpad"}
                                            pourcentage2Num={`${(apiData.FranceGlobalLiveData[0].casConfirmesEhpad / (apiData.FranceGlobalLiveData[0].casConfirmes + apiData.FranceGlobalLiveData[0].casConfirmesEhpad) * 100).toFixed(0)} %`}
                                        />
                                        <View style={{ height: 10 }} />

                                        <CaseView
                                            title={"PATIENTS HÔSPITALISÉS"}
                                            num={apiData.FranceGlobalLiveData[0].hospitalises}
                                            pourcentage1Title={"Hospitalisation"}
                                            pourcentage1Num={apiData.FranceGlobalLiveData[0].nouvellesHospitalisations}
                                            pourcentage2Title={"Réanimation"}
                                            pourcentage2Num={apiData.FranceGlobalLiveData[0].reanimation}
                                        />
                                    </View>
                                </ScrollView>
                            </View>

                            <BottomBar
                                navigation={props.navigation}
                                data={apiData}
                            />
                        </>
                    )
            }
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex: {
        flex: 1,
        backgroundColor: "#F4F4F4",
    },
    container: {
        flex: 1,
        backgroundColor: "#F4F4F4",
    },
    headerContain: {
        margin: 10,
    },
    headerDate: {
        fontSize: 14,
        fontWeight: '400',
        color: '#35343A',
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
    multiBoxView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10

    },
    ScrollBoxView: {
        height: 258,
    },

    // Case Container
    caseContainer: {
        flex: 1,
        padding: 20,
    },
})
