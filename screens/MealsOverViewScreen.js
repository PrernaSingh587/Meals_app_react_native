import { View, Text, StyleSheet, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data'


function MealsOverViewScreen ({navigation, route}) {
    const ctId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => 
    {
        return mealItem.categoryIds.indexOf(ctId) >=0
    })

    function renderMealItem(itemData) {
        return <MealItem 
        id={itemData.item.id}
        imageUrl={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        title={itemData.item.title}/>
    }

    return <View style={styles.container}>
        <FlatList data = {displayedMeals} 
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />
    </View>
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 16
    }
})