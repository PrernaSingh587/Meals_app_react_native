import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, Button } from 'react-native'
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { FavContext } from '../store/context/fav-context';

function MealDetailsScreen({route, navigation}) {
    const favMealsCtx = useContext(FavContext);

    const mealId = route.params.mealId;
    const meal = MEALS.find(m => m.id === mealId);
    const mealIsFav = favMealsCtx.ids.includes(mealId);
    
    function headerButtonPressHandler() {
        if(mealIsFav) {
            favMealsCtx.remFav(mealId);
        } else favMealsCtx.addFav(mealId)
    }

    
    useEffect(() => {
        navigation.setOptions({
            headerRight : () => {
                return <IconButton title='tap me!' 
                onPress={headerButtonPressHandler}
                icon={mealIsFav ? 'star' : 'star-outline'}
                color={'white'}
                />
            }
        })
    },[navigation, headerButtonPressHandler])

    return <ScrollView>
        <Image style={styles.image}
         source={{uri : meal.imageUrl}}/>
        <Text style={styles.title}>{meal.title}</Text>
        
        <MealDetails duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detailText} />
       
        <View style={styles.outerListContainer}>
        <View style={styles.listContainer}> 
        <Subtitle>Ingredients</Subtitle>
        
        <List data={meal.ingredients}/>
        <Subtitle>Steps</Subtitle>
        <List data={meal.steps}/>
         
         </View>
        
         </View>
         </ScrollView>
}

export default MealDetailsScreen;


const styles = StyleSheet.create({
    image : {
        width : '100%',
        height : 350
    },
    title : {
        fontWeight : 'bold',
        fontSize : 24,
        margin : 8,
        textAlign : 'center',
        color : 'white'
    },
    detailText : {
        color : 'white',

    },
    listContainer : {
        width : '80%',  
    },
    outerListContainer : {
        alignItems : 'center'
    }
})