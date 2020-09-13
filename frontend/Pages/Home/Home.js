import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import HomeStyles from "./HomeStyles.js";

const Home = () => {
  const [homepageList, setHomepageList] = useState([]);
  useEffect(() => {
    fetch("/homepageList")
      .then((response) => response.json())
      .then((data) => setHomepageList(data));
  }, []);
  const classes = HomeStyles;
  return (
    <View style={classes.container}>
      {homepageList.map((homepageItem) => (
        <>
          <Text className="category">{homepageItem.id}</Text>
          <TouchableOpacity style={classes.button}>
            <Image
              style={classes.logo}
              source={require(`../../Images/${homepageItem.image}.jpg`)}
              alt="Events Logo"
            />
          </TouchableOpacity>
        </>
      ))}
    </View>
  );
};

export default Home;
