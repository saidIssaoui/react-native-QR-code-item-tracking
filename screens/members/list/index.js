import React from 'react';
import List from './list';
import Actions from './actions';

const MembersListScreen = ({
  navigation,
  
      route
    
}) => {
  const actions = route.params.actions
  const objects =route.params.data 
  const objects2 = route.params.qrcode
  const objects3 = {
    qrcode: objects2
  }
  if(objects2!== undefined)
{Object.entries(objects3).forEach(([key,value]) => { objects[key] = value })}
//console.log(objects)
  return (
    <>
      {actions ? (
        <Actions
          navigation={navigation}
          
        />
      ) : (
        <List navigation={navigation}
        route={objects} />
        
      )}
    </>
  );
};

export default MembersListScreen;
