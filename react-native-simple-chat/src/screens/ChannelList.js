import { Button, Text } from "react-native"
import styled from "styled-components";

const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.background };
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