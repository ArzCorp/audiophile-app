import { Image } from 'react-native';
import { View } from 'react-native';
import TextField from './TextField';

export default function Footer() {
  return (
    <View>
      <Image />
      <TextField></TextField>
      <TextField></TextField>
      <View>
        <Image />
        <TextField></TextField>
        <TextField></TextField>
      </View>
    </View>
  );
}
