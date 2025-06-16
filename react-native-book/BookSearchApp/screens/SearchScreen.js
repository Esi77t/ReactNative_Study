import { Alert, Button, FlatList, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import BookItem from "../components/BookItem";
import { useState } from "react";
import searchBooks from "../api/naverApi";

const SearchScreen = ({ navigation }) => {

    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const onSearch = async () => {
        if(!query.trim()) {
            Alert.alert('검색어를 입력해주세요')
            return;
        }

        try {
            const results = await searchBooks(query.trim());
            if(results.length === 0) {
                Alert.alert('검색 결과가 없습니다');
                return;
            }
            setBooks(results);
        } catch (error) {
            Alert.alert('에러 발생!');
        }
    }

    const renderItem = ({ item }) => {
        return(
            <BookItem
                item={ item }
                onPress={() => navigation.navigate('Detail', { book: item })}
            />
        );
    }

    return(
        <SafeAreaView style={ styles.container }>
            <View style={ styles.searchContainer }>
                <TextInput
                    style={ styles.searchInput }
                    placeholder="검색어를 입력하세요"
                    value={ query }
                    onChangeText={ setQuery }
                    onSubmitEditing={ onSearch }
                />
                <Button title="검색" onPress={ onSearch } />
            </View>
            <FlatList
                data={ books }
                keyExtractor={(item) => item.isbn }
                renderItem={ renderItem }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },

    searchContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    searchInput: {
        flex: 1,
        borderColor: 'grey',
        borderWidth: 0.5,
        marginRight: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
    },
})

export default SearchScreen;