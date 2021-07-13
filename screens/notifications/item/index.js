import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './index.styles';
import {Message, User, Chat} from 'react-native-iconly';
import Logo from '../../../components/static/logo/logo';

const Item = ({id, type, sender, text, color, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Logo />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          {type === 'message' && <Chat color={color} size={20} />}
          {type === 'email' && <Message color={color} size={20} />}
          {type === 'finding' && <User color={color} size={20} />}
          <Text style={styles.title}>{sender}</Text>
        </View>
        <Text style={{...styles.text, color}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
