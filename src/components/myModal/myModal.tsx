import React, {FC, ReactNode} from 'react';
import {
  GestureResponderEvent,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import {colors} from "../../styles/global-styles";

type Props = {
  modalVisible: boolean
  closeModal: () => void
  children: ReactNode
}

export const MyModal: FC<Props> = (
  {
    modalVisible,
    closeModal,
    children,
  }
) => {
  const handlePressOutsideModal = (event:GestureResponderEvent) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }}

  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={handlePressOutsideModal}>
        <View style={[stylesModal.modal]}>
          <View style={[stylesModal.view]}>
            <View style={stylesModal.titleRow}>
              <Text>Добавить Расход</Text>
              <TouchableOpacity onPress={closeModal} style={[stylesModal.buttonClose]}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <View style={stylesModal.children}>
              {children}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const stylesModal = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    borderStyle: "solid",

  },
  buttonClose: {
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 5,
    borderTopRightRadius: 10,
  },
  view: {
    width: '70%',
    // height: 500,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  children: {
    backgroundColor: colors.lightGrey,
    width: '80%',
    // height: '80%',
    margin: 30,
  },
})
