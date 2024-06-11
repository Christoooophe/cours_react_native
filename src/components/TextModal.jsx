import { Button, Modal, View } from "react-native";

const TextModal = (props) => {
  return (
    <Modal visible={props.visible}>
      {props.children}
      <View>
        <Button title={"close"} onPress={props.closeModal}/>
      </View>
    </Modal>
  );
};

export default TextModal;
