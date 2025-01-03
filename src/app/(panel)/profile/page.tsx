import { useAuth } from "@/src/contexts/AuthContext";
import { supabase } from "@/src/lib/supabase";
import { View, Text, StyleSheet, Button, Alert } from "react-native";


export default function Profile(){

    const  { setAuth } = useAuth();
    setAuth(null)
    

    async function handleSignout(){
        const { error } =  await supabase.auth.signOut();
        
        if(error){
            Alert.alert('Error', 'Erro ao sair da conta, tenta mais tarde.')
            return;
        }
    }
    return(
        <View>
            <Text>Página Perfil</Text>

            <Button
            title='Deslogar'
            onPress={handleSignout}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});