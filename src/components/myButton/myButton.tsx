import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';
import {colors, mediumFontSize} from "../../styles/global-styles";

type MyButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

export const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity{...props} style={[s.button, props.style]} >
      {children}
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button:{
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
    borderStyle: 'solid',
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 7,
    fontSize: mediumFontSize,
  }
})