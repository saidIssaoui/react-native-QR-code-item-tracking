import React, {useState, useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import T from 'react-native-i18n';
import {Filter, Search, ChevronLeft, People} from 'react-native-iconly';
import Notification from '../../../../components/buttons/notification';
import UsersActions from '../../../../components/buttons/users-actions';
import Input from '../../../../components/inputs/text';
import UsersListItem from '../../../../components/users/list-item';
import Margin from '../../../../components/utils/margin';
import {APP_DARK_GRAY, APP_GRAY, APP_RED} from '../../../../constants';
import styles from './index.styles';
import users from '../index.users';
import Background from '../../../../components/static/backgound';
import axios from 'axios';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;

const MembersListScreen = ({navigation}) => {
  const [isSelectable, setIsSelectable] = useState(false);
  const handleToggleSelection = val => {
    setIsSelectable(val);
  };

  const handlePress = id => {
    navigation.navigate('Member Profile', {data: id});
  };

  const handlePressBack = () => {
    navigation.pop();
  };

  const [selectedIds, setSelectedIds] = useState([]);
  const handleSelect = id => {
    setSelectedIds(old => [...old, id]);
    setselectedItem(id);
  };
  const handleDeselect = id => {
    setSelectedIds(selectedIds.filter(element => element !== id));
  };
  const handleSelection = (selected, id) => {
    if (selected) {
      handleDeselect(id);
    } else {
      handleSelect(id);
    }
  };
  const handleSelectAll = () => {
    const arr = [];
    users.forEach(({_id}) => arr.push(_id));
    setSelectedIds(arr);
  };
  const handleDeselectAll = () => {
    setSelectedIds([]);
  };
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

  const handleDelete = () => {
    alert('Delete: \n' + JSON.stringify(selectedIds, null, 2));
  };

  const handleMove = () => {
    alert('Move: \n' + JSON.stringify(selectedIds, null, 2));
  };

  const [isPending, setIsPending] = useState(true);
  const handlePressNotification = () => {
    setIsPending(!isPending);
  };
  const [users, setUsers] = useState();
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
  const [refreshPage, setRefreshPage] = useState('');
  const [selectedItem, setselectedItem] = useState();
  function DeleteMember() {
    axios
      .delete(`http://192.168.1.14:9000/api/utilisateur/${selectedItem}`, {
        data: {id: selectedItem},
      })
      .then(function (response) {
        // handle success
        alert('Membre a ete supprimer avec succes ');
        navigation.navigate('Member');
      })
      .catch(function (error) {
        // handle error
        alert('il y a un error lors de supprission des donneés');
      });
  }
  const header = () => (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
        <Notification pending={isPending} onPress={handlePressNotification} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Administrators</Text>
        <Margin mb3 />
      </View>
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
      {isSelectable ? (
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={() => handleToggleSelection(false)}>
            <Text style={styles.filterText}>
              {selectedIds.length}{' '}
              {T.translate('members.list.actions.selected')}
            </Text>
          </TouchableOpacity>
          {selectedIds.length === users.length ? (
            <TouchableOpacity onPress={handleDeselectAll}>
              <Text style={styles.selectText}>
                {T.translate('members.list.actions.Deselect all')}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleSelectAll}>
              <Text style={styles.selectText}>
                {T.translate('members.list.actions.Select all')}
              </Text>
            </TouchableOpacity>
          )}
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
                name={item.name}
                sexe={item.genre}
                name={item.nom + ' ' + item.prenom}
                localImage={{uri: item.image}}
                ribbonColor={item.ribbonColor}
                onPress={() =>
                  isSelectable
                    ? handleSelection(selectedIds.includes(item._id), item._id)
                    : handlePress(item)
                }
                selectable={isSelectable}
                selected={selectedIds.includes(item._id)}
              />
            </View>
          )}
          contentContainerStyle={styles.contentContainerStyle}
          ListHeaderComponent={header()}
          ListFooterComponent={
            <View
              style={{
                ...styles.filler,
                marginVertical: isSelectable ? 64 : 32,
              }}
            />
          }
        />
      </View>
      {isSelectable && (
        <UsersActions
          textLeft={T.translate('members.list.actions.Delete')}
          textRight={T.translate('members.list.actions.Move')}
          onPressLeft={DeleteMember}
          onPressRight={handleMove}
        />
      )}
      <Background />
    </>
  );
};

export default MembersListScreen;
