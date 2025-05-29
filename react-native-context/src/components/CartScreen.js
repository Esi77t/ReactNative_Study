import { useContext } from "react"
import { Button, ScrollView, Text, View } from "react-native";
import CartContext from "../contexts/CartContext";

const CartScreen = () => {
    
    const { cart, dispatch } = useContext(CartContext);

    const addItem = () => {
        const newItem = { id: Date.now().toString(), name: 'New Item' };

        dispatch({ type: 'ADD_ITEM', payload: newItem });
    }

    const deleteItem = (id) => {
        dispatch({ type: 'DELETE_ITEM', payload: { id } });
    }

    return(
        <View style={{ flex: 1, padding: 30 }}>
            <Button title="상품 추가" onPress={ addItem } />
            <ScrollView style={{ marginTop: 20}}>
                { cart.map((item) => (
                    <View key={item.id}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: 5,
                        padding: 10,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 4,
                    }}
                    >
                        <Text>{ item.name }</Text>
                        <Button title="상품 제거" onPress={ () => deleteItem(item.id) }></Button>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default CartScreen;