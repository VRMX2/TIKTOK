import {View,Text} from 'react-native';
import {CameraView, CameraType, useCameraPermessions} from "expo-camera";
import {useState} from 'react';

export default function NewPostScreen(){
    const [facing,setFacing] = useState<CameraType>('back');
	const [permission, requestPermission] = useCameraPermissions();
    return(
        <View>
            <Text style={{color="white"}}>New Post Screen</Text>
        </View>    

    )
}