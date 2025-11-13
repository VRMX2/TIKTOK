import {Tabs} from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

export default function TabsLayout(){
	return (
        <Tabs>
			<Tabs.Screen
				name = 'index'
				options = {{
					title: 'Home',
					tabBarIcon: ({color}) => (
                        <Entypo name="home" size={24} color="black"/>
                    )
                }}
			/>
		</Tabs>
    )
}