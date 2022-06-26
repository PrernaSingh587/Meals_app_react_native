import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import { CATEGORIES } from './data/dummy-data';
import MealDetailsScreen from './screens/MealDetailsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <>
     <StatusBar style='dark'/>
     <NavigationContainer>
       <Stack.Navigator
       screenOptions={{
        headerStyle : {
          backgroundColor : '#351401',
        },
        headerTintColor : 'white',
        contentStyle: {backgroundColor : '#3f2f25'}
       }}>
         <Stack.Screen name="MealsCategories" 
         component = {CategoriesScreen}
         options={{
           title : 'All Categories',
          //  headerStyle : {
          //    backgroundColor : '#351401',
          //  },
          //  headerTintColor : 'white',
          //  contentStyle: {backgroundColor : '#3f2f25'}
         }} />
         <Stack.Screen name="MealsOverview" 
         component = {MealsOverViewScreen}
         options={( {route, navigation} ) => {
            const catId = route.params.categoryId;
            const newtitle = CATEGORIES.find(cat => cat.id===catId).title
            return {
              title : newtitle
            }
         }}
         
        />
        <Stack.Screen name="MealDetail"
        component={MealDetailsScreen}
      // options={{headerRight : () => {
      //   return <Button title = 'fav me!'
      //   onPress={}/>
      // }}} 
      />
       </Stack.Navigator>
      </NavigationContainer>
      </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
