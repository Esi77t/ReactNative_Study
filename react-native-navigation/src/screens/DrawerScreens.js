import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

const HomeScreen = ({ navigation }) => {
    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>HomeScreen</Text>
        </View>
    )
}

const ProfileScreen = ({ navigation }) => {
    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>Profile Screen</Text>
        </View>
    )
}

const CustomDrawer = (props) => {
    return(
        <View style={{ flex: 1, }}>
            {/* 드로어 메뉴 스크롤 영역 */}
            <DrawerContentScrollView
                { ...props }
                contentContainerStyle={{ }}>
                    {/* 프로필 영역 */}
                    <View style={ styles.profileContainer }>
                        <Image
                            source={{ uri: 'https://i.namu.wiki/i/VOXnTntHPJ41TX7xh__s-dnZHNhO1JYYQ2KhJLBRjmXE5e2kYXCObkw9E6XeSFvc7w-3mE1z6BLido2HtIFo_Q.webp' }}
                            style={ styles.profileImage }
                        />
                        <Text style={ styles.profileName }>홍길동</Text>
                        <Text style={ styles.profileEmail }>one@korea.com</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                        <DrawerItemList { ...props } />
                    </View>
            </DrawerContentScrollView>
            {/* 하단 고정 로그아웃 버튼 */}
            <View style={ styles.logoutContainer }>
                <Pressable onPress={ () => alert('로그아웃') }>
                    <Text style={ styles.logoutText }>로그아웃</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    
    profileContainer: {
        padding: 20,
        alignItems: 'center',
    },

    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marignBottom: 10,
    },

    profileName: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },

    profileEmail: {
        color: '#000',
        fontSize: 14,
    },

    logoutContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    },

    logoutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e53935',
    }
})

export { HomeScreen, ProfileScreen, CustomDrawer };