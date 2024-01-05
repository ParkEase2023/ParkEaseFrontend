import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import profile from '../assets/profile.png';
import { EnvelopeSimple, Phone, PencilSimple, Wallet, CoinVertical, CaretRight, Bell, ClockCounterClockwise, Car, IdentificationBadge, UserList, SignOut } from 'phosphor-react-native';
import RequireLogin from '../components/RequireLogin';
const Profile = () => {
  return (
    <RequireLogin>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.circleBig} />
          <Text style={styles.title}>Profile</Text>

          <View style={styles.profileContainer}>
            <View style={styles.mainProfileContainer}>
              <Image source={profile} style={styles.imageProfile} />

              <View style={styles.dataProfile}>
                <Text style={styles.name}>Kierra Aminoff</Text>

                <View style={styles.email}>
                  <EnvelopeSimple size={20} weight="fill" color="#7F85B2" />
                  <Text style={styles.textProfile}>kierra.ami@gmail.com</Text>
                </View>

                <View style={styles.phone}>
                  <Phone size={20} weight="fill" color="#7F85B2" />
                  <Text style={styles.textProfile}>089-555-0120</Text>
                </View>
              </View>
            </View>

            <View style={styles.bgBtnEdit}>
              <PencilSimple size={24} weight="fill" style={styles.btnEdit} />
            </View>
          </View>

          <TouchableOpacity style={styles.btnRectangle}>
            <View style={styles.itemLeft}>
              <View style={styles.bgIcon}>
                <Wallet size={22} weight="fill" color="#EEF0FF" />
              </View>
              <Text style={styles.textBody}>Remaining Balance</Text>
            </View>

            <View style={styles.itemRight}>
              <CoinVertical size={22} weight="fill" color="#2C2F4A" />
              <Text style={styles.textBold}>0</Text>
              <CaretRight size={22} weight="bold" color="#7F85B2" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRectangle}>
            <View style={styles.itemLeft}>
              <View style={styles.bgIcon}>
                <Bell size={22} weight="fill" color="#EEF0FF" />
              </View>
              <Text style={styles.textBody}>Notification</Text>
            </View>

            <CaretRight size={22} weight="bold" color="#7F85B2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRectangle}>
            <View style={styles.itemLeft}>
              <View style={styles.bgIcon}>
                <ClockCounterClockwise size={22} weight="bold" color="#EEF0FF" />
              </View>
              <Text style={styles.textBody}>Booking History</Text>
            </View>

            <CaretRight size={22} weight="bold" color="#7F85B2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRectangle}>
            <View style={styles.itemLeft}>
              <View style={styles.bgIcon}>
                <Car size={22} weight="fill" color="#EEF0FF" />
              </View>
              <Text style={styles.textBody}>My Parking</Text>
            </View>

            <CaretRight size={22} weight="bold" color="#7F85B2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRectangle}>
            <View style={styles.itemLeft}>
              <View style={styles.bgIcon}>
                <IdentificationBadge size={22} weight="fill" color="#EEF0FF" />
              </View>
              <Text style={styles.textBody}>Verify Your Identity</Text>
            </View>

            <CaretRight size={22} weight="bold" color="#7F85B2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRectangle}>
            <View style={styles.itemLeft}>
              <View style={styles.bgIcon}>
                <UserList size={22} weight="bold" color="#EEF0FF" />
              </View>
              <Text style={styles.textBody}>Apply For Membership</Text>
            </View>

            <CaretRight size={22} weight="bold" color="#7F85B2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRectangle}>
            <View style={styles.itemLeft}>
              <View style={styles.bgIconLogOut}>
                <SignOut size={22} weight="bold" color="#EEF0FF" />
              </View>
              <Text style={styles.textBody}>Log Out</Text>
            </View>

            <CaretRight size={22} weight="bold" color="#7F85B2" />
          </TouchableOpacity>

          <View style={styles.circleSmall} />
        </View>

      </SafeAreaView>
    </RequireLogin>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7DAEF',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  circleBig: {
    position: 'absolute',
    width: 287,
    height: 287,
    borderRadius: 200,
    backgroundColor: '#262D57',
    top: -72,
    left: -144,
  },
  title: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 24,
    color: '#fff',
    marginTop: 65,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 47,
    marginBottom: 35,
    paddingLeft: 18,
    borderRadius: 12,
  },
  mainProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  imageProfile: {
    width: 81,
    height: 81,
    borderRadius: 100,
  },

  dataProfile: {
    marginHorizontal: 25,
  },
  name: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 16,
    color: '#10152F',
    marginBottom: 16,
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  phone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textProfile: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 14,
    color: '#7F85B2',
    marginLeft: 8,
  },

  bgBtnEdit: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 115,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#EEF0FF',
  },
  btnEdit: {
    color: '#262D57',
    marginHorizontal: 13,
  },

  btnRectangle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgIcon: {
    backgroundColor: '#262D57',
    borderRadius: 100,
    padding: 8,
    marginRight: 16,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBody: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 16,
    color: '#10152F',
    marginRight: 16,
  },
  textBold: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 16,
    color: '#10152F',
    marginRight: 8,
  },

  bgIconLogOut: {
    backgroundColor: '#EA4C4C',
    borderRadius: 100,
    padding: 8,
    marginRight: 16,
  },
  circleSmall: {
    zIndex: -1,
    position: 'absolute',
    width: 95,
    height: 95,
    borderRadius: 100,
    backgroundColor: '#7F85B2',
    bottom: 8,
    right: -20,
  },
})