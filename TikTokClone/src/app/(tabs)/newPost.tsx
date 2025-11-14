import {View, Text, Button,Linking,StyleSheet} from 'react-native';
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
			<View style={styles.permissionContainer}>
				<Text style={styles.permissionText}>We need your permission to use the camera</Text>
                <Button title="Grant Permissions" onPress={()=>Linking.openSettings()}/>
            </View>
        )
    }


    return(
        <View>
			<Text style = {{color: "white"}}>New Post Screen</Text>
        </View>    

    )
}

const styles = StyleSheet.create({
	permissionContainer: {
		flex:1,
		justifyContent: 'center',
        padding:20
    },
	permissionText: {
		color: '#fff',
		textAlign: 'center',
		fontSize:20,
		fontWeight: '700'
	},
})