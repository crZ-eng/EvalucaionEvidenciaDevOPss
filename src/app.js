import { Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f172a',
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 60,
          marginBottom: 20,
        }}
      >
        🔧
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 10,
          textAlign: 'center',
        }}
      >
        Aplicación en Mantenimiento
      </Text>

      <Text
        style={{
          color: '#cbd5e1',
          fontSize: 16,
          textAlign: 'center',
          lineHeight: 24,
        }}
      >
        Estamos realizando mejoras para brindarte una mejor experiencia.
        {'\n\n'}
        Por favor, intenta acceder nuevamente más tarde.
      </Text>
    </View>
  );
}