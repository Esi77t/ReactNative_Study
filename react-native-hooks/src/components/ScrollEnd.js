import { useRef } from "react"
import { Button, ScrollView, Text, View } from "react-native";

const ScrollEnd = () => {
    const scrollRef = useRef(null);

    const handleScrollToBottom = () => {
        scrollRef.current?.scrollToEnd({ animated: true })
    }

    return(
        <View style={{ flex: 1 }}>
            <Button title="맨 아래로 스크롤" onPress={ handleScrollToBottom } />
            <ScrollView ref={ scrollRef } style={{ marginTop: 10, padding: 10 }}>
                { Array.from({ length: 30,}, (_, i) => (
                    <Text key={ i } style={{ fontSize: 18, margin: 5, }}>
                        아이템 { i + 1 }
                    </Text>
                )) }
            </ScrollView>
        </View>
    )
}

export default ScrollEnd