import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Background from '../../../../components/static/backgound';
import T from 'react-native-i18n';
import styles from './index.styles';
import UsersListItem from '../../../../components/users/list-item';
import Margin from '../../../../components/utils/margin';
import {APP_GRAY, APP_PURPLE, APP_RED} from '../../../../constants';
import users from '../index.users';
import Input from '../../../../components/inputs/text';
import {Search, Filter} from 'react-native-iconly';
import CancelButton from '../../../../components/buttons/cancel';
import ValidateButton from '../../../../components/buttons/validate';
import axios from 'axios';

const MembersListScreen = ({navigation, route}) => {
 //console.log(route)
 
  const [isSelectable, setIsSelectable] = useState(true);
  const handleToggleSelection = val => {
    setIsSelectable(val);
  };

  const handlePressCancel = () => {
    navigation.pop();
  };

  const handleValidate = () => {
    saveNewItem()
  };
  const [users, setUsers] = useState();
  const [userName, setuserName] = useState();

  const [selectedIds, setSelectedIds] = useState([]);
  const handleSelect = id => {
    setSelectedIds(id);
    
      
  };
 
    axios
    .get(`http://192.168.1.14:9000/api/utilisateur/${selectedIds}`)
    .then(res => {
      setuserName(res.data.nom+' '+res.data.prenom);
      
    })
  
  const handleDeselect = id => {
    setSelectedIds('');
  };
  const handleSelection = (selected, id) => {
    if (selected) {
      handleDeselect(id);
    } else {
      handleSelect(id);
    }
  };
  
  
  useEffect(() => {
    axios
      .get('http://192.168.1.14:9000/api/utilisateur')
      .then(res => {
        setUsers(res.data);
      })
      .catch(function (error) {
        // handle error
        alert('on peut pas access au base de donnée');
      });
      
  }, []);
  
  function saveNewItem() {
    const objects2 = route
    const object4 = userName.toString()
    const objects = selectedIds.toString()
    
    console.log(object4)
      
  const objects3 = {
    userId: objects,
    userName: object4
  }
 Object.entries(objects3).forEach(([key,value]) => { objects2[key] = value })
    const userObject = objects2
   console.log(objects2)
    axios
      .post('http://192.168.1.14:9000/api/objet', userObject)
      .then(function (response) {
        
        

        navigation.navigate('Item Created');
      })
      .catch(function (error) {
        // handle error
        alert('il y a pas un error lors de sauvgarde des donneés');
      });
    
  }
  const [members, setMembers] = useState(users);
  const [text, setText] = useState('');
  const handleTextChange = text => {
    const ms = [];
    setText(text);
    users
      .filter(m => m.fullName.toUpperCase().includes(text.toUpperCase()))
      .forEach(member => {
        ms.push(member);
      });
    setMembers(ms);
  };

  const header = () => (
    <View style={styles.top}>
      <View style={styles.cancelContainer}>
        <TouchableOpacity onPress={handlePressCancel}>
          <Text style={styles.cancelText}>{T.t('categories.form.Cancel')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Administrateurs</Text>
      </View>
      <Margin mb1 />
      <View style={styles.searchContainer}>
        <Input
          value={text}
          placeholder={T.translate('members.list.Search')}
          small
          iconRight={<Search set="light" color={APP_GRAY} size={24} />}
          onChangeText={handleTextChange}
        />
      </View>
      <Margin mb1 />
      {true ? (
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={() => handleToggleSelection(false)}>
            
          </TouchableOpacity>
          
        </View>
      ) : (
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>
            {T.translate('members.list.actions.Filter')}
          </Text>
          <TouchableOpacity onPress={() => handleToggleSelection(true)}>
            <Filter set="light" color={APP_GRAY} size={24} />
          </TouchableOpacity>
        </View>
      )}
      
        
     
      <Margin mb1 />
    </View>
  );

  const footer = () => (
    <View style={styles.footer}>
      <CancelButton onPress={handlePressCancel} />
      <ValidateButton onPress={handleValidate} />
    </View>
  );
  return (
    <>
      <View style={styles.middle}>
        <FlatList
          data={users}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <UsersListItem
                key={item._id}
                name={item.nom}
                sexe={item.genre}
                name={item.nom + ' ' + item.prenom}
                localImage={{uri: item.image}}
                ribbonColor={item.ribbonColor}
                onPress={() =>
                  handleSelection(selectedIds.includes(item._id), item._id)
                }
                selectable={isSelectable}
                selected={selectedIds.includes(item._id)}
              />
            </View>
          )}
          contentContainerStyle={styles.contentContainerStyle}
          ListHeaderComponent={header()}
          ListFooterComponent={footer()}
        />
      </View>
      <Margin mb4 />
      <Background />
    </>
  );
};

export default MembersListScreen;
