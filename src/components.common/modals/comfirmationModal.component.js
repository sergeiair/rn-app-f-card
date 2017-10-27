import React from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const ConfirmationModal = (props) => {
  return (
    <View style={{marginTop: 22}}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={props.visible}
        onRequestClose={() => {}}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>{props.title}</Text>
            <TouchableHighlight onPress={props.reject}>
              <Text>Cancel</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={props.confirm}>
              <Text>Ok</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

ConfirmationModal.PropTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  reject: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
};

export default ConfirmationModal;