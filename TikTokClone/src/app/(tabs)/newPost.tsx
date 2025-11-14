import {View, Text, Button,Linking} from 'react-native';
import {CameraView, CameraType, useCameraPermissions} from "expo-camera";
import {useState,useEffect} from 'react';

export default function NewPostScreen(){
    const [facing,setFacing] = useState<CameraType>('back');
	const [permission, requestPermission] = useCameraPermissions();

	useEffect(() => {
		if(permission && !permission.granted && permission.canAskAgain){
			requestPermission();
        }
    }, [permission])

	if(permission && !permission.granted && !permission.canAskAgain){
		return (
			<View>
				<Text>We need your permission to use the camera</Text>
                <Button title="Grant Permissions" onPress={()=>Linking.openSettings}/>
            </View>
        )
    }


    return(
        <View>
			<Text style = {{color: "white"}}>New Post Screen</Text>
        </View>    

    )
}