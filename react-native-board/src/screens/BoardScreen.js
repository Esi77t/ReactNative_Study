import { FlatList } from "react-native";
import styled from "styled-components";
import Dumydata from "../data/Dumydata";
import PostItem from "../components/PostItem";
import FloatingButton from "../components/FloatingButton";

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background };
`

const BoardScreen = ({ navigation }) => {

    const _handlePress = (item) => {
        navigation.navigate('Detail', { post: id });
    }

    return(
        <Container>
            <FlatList
                data={ Dumydata }
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PostItem item={ item } onPress={ _handlePress } />}
            />
            <FloatingButton onPress={() => navigation.navigate('Write')} />
        </Container>
    )
}

export default BoardScreen;