import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import { FavContext } from '../store/context/fav-context';

function FavScreen() {
    const favCtx = useContext(FavContext);
    const ids = favCtx.ids;

    const favoriteMeals =MEALS.filter(meal => favCtx.ids.includes(meal.id));

    function renderMealItem(itemData) {
        console.log(itemData)
        return <MealItem
        id={itemData.item.id}
        imageUrl={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        title={itemData.item.title}/>
    }

    return (
        <View style={styles.container}>
        {favoriteMeals.length ? <FlatList data={favoriteMeals} 
        keyExtractor = {(item) => item.id}
        renderItem={renderMealItem}
        /> : <Text>No Fav Items Yet</Text>}
        </View>
    )
}

export default FavScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 16
    }
})