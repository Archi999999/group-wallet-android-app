import React, {ReactNode} from 'react';
import {TouchableOpacity, TouchableOpacityProps, StyleSheet} from 'react-native';
import {mediumFontSize, smallFontSize} from "../../styles/global-styles";
import {Text} from 'react-native';
import {colors} from "../../styles/colors";

type MyButtonProps = TouchableOpacityProps & {
  children: string | ReactNode
};

export const MyButton: React.FC<MyButtonProps> = ({children, ...props}) => {
  return (
    <TouchableOpacity{...props} style={[s.button, props.style]}>
      {typeof children === 'string' ? (
        <Text style={s.text}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
    backgroundColor: colors.button,
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