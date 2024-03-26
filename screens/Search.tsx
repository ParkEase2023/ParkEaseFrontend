import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CaretLeft, MagnifyingGlass } from 'phosphor-react-native';
import ContentSearch from '../components/ContentSearch';

const Search = () => {
    return (
        <View style={styles.bg}>
                <View style={styles.searchContainer}>
                    <View style={styles.inner}>
                        <TouchableOpacity style={styles.arrow}>
                            <CaretLeft size={22} weight="bold" color="#DFE2F8" />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.field}
                            placeholder="Search"
                            placeholderTextColor="#DFE2F8"
                        />
                        <TouchableOpacity style={styles.search}>
                            <MagnifyingGlass size={22} weight="bold" color="#DFE2F8" />
                        </TouchableOpacity>
                    </View>
                </View>
            <ScrollView style={styles.container}>
                <ContentSearch/>
            </ScrollView>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#10152F'
    },
    searchContainer: {
        position: 'absolute',
        flex: 1,
        marginHorizontal: 16,
        marginTop: 10,
        elevation: 3
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    arrow: {
        position: 'absolute',
        left: 12,
        zIndex: 2
    },
    field: {
        backgroundColor: '#262D57',
        height: 48,
        width: '100%',
        paddingLeft: 46,
        fontFamily: 'Fredoka-Regular',
        fontSize: 16,
        borderRadius: 12
    },
    search: {
        position: 'absolute',
        right: 12,
        zIndex: 2
    },
    container: {
        marginTop: 60,
        paddingHorizontal: 16
    },
});
