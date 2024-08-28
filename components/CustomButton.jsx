import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handPress,
  containerStyles,
  testStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handPress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } `}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${testStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
