import React, { useState } from "react";
import reactDom from "react-dom";
import { Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native";

const barLetStyle = {
  // Placeholder style, change as necessary
  backgroundColor: "white",
  color: "White",
  flex: "1",
  alignItems: "center",
  width: "85%",
};

function Barlet({ icon }) {
  return (
    <View
      key={icon.id}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity style={barLetStyle}>
        <Text style={{ fontFamily: "Roboto", fontSize: "50px" }}>
          {icon.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Barlet;
