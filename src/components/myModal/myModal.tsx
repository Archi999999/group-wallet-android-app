import React, {FC, ReactNode} from 'react';
import {
  GestureResponderEvent,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from "react-native";
import {stylesModal} from "./myModal.styles";
import {Ionicons} from "@expo/vector-icons";

type Props = {
  style?: ViewStyle
  title: string
  modalVisible: boolean
  closeModal: (value: boolean) => void
  children: ReactNode
}

export const MyModal: FC<Props> = (
  {
    style,
    title,
    modalVisible,
    closeModal,
    children,
  }
) => {
  const handlePressOutsideModal = (event:GestureResponderEvent) => {
    if (event.target === event.currentTarget) {
      closeModal(false)
    }}

  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={handlePressOutsideModal}>
        <View style={[stylesModal.modal, style]}>
          <View style={[stylesModal.view]}>
            <View style={stylesModal.titleRow}>
              <Text style={stylesModal.titleText}>{title}</Text>
              <TouchableOpacity onPress={()=>closeModal(false)} style={[stylesModal.buttonClose]}>
                <Ionicons name="ios-close-sharp" size={24} color="black" />
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
