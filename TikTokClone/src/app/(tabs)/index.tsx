import {View,FlatList, Dimensions, ViewToken} from 'react-native';
import PostListItem from '@/components/PostListItem';
import FeedTab from '@/components/GenericComponents/FeedTab';
import posts from '@assets/data/posts.json';
import { useRef, useState} from 'react';
import {MaterialIcons,Ionicons} from '@expo/vector-icons';

export default function HomeScreen(){
	const {height} = Dimensions.get('window');
	const [currentIndex, setCurrentIndex] = useState(0);
	const onViewableItemsChanged = useRef(({viewableItems}:{viewableItems:ViewToken[]}) => {
		if(viewableItems.length > 0){
			setCurrentIndex(viewableItems[0]?.index || 0);
		}
	});
	return(
		<View>
			<View>
				<MaterialIcons name = "live-tv" size = {24} color = "white"/>
				<View>
					<FeedTab />
					<FeedTab />
					<FeedTab />
				</View>
				<Ionicons name="search" size={24} color="white"/>
			</View>
			<FlatList
			data = {posts}
			renderItem = {({item, index}) => (
				<PostListItem postItem={item} isActive={index == currentIndex}/>
			)}
			showsVerticalScrollIndicator = {false}
			snapToInterval = {height}
			decelerationRate = {'fast'}
			disableIntervalMomentum
			onViewableItemsChanged={onViewableItemsChanged.current}
			/>
		</View>

	)
}