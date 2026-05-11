import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList, // Importação do componente de lista performática
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList, RootStackParamList } from '../types/navigation';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Explorar'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function Home({ route, navigation }: Props) {
  const usuario = route.params?.usuario || 'Visitante';
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  // O restante do componente (return JSX) não está visível na imagem, 
  // mas a lógica de animação e tipagem está toda aqui.
  // Função que define como CADA item da lista será desenhado
  const renderPetItem = ({ item }: { item: typeof PETS_DATA[0] }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: item.cor }]} 
      activeOpacity={0.8} 
     onPress={() => navigation }>
      <View style={styles.cardEmoji}>
        <Text style={styles.emojiText}>{item.emoji}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.petNome}>{item.nome}</Text>
        <Text style={styles.petDetails}>{item.especie} • {item.idade}</Text>
        <Text style={styles.petCity}>📍 {item.cidade}</Text>
      </View>

      <View style={styles.arrowBtn}>
        <Text style={styles.arrowText}>→</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <FlatList 
          data={PETS_DATA} 
          renderItem={renderPetItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </View>
  );
}
// ===== ESTILOS =====
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6EE',
  },
  listContent: {
    padding: 24,
    paddingBottom: 60,
  },
  header: {
    marginBottom: 24,
  },
  welcome: {
    fontSize: 16,
    color: '#9A7A6A',
    fontWeight: '500',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3D2314',
    marginTop: 4,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#3D2314',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardEmoji: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiText: {
    fontSize: 35,

  },
  cardInfo: {
    flex: 1,
    marginLeft: 16,
  },
  petNome: {
    fontSize: 20,
    fontWeight: '800',
    color: '#3D2314',
  },
  petDetails: {
    fontSize: 14,
    color: '#5A3A2A',
    marginTop: 2,
  },
  petCity: {
    fontSize: 12,
    color: '#9A7A6A',
    marginTop: 6,
  },
  arrowBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3D2314',
  },
  });

  const PETS_DATA = [
  { id: '1', nome: 'Bobi', especie: 'Cachorro', idade: '2 anos', cor: '#FFE8CC', emoji: '🐶', cidade: 'São Paulo' },
  { id: '2', nome: 'Mel', especie: 'Gato', idade: '1 ano', cor: '#E8F4E8', emoji: '🐱', cidade: 'Campinas' },
  { id: '3', nome: 'Rex', especie: 'Cachorro', idade: '4 anos', cor: '#EDE8FF', emoji: '🐕', cidade: 'São Paulo' },
  { id: '4', nome: 'Nina', especie: 'Coelha', idade: '8 meses', cor: '#FFE8F0', emoji: '🐰', cidade: 'São Paulo' },
  { id: '5', nome: 'Thor', especie: 'Cachorro', idade: '3 anos', cor: '#FFF3E0', emoji: '🐕‍🦺', cidade: 'São Paulo' }
];
 