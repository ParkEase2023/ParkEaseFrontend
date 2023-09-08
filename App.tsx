/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { LogBox } from 'react-native';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const state = {
  tableHead: ['จำนวน \n QUANTITY \n 數量', 'รายการ \n DESCRIPTION \n 描述', 'หน่วยละ \n UNIT PRICE \n 單價', 'จำนวนเงิน \n AMOUNT \n 數量'],
  tableTitle: ['', '', '', '', '', '', '', '', '', ''],
  tableData: [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ]
}

// LogBox.ignoreAllLogs();


function Section({ children, title }: SectionProps): JSX.Element {
  return (
    <View className="mt-8 px-2 ">
      <Text className="text-sm text-black dark:text-white font-black">
        {title}
      </Text>
      <Text className="mt-2 text-sm text-black dark:text-white">
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = "bg-neutral-300 dark:bg-slate-900"

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.textWrapper, { padding: 5 }]}>


        <View className=' w-full h-24' >
          <View className='h-24 flex items-center' style={{ flex: 1, flexDirection: 'row', columnGap: 5, paddingLeft: 5 }}>
            <View className='px-5 h-20  text-sm  bg-blue-200' style={{ flex: 4, borderRadius: 10 }}>
              <Text className='h-16' style={{ textAlignVertical: "center", textAlign: "center", }}></Text>
            </View>
            <View style={{ flex: 1, borderStyle: 'solid', borderRightWidth: 1, borderColor: 'blue', borderBottomWidth: 1 }} className='-mr-2 h-20'>
              <Text className=' text-lg pl-2  text-blue-600 font-bold'>เล่มที่</Text>
              <Text className='text-center text-blue-600 font-bold' style={{ fontSize: 10 }}>BOOK NO.</Text>
            </View>
            <View style={{ flex: 1, borderStyle: 'solid', borderColor: 'blue', borderBottomWidth: 1 }} className='h-20'>
              <Text className='text-lg pl-2 text-blue-600 font-bold'>เลขที่</Text>
              <Text className='text-center text-blue-600 font-bold' style={{ fontSize: 10 }}>BILL NO.</Text>
            </View>
          </View>
        </View>

        <View className='w-full h-16 bg-blue-700' style={{ marginTop: -2 }}>
          <Text className=' text-2xl text-white font-bold' style={{ textAlignVertical: "center", textAlign: "center", }}>
            บิลเงินสด
          </Text>
          <Text className='text-base text-white font-normal' style={{ textAlignVertical: "center", textAlign: "center", }}>CASH BILL  现金账单  CASH BILL</Text>
        </View>

        <View className='w-full mb-6 mt-4'>
          <View className='w-full h-14'>
            <View style={{ flex: 1, flexDirection: "row" }} className='mt-2 h-14'>
              <View style={{ flex: 3 }} className='pl-2'>
                <Text className='text-xs font-semibold text-blue-600' style={{ textAlignVertical: "bottom", textAlign: "left", }}>นาม{"\n"}NAME</Text>
              </View>
              <View style={{ flex: 2 }} className=''>
                <Text className='text-xs font-semibold text-blue-600' style={{ textAlignVertical: "bottom", textAlign: "left", }}>วันที่{"\n"}DATE</Text>
              </View>
            </View>
          </View>


          <View style={{ flex: 1, flexDirection: "row" }} className='-mt-6'>
            <View className='h-1' style={{ borderStyle: 'solid', borderColor: 'grey', borderBottomWidth: 1, marginLeft: 43, width: 200 }}>
            </View>
            <View className='h-1 ' style={{ borderStyle: 'solid', borderColor: 'grey', borderBottomWidth: 1, marginLeft: 32, width: 125 }}>
            </View>
          </View>
        </View>


        <View className='h-14 mt-2'>
          <View style={{ flex: 1, flexDirection: "row" }} className=' h-14'>
            <View style={{ flex: 3 }} className='pl-2'>
              <Text className='text-xs font-semibold text-blue-600' style={{ textAlignVertical: "bottom", textAlign: "left", }}>ที่อยู่{"\n"}ADDRESS</Text>
            </View>
            <View style={{ flex: 2 }} className='-ml-40'>
              <Text className='text-xs font-semibold text-blue-600' style={{ textAlignVertical: "bottom", textAlign: "left", }}>เลขประจำตัวประชาชน{"\n"}ID number</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }} className='-mt-9'>
            <View className='h-1' style={{ borderStyle: 'solid', borderColor: 'grey', borderBottomWidth: 1, marginLeft: 32, width: 145 }}>
            </View>
            <View className='h-1 ' style={{ borderStyle: 'solid', borderColor: 'grey', borderBottomWidth: 1, marginLeft: 125, width: 100 }}>
            </View>
          </View>
        </View>

        <View className='h-72 -mt-3'>
          {/* <View style={{ borderStyle: 'solid', borderColor: "blue", borderWidth: 1 }} className='h-16'>

          </View> */}

          <Table borderStyle={{ borderWidth: 1.5, borderColor: "blue" }}>
            <Row data={state.tableHead} flexArr={[1, 3, 1, 1]} style={styles.head} textStyle={styles.text} />
            <TableWrapper style={styles.wrapper}>
              {/* <Col data={state.tableTitle}  style={styles.title} heightArr={[28, 28]} textStyle={styles.text} /> */}
              <Rows data={state.tableData} flexArr={[1, 3, 1, 1]} style={styles.row} textStyle={styles.text} />
            </TableWrapper>
          </Table>
        </View>

        <View className='w-full mt-16' style={{ height: 60 }}>
          <View style={{ borderStyle: 'solid', borderColor: "blue", borderBottomWidth: 1.5, height: 60, borderLeftWidth: 1, borderRightWidth: 1, flex: 1, flexDirection: "row" }} className=' bg-blue-200'>
            <View style={{ flex: 1, borderStyle: 'solid', borderColor: "blue", borderRightWidth: 1.5, height: 60, justifyContent: 'center' }}>
              <Text style={{ textAlignVertical: "center", textAlign: "center", fontSize: 11, }} className='text-blue-700 font-bold'>บาท{"\n"}BAHT{"\n"}銖</Text>
            </View>
            <View style={{ flex: 3, borderStyle: 'solid', borderColor: "blue", borderRightWidth: 1.5, height: 60, justifyContent: 'center' }}>
              <Text style={{ textAlignVertical: "center", textAlign: "center", fontSize: 11, }}></Text>
            </View>
            <View style={{ flex: 1, borderStyle: 'solid', borderColor: "blue", borderRightWidth: 1.5, height: 60, justifyContent: 'center' }}>
              <Text style={{ textAlignVertical: "center", textAlign: "center", fontSize: 11, }} className='text-blue-700 font-bold'>รวมเงิน{"\n"}TOTAL{"\n"}全部的</Text>
            </View>
            <View style={{ flex: 1, height: 60, justifyContent: 'center' }}>
              <Text style={{ textAlignVertical: "center", textAlign: "center", fontSize: 11, }}></Text>
            </View>
          </View>
        </View>


        <View className='w-full mb-6 mt-2'>
          <View className='w-full h-14'>
            <View style={{ flex: 1, flexDirection: "row" }} className='mt-2 h-14'>
              <View style={{ flex: 3 }} className='pl-2'>
                <Text className='text-sm font-bold text-blue-600' style={{ textAlignVertical: "bottom", textAlign: "left", }}>ผู้รับเงิน 集電極{"\n"}COLLECTOR</Text>
              </View>
            </View>
          </View>


          <View style={{ flex: 1, flexDirection: "row" }} className='-mt-4'>
            <View className='h-1' style={{ borderStyle: 'solid', borderColor: 'blue', borderBottomWidth: 1, marginLeft: 88, width: 201 }}>
            </View>
          </View>
        </View>









      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textWrapper: {
    height: hp('100%'), // 70% of height device screen
    width: wp('100%')   // 80% of width device screen
  },
  myText: {
    fontSize: hp('5%') // End result looks like the provided UI mockup
  },
  head: { height: 70, backgroundColor: 'rgb(191 219 254)' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center', color: 'blue', fontSize: 11, fontWeight: 'bold' }
});


export default App;
