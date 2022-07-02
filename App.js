import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import { CATEGORIES } from './data/dummy-data';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavScreen from './screens/FavScreen';
import FavContextProvider from './store/context/fav-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
      headerStyle : {
        backgroundColor : '#351401',
      },
      headerTintColor : 'white',
      screenContainerStyle: {backgroundColor : '#3f2f25'},
      drawerContentStyle: {backgroundColor: 'brown'},
      drawerActiveTintColor: 'yellow',
      drawerInactiveTintColor: 'white',
      drawerActiveBackgroundColor: 'red'
     }}>
      <Drawer.Screen name='Categories'
      component={CategoriesScreen}
      options = {{
        title: 'All Categories',
      }}/>
      <Drawer.Screen name='Fav Screen'
      component={FavScreen}/>
    </Drawer.Navigator>
  }


  return (
     <>
     <StatusBar style='dark'/>
     <FavContextProvider>
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
         component = {DrawerNavigator}
         options={{
           //title : 'All Categories',
           headerShown: false
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
      </FavContextProvider>
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
