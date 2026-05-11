import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

// 2. Definindo o array ONGS_DATA
const ONGS_DATA = [
  { id: '1', nome: 'Amigos dos Peludos', cidade: 'São Paulo', emoji: '🏠' },
  { id: '2', nome: 'Patinhas de Anjo', cidade: 'Rio de Janeiro', emoji: '🏠' },
  { id: '3', nome: 'Resgate Focinho', cidade: 'Belo Horizonte', emoji: '🏠' },
  { id: '4', nome: 'Vida Animal', cidade: 'Curitiba', emoji: '🏠' },
];

const Ongs = () => {
  // Função para renderizar cada item da lista
  const renderItem = ({ item }: { item: typeof ONGS_DATA[0] }) => (
    <View style={styles.card}>
      <Text style={styles.emoji}>{item.emoji}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.cidade}>{item.cidade}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>ONGs Parceiras</Text>
      
      {/* 3. Utilizando o componente FlatList */}
      <FlatList
        data={ONGS_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

// 4. Estilização personalizada (StyleSheet)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Um fundo azulado suave
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#334E68',
  },
  listContent: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#62B1F6', // Detalhe lateral para diferenciar dos pets
  },
  emoji: {
    fontSize: 30,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
    color: '#243B53',
  },
  cidade: {
    fontSize: 14,
    color: '#627D98',
    marginTop: 2,
  },
});

export default Ongs;