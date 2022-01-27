import React from 'react'
import { StyleSheet, Image, View } from 'react-native';
import Texto from '../../../componentes/Texto'
import logo from '../../../../assets/logo.png'

export default function Detalhes(){
    return <>
    <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
    <Texto style={estilos.descricao}>Cesta com produtos selecionados diretamente da fazenda para sua cozinha</Texto>
    <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome:{
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold', 
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    fazenda:{
        flexDirection: 'row',
        paddingVertical: 12,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao:{
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})