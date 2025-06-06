import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary" >
      <Image source={images.bg} 
      className="absolute w-full z-0"
      resizeMode="cover"
      />

      <ScrollView>
        <Image source={icons.logo} 
        className="w-12 h-10 mt-20 mb-5 mx-auto"
        resizeMode="cover"
        />

        

      </ScrollView>
    </View>
  );
}
