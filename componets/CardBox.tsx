import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  images: ImageSourcePropType[];
};

export default function cardBox({ images }: Props) {
  return (
    <SafeAreaView>
      <View style={styles.imageCarousel}>
        <View style={styles.arrowButton}>
          <Text style={styles.arrow}>‹</Text>
        </View>
        <View style={styles.imageRow}>
          {images.map((image, Index) => (
            <Image key={Index} source={image} style={styles.cardImage} />
          ))}
        </View>
        <View style={styles.arrowButton}>
          <Text style={styles.arrow}>›</Text>
        </View>
        <View style={styles.dots}>
          {Array.from({ length: 5 }).map((_, index) => (
            <View key={index} style={styles.dot} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 7.5,
    padding: 4,
    marginTop: 15,
    marginRight: 5,
    resizeMode: "cover",
  },

  innerShadow: {
    position: "absolute",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.12,
  },

  imageCarousel: {
    width: 350,
    height: 100,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingBottom: 25,
    backgroundColor: "#e4e2f4",
    borderWidth: 1,
    borderColor: "#aaa5c8",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,

    // IOS shadows
    shadowColor: "#30275c",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,

    // Android Shadows
    elevation: 5,
  },

  imageRow: {
    width: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  arrowButton: {
    width: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    fontSize: 32,
    color: "#111111",
  },

  dots: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#777777",
  },
});
