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
  title: PropTypes.string,
  visible: PropTypes.bool,
  reject: PropTypes.func,
  confirm: PropTypes.func,
};

export default ConfirmationModal;