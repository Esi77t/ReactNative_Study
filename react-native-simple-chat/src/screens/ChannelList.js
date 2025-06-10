import { Text } from "react-native"
import styled from "styled-components";
import { Button } from "../components";

const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.background };
    justify-content: center;
    align-items: center;
`

const ChannelList = ({ navigation }) => {
    return(
        <Container>
            <Text style={{ fontSize: 24, }}>ChannelList</Text>
            <Button
                title="Channel Creation"
                onPress={() => navigation.navigate('Channel Creation')}
            />
        </Container>
    )
}

export default ChannelList;