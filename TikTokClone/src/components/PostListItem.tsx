import {View, Text} from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';


const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function PostListItem(){
	const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });
	return(
		<View>
            <Text>Hello to the post view</Text>
        </View>
    )
}