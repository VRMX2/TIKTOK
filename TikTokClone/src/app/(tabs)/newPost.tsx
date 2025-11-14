import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {CameraView, CameraType, useCameraPermissions} from "expo-camera";
import {useState, useEffect} from 'react';
import * as Linking from 'expo-linking';
import { Ionicons } from '@expo/vector-icons';
import {router} from 'expo-router';


export default function NewPostScreen(){
    const [facing,setFacing] = useState<CameraType>('back');
	const [permission, requestPermission] = useCameraPermissions();
	const [isRecording,seIsRecording] = useState<boolean>(false);

	useEffect(() => {
		if(permission && !permission.granted && permission.canAskAgain){
			requestPermission();
        }
    }, [permission])

	if(!permission){
		return <View />
	};
	if(permission && !permission.granted && !permission.canAskAgain){
		return (
			<View style={styles.permissionContainer}>
				<Text style={styles.permissionText}>We need your permission to use the camera</Text>
                <Button title="Grant Permissions" onPress={()=>Linking.openSettings()}/>
            </View>
        )
    }

	const toggleCameraFacing = () => setFacing(current=>(current==='back'?'front':'back'));

	const selectFromGallery = () => {};
	const startRecording = () => {};
	const stopRecording = ()=>{};
	return(
        <View style={{flex:1}}>
			<CameraView style = {{flex:1}} facing = {facing} />
			<View style={styles.topBar}>
                <Ionicons name="close" size={40} color="white" onPress={()=>router.back()} />
			</View>
			<View style = {styles.bottomControls}>
				<Ionicons name = "images" size = {40} color = "white" onPress = {(selectFromGallery)} />

				<TouchableOpacity style = {[styles.recordButton,isRecording && styles.recordingButton]} onPress = {isRecording ? stopRecording : startRecording}/>
					
				<Ionicons name = "camera-reverse" size = {40} color = "white" onPress = {(toggleCameraFacing)} />
            </View>
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
	recordButton: {
		width:80,
		height:80,
		backgroundColor: '#fff',
		borderRadius:40
	},
	recordingButton: {
		backgroundColor:"#F44336"
	},
	topBar: {
		position: 'absolute',
		top:50,
        left:10
	},
	bottomControls: {
		position: 'absolute',
		bottom:5,
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: 'space-around',
		width: '100%'
    }
})