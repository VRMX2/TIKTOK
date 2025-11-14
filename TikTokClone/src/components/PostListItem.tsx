import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';


const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function PostListItem(){
	const {height} = Dimensions.get('window');
	const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });
	return(
		<View style={{height}}>
			<VideoView 
				style = {{flex:1}}
        player = {player} 
				contentFit = "cover"
				nativeControls = {false} 
		  />

		<View>
			<TouchableOpacity style = {{}} onPress{() => console.log('Like Pressed')}>
         <Ionicons name="heart" size={33} color="#fff">
          <Text>0</Text>
			</TouchableOpacity>
      <TouchableOpacity style = {{}} onPress{() => console.log('Like Pressed')}>
			<Ionicons name = "chatbubble" size = {33} color = "#fff" >
			<Text>0</Text>
			</TouchableOpacity>
		<TouchableOpacity style = {{}} onPress{() => console.log('Like Pressed')}>
         <Ionicons name="arrow-redo" size={33} color="#fff">
			<Text>20</Text>
			</TouchableOpacity>
		<TouchableOpacity style = {{}} onPress{() => console.log('Like Pressed')}>
			<View>
        <Text>L</Text>

      </View>
			</TouchableOpacity>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});