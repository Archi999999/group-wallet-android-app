import React, {ReactNode} from 'react';
import {TouchableOpacity, TouchableOpacityProps, StyleSheet} from 'react-native';
import {colors, mediumFontSize, smallFontSize} from "../../styles/global-styles";
import { Text } from 'react-native';

type MyButtonProps = TouchableOpacityProps & {
  children: string
};

export const MyButton: React.FC<MyButtonProps> = ({children, ...props}) => {
  return (
    <TouchableOpacity{...props} style={[s.button, props.style]}>
      <Text style={s.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
    borderStyle: 'solid',
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 7,
    fontSize: mediumFontSize,
    paddingHorizontal: 8,
  },
    text: {
      fontSize: smallFontSize
  }
})