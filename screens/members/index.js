import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import T from 'react-native-i18n';
import styles from './index.styles';
import ActionButton from '../../components/buttons/action';
import CancelButton from '../../components/buttons/cancel';
import Background from '../../components/static/backgound';
import Image from '../../components/static/icons/image';
import {AddUser, People, ChevronLeft} from 'react-native-iconly';
import {APP_DARK_GRAY, APP_PURPLE, APP_RED} from '../../constants';
import Margin from '../../components/utils/margin';
import ThreeDots from '../../components/static/icons/three-dots';
import Notification from '../../components/buttons/notification';

const icon = <Image fill={APP_RED} />;
const addUser = <AddUser color={APP_RED} size={48} />;
const people = <People color={APP_RED} size={32} />;
const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;

const members = [
  {
    id: '1',
    label: 'Director',
  },
  {
    id: '2',
    label: 'Administrator',
  },
  {
    id: '3',
    label: 'Responsible',
  },
  {
    id: '4',
    label: 'Employee',
  },
];

const MembersScreen = ({navigation}) => {
  const handlePressCancel = () => {
    navigation.pop();
  };

  const handlePress = id => {
    navigation.navigate('Members List',{screen: 'Members List' , id, actions : true});
  };

  const handlePressBack = () => {
    navigation.pop();
  };

  const handlePressAdd = () => {
    navigation.navigate('Member Settings', {isNew: false});
  };

  const [isPending, setIsPending] = useState(true);
  const handlePressNotification = () => {
    setIsPending(!isPending);
  };

  const header = () => (
    <>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
        <Notification pending={isPending} onPress={handlePressNotification} />
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.iconContainer}>{people}</View>
        <Text style={styles.title}>{T.translate('members.title')}</Text>
        <Margin mb3 />
      </View>
    </>
  );

  const footer = () => (
    <View style={styles.footer}>
      <ActionButton
        icon={addUser}
        text={T.translate('members.Add member')}
        textColor={APP_RED}
        borderColor={APP_RED}
        onPress={handlePressAdd}
      />
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.middle}>
          <FlatList
            contentContainerStyle={styles.gridContainer}
            columnWrapperStyle={styles.gridWrapper}
            data={members}
            numColumns={2}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <ActionButton
                icon={icon}
                text={item.label}
                textColor={APP_RED}
                borderColor={APP_RED}
                onPress={() => handlePress(item.id)}
              />
            )}
            ListHeaderComponent={header()}
            ListFooterComponent={footer()}
          />
        </View>
        <Margin mb5 />
      </View>
      <Background />
    </>
  );
};

export default MembersScreen;
