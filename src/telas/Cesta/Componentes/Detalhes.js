import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import Texto from '../../../componentes/Texto'

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}){
    return <>
    <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
    <Texto style={estilos.descricao}>{descricao}</Texto>
    <Texto style={estilos.preco}>{preco}</Texto>
    <TouchableOpacity style={estilos.botao}>
        <Texto style={estilos.textoBotao}>
            {botao}
        </Texto>
    </TouchableOpacity>
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
    },
    botao:{
        marginTop: 16,
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao:{
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    },
})