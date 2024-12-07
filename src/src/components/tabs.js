import {View,Text, TouchableOpacity} from "react-native";
import Tabs from "../components/timer"

export default Tabs = (props) => {
    const { setSelecccion,setTiempo,selecion} = props;
    const opciones = ["Pomdoro","Descanso", "Descansito"]
    const handlePress = (index) => {
        setSelecccion(index);

        const nuevoTiempo = index === 0 ? 25 : index === 1 ?
        5 : 10;

        setTiempo(nuevoTiempo * 60);

    };
    return(
        <View style={{ flexDireccion: "row", justifyContent: "space-between"}}>

            {opciones.map((item, index) =>(
                 <TouchableOpacity key={index} onPress={()=> handlePress(index)}
                style={[styles.boton,seleccion !== index && {borderColor:"transparent"},
                ]}>

                    <Text style={styles.boton}>{item}</Text>
                </TouchableOpacity>
            ))}
           
        </View>
    );
};

const styles = StyleSheet.create({
    boton : {
        padding: 10,
        borderWidth:1,
        borderRadius: 5,
        margin: 5,
    },
    texto: {
        fontSize: 25,
        fontWeight: "bold",
    }
})