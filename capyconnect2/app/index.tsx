import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/adaptive-icon.png');


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div><h1>CapyConnect</h1><button>Settings</button></div>
      <h2>Event Name</h2>
      <h3>Time</h3>
      <h3>Location</h3>
      <Image source={PlaceholderImage} />
      <div>
        <button>Save</button>
        <button>Skip</button>
        <button>Add to Calendar</button>
        <button>Like</button>
        <button>Share</button>
      </div>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});