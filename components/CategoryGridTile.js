import { Pressable, View, Text, StyleSheet } from "react-native";



function CategoryGridTile({title, color, onPress}) {
    return <View style={[styles.gridItem, {backgroundColor : color} ]}>
        <Pressable android_ripple={{color : 'grey'}} 
        style={styles.button}
        onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem : {
        flex : 1,
        margin : 16,
        height : 150,
        borderRadius : 8,
        elevation : 10,
        shadowOpacity : 0.25,
        shadowOffset : { width : 0, height : 2},
        shadowRadius : 8,
        overflow : 'hidden'
    },
    button : {
        flex : 1,
    },
    innerContainer : {
        flex : 1,
        padding : 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title : {
        fontWeight : 'bold',
        fontSize : 18
    }
})