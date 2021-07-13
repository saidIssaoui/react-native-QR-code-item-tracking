import React, {createContext, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {cardStyle} from './index.styles';
import CategoriesScreen from '../../../screens/categories';
import SubCategoriesScreen from '../../../screens/sub-categories';
import categories from '../../../components/static/tiles/categories/constants/tiles';
import subCategories from '../../../components/static/tiles/sub-categories/constants';
import PhotoScreen from '../../../screens/photo';
import ClothingFormScreen from '../../../screens/categories/forms/clothing';
import EquipmentFormScreen from '../../../screens/categories/forms/equipment';
import MultimediaFormScreen from '../../../screens/categories/forms/multimedia';
import VehiculeFormScreen from '../../../screens/categories/forms/vehicule';
import ToolsFormScreen from '../../../screens/categories/forms/tools';
import FurnitureFormScreen from '../../../screens/categories/forms/furniture';
import BooksAndDocumentsFormScreen from '../../../screens/categories/forms/books-and-documents';
import FixedFormScreen from '../../../screens/categories/forms/fixed';
import PersonDocumentsFormScreen from '../../../screens/categories/forms/clothing'; // personal-documents
import AttributionScreen from '../../../screens/members/attribution';
import MembersListScreen from '../../../screens/members/list';
import ItemCreatedScreen from '../../../screens/create-item/item-created';
import ScanScreen from '../../../screens/scan';

const CreateItemStack = createStackNavigator();
const CategoriesContext = createContext(categories);
const SubCategoriesContext = createContext(subCategories);

export {CategoriesContext, SubCategoriesContext};

export default () => (
  <CategoriesContext.Provider value={categories}>
    <SubCategoriesContext.Provider value={subCategories}>
      <CreateItemStack.Navigator
        screenOptions={{
          cardStyle,
          headerShown: false,
        }}>
        <CreateItemStack.Screen name="Photo" component={PhotoScreen} />
        <CreateItemStack.Screen
          name="Categories"
          component={CategoriesScreen}
        />
        <CreateItemStack.Screen
          name="Sub Categories"
          component={SubCategoriesScreen}
        />
        <CreateItemStack.Screen
          name="Item Created"
          component={ItemCreatedScreen}
        />
        <CreateItemStack.Screen
          name="Attribution"
          component={AttributionScreen}
        />
        <CreateItemStack.Screen
          name="Members List"
          component={MembersListScreen}
        />
        <CreateItemStack.Screen
          name="Vehicule Form"
          component={VehiculeFormScreen}
        />
        <CreateItemStack.Screen
          name="Multimedia Form"
          component={MultimediaFormScreen}
        />
        <CreateItemStack.Screen
          name="Furniture Form"
          component={FurnitureFormScreen}
        />
        <CreateItemStack.Screen name="Fixed Form" component={FixedFormScreen} />
        <CreateItemStack.Screen name="Tools Form" component={ToolsFormScreen} />
        <CreateItemStack.Screen
          name="Equipment Form"
          component={EquipmentFormScreen}
        />
        <CreateItemStack.Screen
          name="Books & Documents Form"
          component={BooksAndDocumentsFormScreen}
        />
        <CreateItemStack.Screen
          name="Clothing Form"
          component={ClothingFormScreen}
        />
        <CreateItemStack.Screen
          name="Personal Documents Form"
          component={PersonDocumentsFormScreen}
        />
        <CreateItemStack.Screen name="Scan" component={ScanScreen} />
      </CreateItemStack.Navigator>
    </SubCategoriesContext.Provider>
  </CategoriesContext.Provider>
);
