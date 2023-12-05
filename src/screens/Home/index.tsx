import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  const participants = [
    'Matheus',
    'Renan',
    'Itaitan',
    'Italo',
    'Madriga',
    'Sabino',
    'Marcão',
    'Roberto',
    'FibraOtica',
    'Junin',
    'Isatkm',
    'Savio',
    'Juao',
  ]

  function handleParticipantAdd() {
    if (participants.includes('Matheus')) {
      return Alert.alert('Participante Existe', 'Já existe esse cara')
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 1 de Dezembro de 2023.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={'#6b6b6b'}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Nenhum participante foi adicionado neste evento.</Text>
        )}
      />
    </View>
  )
}
