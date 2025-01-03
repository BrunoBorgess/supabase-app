import Colors from "@/constants/Colors";
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, Alert } from "react-native";
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from '../../../lib/supabase'

export default function Sigup(){

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);

    async function handleSigUp(){
        setLoading(true);

        const { data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
            options:{
                data:{
                    name: name
                }
            }
        })

        if(error){
            Alert.alert('Error', error.message)
            return;
        }
        setLoading(false);
        router.replace('/')


    }


    return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable 
                    style={styles.backButtom}
                    onPress={() => router.back()}
                    >
                        <Ionicons name="arrow-back" size={24} color={Colors.white}/>

                    </Pressable>


                    <Text style={styles.logoText}>
                        Tec<Text style={{color: Colors.green}}>App</Text>
                    </Text>
                    <Text style={styles.slogan}>
                        Criar uma conta
                    </Text>

                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>Nome completo</Text>
                        <TextInput
                        placeholder="Nome completo..."
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                        placeholder="Digite seu email..."
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                        placeholder="Digite sua senha..."
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        />
                    </View>

                    <Pressable style={styles.buttom} onPress={handleSigUp}>
                        <Text style={styles.buttomText}>
                            {loading ? 'Carregando...' : 'Criar conta'}</Text>
                    </Pressable>

                </View>

            </View>



    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
        backgroundColor: Colors.zinc,
    },
    header:{
        paddingLeft: 14,
        paddingRight: 14, 
    },
    logoText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white,
        marginBottom: 8,
    },
    slogan:{
        fontSize: 34,
        color: Colors.white,
        marginBottom: 34,
    },
    form:{
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 24,
        paddingLeft: 14,
        paddingRight: 14,
    },
    label:{
        color: Colors.zinc,
        marginBottom: 4,
    },
    input:{
        borderWidth: 1,
        borderColor: Colors.gray,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingTop: 14,
        paddingBottom: 14,
    },
    buttom:{
        backgroundColor: Colors.green,
        paddingTop: 14,
        paddingBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 8,
    },
    buttomText:{
        color: Colors.white,
        fontWeight: 'bold',
    },
    backButtom:{
        alignSelf: 'flex-start',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8
    }
});