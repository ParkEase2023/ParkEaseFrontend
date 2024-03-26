import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Bank, CalendarPlus, CaretDown, CaretLeft, CaretRight, Clock, CoinVertical, IdentificationCard, MapPin, Phone, Scroll, User } from "phosphor-react-native";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { ProfileParamList } from "../stack/ProfileStack";
import MyCalendarPicker from "../components/CalenderPicker";

const Booking = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const handleBook = async () => {
        console.log('book');
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={22} color="#10152F" />
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.headerText}>Booking</Text>
                </View>
            </View>
            <View style={styles.line}></View>
        <ScrollView>
            <View style={styles.content}>
                <Text style={styles.headerText}>อาคารจอดรถ 5 ชั้น</Text>
                <View style={styles.space}></View>
                    <View style={styles.boxText}>
                        <View style={styles.iconPosition}>
                            <CoinVertical size={24} color="#262D57" weight="fill"/>
                        </View>
                        <Text style={styles.bodytext}>10 Coins / hr</Text>
                    </View>
                    <View style={styles.boxText}>
                        <View style={styles.iconPosition}>
                            <MapPin size={24} color="#262D57" weight="fill"/>
                        </View>
                        <Text style={styles.bodytext}>126 Pracha Uthit Rd, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140</Text>
                    </View>
                    <View style={styles.boxText}>
                        <View style={styles.iconPosition}>
                            <Clock size={24} color="#262D57" weight="fill"/>
                        </View>
                        <Text style={styles.bodytext}>Mo-Sat | 07:00 - 22:00</Text>
                    </View>
                    <View style={styles.boxText}>
                        <View style={styles.iconPosition}>
                            <User size={24} color="#262D57" weight="fill"/>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.bodytext}>Provider by </Text>
                            <Text style={styles.headerText}>Brandon Stanton</Text>
                        </View>
                    </View>
                    <View style={styles.boxText}>
                        <View style={styles.iconPosition}>
                            <Phone size={24} color="#262D57" weight="fill"/>
                        </View>
                        <Text style={styles.headerText}>085-678-268</Text>
                    </View>
                    <View style={[styles.textbox1]}>
                        <View style={styles.iconPosition}>
                            <View style={styles.row}>
                                <CalendarPlus size={24} />
                                    <Text
                                        style={styles.inputBank}>
                                        Start date & time
                                    </Text>
                                <View>
                                    <CaretRight size={24} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.textbox1}>
                        <View style={styles.iconPosition}>
                            <View style={styles.row}>
                                <CalendarPlus size={24} weight="fill" />
                                    <Text
                                        style={styles.inputBank}>
                                        End date & time
                                    </Text>
                                <View>
                                    <CaretRight size={24} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.space}></View>
                    <View style={styles.row}>
                        <View style={[styles.textboxName]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Name"
                                    keyboardType= "email-address"
                                />
                                </View>
                            <View style={[styles.textboxLastname]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Last name"
                                    keyboardType= "email-address"
                                />
                            </View>
                        </View> 
                        <View style={[styles.textbox1]}>
                            <View style={styles.iconPosition}>
                                <View style={styles.row}>
                                    <Phone size={24} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="phone number"
                                        keyboardType= "email-address"
                                    />
                                    <View>
                                        <CaretRight size={24} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    <View style={styles.space}></View>
                    <View style={styles.row}>
                        <View style={[styles.textboxName]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Car model"
                                    keyboardType= "email-address"
                                />
                                </View>
                            <View style={[styles.textboxLastname]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Car color"
                                    keyboardType= "email-address"
                                />
                            </View>
                        </View> 
                    <View style={[styles.textbox1]}>
                            <View style={styles.iconPosition}>
                                <View style={styles.row}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Car registration"
                                    keyboardType= "email-address"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.row}>
                    <Text style={styles.footerText}>Number of hours:</Text>
                    <Text style={styles.footerText}>0 hr</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.footerText}>Total price:</Text>
                    <Text style={styles.footerText}>0 Coin</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnBook} onPress={handleBook}>
                        <Text style={styles.textBook}>Book</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
    );
}
export default Booking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF0FF',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: 40
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 16,
        color: '#262D57',
        fontFamily: 'RedHatText',
        fontWeight: 'bold',
    },
    space: {
        paddingVertical: 5,
    },
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        paddingTop: 15,
        width: '100%'
    },
    content: {
        paddingVertical: 25,
        paddingHorizontal: 25,
    },
    boxText: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
    },
    bodytext: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#262D57',
    },
    iconPosition: {
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textboxName: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
        width: '48%',
        padding: 10,
    },
    textboxLastname: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
        width: '48%',
        padding: 10,
    },
    input: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#262D57',
        flex: 1,
        paddingVertical: 5,

    },
    textbox1: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
        padding: 10,
        width: '100%',
        marginTop: 20
    },
    inputBank: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#262D57',
        flex: 1,
        paddingVertical: 5,
        paddingLeft: 10
    },
    footer: {
        backgroundColor: '#10152F',
        paddingVertical: 25,
        paddingHorizontal: 25,
    },  
    footerText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#EEF0FF',
        paddingBottom: 5,
    },
    btnBook: {
        backgroundColor: '#FEFA94',
        borderRadius: 15,
        elevation: 2,
        marginTop: 20,
        width: '100%',
        height: 55,
    },
    textBook: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        lineHeight: 55,
    }

});
