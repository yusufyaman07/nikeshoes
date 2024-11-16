import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import CartScreen from '../screens/Cart';
import {useNavigation} from '@react-navigation/native';
import CartIcon from 'react-native-vector-icons/FontAwesome';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {selectNumberOfItems} from '../store/cartSlice';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation();
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
      <Stack.Screen
        name="Products"
        component={HomeScreen}
        navigation={navigation}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => navigation.navigate('Cart')}>
                <CartIcon
                  name="shopping-cart"
                  size={28}
                  color="gray"
                  style={{marginRight: 10}}
                />
                <Text
                  style={{
                    backgroundColor: '#ff6f61',
                    color: 'white',
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 15,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 14,
                    minWidth: 30,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  }}>
                  {numberOfItems}
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
