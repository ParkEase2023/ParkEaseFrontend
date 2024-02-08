import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView } from "react-native";
import { CaretLeft } from "phosphor-react-native";
import CheckBoxItem from "../components/ReportCheckbox";
import ReportCheckBoxOther from "../components/ReportCheckboxOther";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthTabParamList } from "../stack/AuthStack";

const ReviewReport = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
    const [inputCheckBox, setinputCheckBox] = useState("");
    const [inputRemove, setInputRemove] = useState("");
    const [reportText, setReportText] = useState<string[]>([]);
    const [ticker, setTicker] = useState(false);
    useEffect(() => {
        const updateReport = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (ticker === false) {
                const filteredArray = reportText.filter(value => value !== inputRemove);
                setReportText(filteredArray); 
            } else {
                const filteredArray = [...reportText]
                filteredArray.push(inputCheckBox);
                setReportText(filteredArray);
            }
        };
        updateReport();
    }, [inputCheckBox, ticker]); 
    
    useEffect(() => {
        console.log("reportText:", reportText);

    }, [reportText])
    return (
        <KeyboardAvoidingView
            style={styles.container}>
            <ScrollView 
                contentContainerStyle= {styles.scrollViewContainer}
                keyboardShouldPersistTaps="handled">
            <View style={styles.row}>
                <View style={styles.CaretLeft}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={22} color="#EEF0FF"  />
                </TouchableOpacity>
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>Review Report</Text>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <CheckBoxItem
                    id={"WrongTopic"}
                    label="Wrong topic"
                    value={false}
                    onValue={value => {
                        setinputCheckBox(value);
                    }}
                    onTicker={value => {
                        setTicker(value);
                    }}
                    onRemove={value => {
                        setInputRemove(value);
                    }}
                />
                <CheckBoxItem
                    id={"Spam"}
                    label="Spam"
                    value={false}
                    onValue={value => {
                        setinputCheckBox(value);
                    }}
                    onTicker={value => {
                        setTicker(value);
                    }}
                    onRemove={value => {
                        setInputRemove(value);
                    }}
                />
                <CheckBoxItem
                    id={"ConflictOfInterest"}
                    label="Conflict of interest"
                    value={false}
                    onValue={value => {
                        setinputCheckBox(value);
                    }}
                    onTicker={value => {
                        setTicker(value);
                    }}
                    onRemove={value => {
                        setInputRemove(value);
                    }}
                />
                <CheckBoxItem
                    id={"VulgarWords"}
                    label="Vulgar words"
                    value={false}
                    onValue={value => {
                        setinputCheckBox(value);
                    }}
                    onTicker={value => {
                        setTicker(value);
                    }}
                    onRemove={value => {
                        setInputRemove(value);
                    }}
                />
                <CheckBoxItem
                    id={"BullyingOrHarassment"}
                    label="Bullying or harassment"
                    value={false}
                    onValue={value => {
                        setinputCheckBox(value);
                    }}
                    onTicker={value => {
                        setTicker(value);
                    }}
                    onRemove={value => {
                        setInputRemove(value);
                    }}
                />
                <CheckBoxItem
                    id={"DiscriminationOrHateSpeech"}
                    label="Discrimination or hate speech"
                    value={false}
                    onValue={value => {
                        setinputCheckBox(value);
                    }}
                    onTicker={value => {
                        setTicker(value);
                    }}
                    onRemove={value => {
                        setInputRemove(value);
                    }}
                />
                <CheckBoxItem
                    id={"PersonalInformation"} 
                    label="Personal information"
                    value={false}
                    onValue={value => {
                        setinputCheckBox(value);
                    }}
                    onTicker={value => {
                        setTicker(value);
                    }}
                    onRemove={value => {
                        setInputRemove(value);
                    }}
                />
                <CheckBoxItem
                    id={"NotUseful"}
                    label="Not useful"
                    value={false}
                    onValue={value => {
                        setinputCheckBox(value);
                    }}
                    onTicker={value => {
                        setTicker(value);
                    }}
                    onRemove={value => {
                        setInputRemove(value);
                    }}
                />
                <ReportCheckBoxOther
                    id={"Other"}
                    label="Other"
                    value={false}
                    onValue={(value) => {
                        setinputCheckBox(value);
                    }}
                    onTicker={(value) => {
                        setTicker(value);
                    }}
                    onRemove={(value) => {
                        setInputRemove(value);
                    }}
                />
                <View style={styles.sendButton}>
                    <TouchableOpacity style={styles.btnSend}>
                        <Text style={styles.textSend}>SEND</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    );
};

export default ReviewReport;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10152F',
        paddingHorizontal: 25,
        paddingVertical: 40,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    row: {
        flexDirection: 'row',
    },
    CaretLeft: {
        flex: 1,
    },
    headerContent: {
        flex: 5,
        alignItems: 'center',
    },
    component: {
        flex: 1,
        backgroundColor: '#10152F',
    },
    mainContainer: {
        flex: 1,
        paddingTop: 40,
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 16,
        color: '#EEF0FF',
    },
    checkbox: {
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    text: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#EEF0FF',

    },
    btnSend: {
        backgroundColor: '#95EDFF',
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
    },
    textSend: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
    },
    otherTextInput: {
        flex: 1,
        fontFamily: 'RedHatText',
        fontSize: 16,
        backgroundColor: '#10152F',
    },
    sendButton: {
        paddingTop: 40,
    },
});
