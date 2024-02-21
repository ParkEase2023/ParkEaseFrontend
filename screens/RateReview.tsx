import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    Touchable,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Star, X } from 'phosphor-react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeParamList } from '../stack/HomeStack';
import RequireLogin from '../components/RequireLogin';
import { getProfile } from '../services/user';
import StarRating from '../components/StarRating';
import { createComment } from '../services/comment';
import Modal from 'react-native-modal';
import Good from '../assets/Good.png';

export interface IProfile {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    profile_picture: string;
}

const RateReview = () => {
    const [profile, setProfile] = React.useState<IProfile>({
        _id: '',
        firstname: '',
        lastname: '',
        email: '',
        profile_picture:
            'http://res.cloudinary.com/di71vwint/image/upload/v1674291349/images/nsopymczagslnr78yyv5.png'
    });
    const { params } = useRoute<RouteProp<HomeParamList, 'Review'>>();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [visible, setVisible] = useState(false);
    const getUserProfile = async () => {
        const { data } = await getProfile();
        setProfile(data);
    };

    const handleOpenmodal = () => {
        const duration = 3 * 1000;
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
            postComment();
            navigation.replace('Home');
        }, duration);

        return () => clearTimeout(timer);
    };

    useEffect(() => {
        getUserProfile();
    }, []);

    const postComment = async () => {
        const createcomment: any = await createComment({
            createBy: profile._id,
            parkingId: params.parkingId,
            comment: review,
            rate: rating
        });
    };

    const navigation = useNavigation<NativeStackNavigationProp<HomeParamList>>();
    return (
        <RequireLogin>
            <View style={styles.container}>
                <View style={styles.rowTitle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <X size={22} weight="bold" color="#EEF0FF" />
                    </TouchableOpacity>
                    <Text style={styles.title}>{params.parking_name}</Text>
                </View>

                <View style={styles.rowDetailComment}>
                    <Image source={{ uri: profile.profile_picture }} style={styles.smallProfile} />
                    <View style={styles.detailComment}>
                        <Text style={styles.name}>
                            {profile.firstname} {profile.lastname}
                        </Text>
                        <Text style={styles.label}>Public posting</Text>
                    </View>
                </View>

                <View style={styles.rowStar}>
                    <StarRating
                        onSelected={value => {
                            setRating(value);
                        }}
                    />
                </View>

                <Text style={styles.label}>Share your experience about this place.</Text>

                <View style={{ marginTop: 8 }}>
                    <TextInput
                        onChangeText={text => setReview(text)}
                        style={styles.textInputMultiLine}
                        placeholder="What do you think about this place?"
                        placeholderTextColor="#7F85B2"
                        cursorColor={'#FEFA94'}
                        multiline={true}
                        numberOfLines={500}
                    />
                </View>

                <TouchableOpacity style={styles.btnPost} onPress={handleOpenmodal}>
                    <Text style={styles.textPost}>POST</Text>
                </TouchableOpacity>

                <Modal isVisible={visible} backdropOpacity={0.9} backdropColor="#262D57">
                    <View style={styles.modalContainer}>
                        <Image source={Good} style={styles.imageGood} />
                        <Text style={styles.modalText}>Finished!</Text>
                        <Text style={styles.modalText2}>Yahoo! You addcoin successfully.</Text>
                    </View>
                </Modal>
            </View>
        </RequireLogin>
    );
};

export default RateReview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10152F',
        padding: 25
    },
    rowTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: '#EEF0FF',
        fontFamily: 'RedHatText-Regular',
        fontSize: 18,
        marginLeft: 20
    },
    rowDetailComment: {
        flexDirection: 'row',
        marginTop: 50
    },
    smallProfile: {
        width: 36,
        height: 36,
        borderRadius: 100
    },
    detailComment: {
        marginLeft: 10
    },
    name: {
        color: '#EEF0FF',
        fontFamily: 'RedHatText-Regular',
        fontSize: 14
    },
    label: {
        color: '#D3D3D3',
        fontFamily: 'RedHatText-Regular',
        fontSize: 14
    },
    rowStar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 16,
        marginBottom: 35
    },
    textInputMultiLine: {
        color: '#CED2EA',
        height: 115,
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#262D57',
        textAlignVertical: 'top'
    },
    btnPost: {
        backgroundColor: '#FEFA94',
        width: '100%',
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40
    },
    textPost: {
        color: '#262D57',
        fontSize: 16,
        fontWeight: 'bold'
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF0FF',
        borderRadius: 16,
        paddingHorizontal: 25,
        marginHorizontal: 35
    },
    imageGood: {
        marginTop: -115,
        marginBottom: 16
    },
    modalText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#10152F',
        marginBottom: 16
    },
    modalText2: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#262D57',
        textAlign: 'center',
        marginBottom: 30
    }
});
