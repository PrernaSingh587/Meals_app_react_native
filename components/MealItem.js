import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable,Image, StyleSheet } from "react-native";
import MealDetails from "./MealDetails";



function MealItem ({ id, title , imageUrl, duration, complexity, affordability}) {

    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId : id
        })
    }
    

    return (
        <View style={styles.mealItem}>
            <Pressable 
            onPress={selectMealItemHandler}
            android_ripple={{color : 'grey'}}>
                <View style={styles.details}>
                    <Image style = {styles.image}
                     source={{uri : imageUrl}} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails complexity={complexity}
                duration={duration}
                affordability={affordability} />
            </Pressable>
            
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    image : {
        width : '100%',
        height : 200,
        margin : 10
    },
    title : {
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 18,
    },
    mealItem : {
        margin : 16,
        borderRadius : 8,
        overflow : 'hidden',
        backgroundColor: 'white',
        elevation : 4,
        shadowOpacity : 0.25,
        shadowOffset : { width : 0, height : 2},
        shadowRadius : 8,
    },
   
})