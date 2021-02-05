import React, { useContext, useState } from 'react';
import { StyleSheet, View, Alert, Text, Modal } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { RESET_CHARACTER } from '../redux/actionTypes';

const settingsButton = require('../assets/settingsBtn.png');
const logOutButton = require('../assets/logOutBtn.png');
const cancelButton = require('../assets/cancelBtn.png');
const changeCharacterButton = require('../assets/changeCharacterBtn.png');

const SettingsModal = ({ isVisible, setIsVisible }) => {
  const { signOut } = useContext(AuthContext);
  const dispatch = useDispatch();

  function userSignOut() {
    Alert.alert('Signing out!', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        onPress: () => {
          setIsVisible(false);
        },
      },
      {
        text: 'Yes',
        onPress: () => {
          setIsVisible(false);
          signOut();
        },
      },
    ]);
  }

  function changeCharacter() {
    Alert.alert(
      'Changing character!',
      "This will reset your current character and all edits you've made. Are you sure?",
      [
        {
          text: 'Cancel',
          onPress: () => {
            setIsVisible(false);
          },
        },
        {
          text: 'Yes',
          onPress: () => {
            setIsVisible(false);
            dispatch({ type: RESET_CHARACTER });
          },
        },
      ]
    );
  }

  return (
    <View>
      <Modal visible={isVisible} transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <Text style={styles.settingsHeaderText}>Settings</Text>
            <View style={styles.headerBorderLine} />
            <CustomButton
              image={changeCharacterButton}
              onPressEffect={changeCharacter}
            />
            <CustomButton image={logOutButton} onPressEffect={userSignOut} />
            <CustomButton
              image={cancelButton}
              onPressEffect={() => setIsVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default function SettingsComponent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <SettingsModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <CustomButton
        image={settingsButton}
        onPressEffect={() => setIsVisible(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingsHeaderText: {
    fontSize: 20,
    marginBottom: 8,
    fontFamily: 'rooters-standard',
  },

  headerBorderLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    width: '90%',
    marginBottom: 8,
  },

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(1, 1, 1, 0.2)',
  },

  modal: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    padding: 20,
  },
});
