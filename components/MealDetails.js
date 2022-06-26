import { View, Text, StyleSheet } from 'react-native'


function MealDetails({duration, complexity, affordability, style, textStyle}) {
    return <View style={[styles.detailItems, style]}>
    <Text style={[styles.detailItems, textStyle]}>{duration}</Text>
    <Text style={[styles.detailItems, textStyle]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailItems, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
}

export default MealDetails;


const styles = StyleSheet.create({
    details : {
        alignItems : 'center',
        padding : 8
    },
    detailItems : {
        marginHorizontal : 5,
        flexDirection : 'row',
        justifyContent: 'space-around'

    }
})