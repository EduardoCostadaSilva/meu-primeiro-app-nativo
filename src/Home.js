import * as React from "react";
import { StyleSheet,ScrollView,Text, View } from "react-native";
import { Button, useTheme, Avatar, Card, Divider } from "react-native-paper";
import { Modal, Portal, PaperProvider } from "react-native-paper";

export default function Home() {
  const { colors } = useTheme();
  const LeftContent = (props) => <Avatar.Icon {...props} icon="home-search" />;
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 400,
    marginTop: 300,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    gap: 10,
    padding: 40,
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        paddingTop: 100,
        paddingBottom: 50,
        gap: 10,
      }}
    >
        <ScrollView>
      {/* <Text style={{ color: colors.primary }}>React Native Paper</Text>
      <Text style={{ color: colors.accent }}>Prof Ingrid </Text>
      <Button icon="camera" mode="contained" onPress={() => {}}>
        tirar foto
      </Button>
    */}
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Local: Joinville, SC</Text>
          <Text>Nome: Casarão do mano Milionas</Text>
          <Text>Área: 100m²</Text>
          <Text>Aluguel: US$1000,00 </Text>
          <Text>Descrição: Ótimo para quem quer fazer um harém.</Text>
        </Modal>
      </Portal>
      <Card>
        <Card.Title
          title="Casarão de milionario"
          subtitle="Quase de grátis."
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Praia</Text>
          <Text variant="bodyMedium">
            casa de frente com a praia, para alugar.
          </Text>
          <Divider />
          <Text>Área: 100m².</Text>
          <Divider />
          <Text>Benefícios: visão privilegiada da praia do tapaocú.</Text>
          <Divider />
          <Text>Valor: US$1000,00.</Text>
          <Divider />
          <Divider />
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Button onPress={showModal}>Ver mais</Button>
      </Card>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Local: Joinville, SC</Text>
          <Text>Nome: Casarão do mano Milionas</Text>
          <Text>Área: 100m²</Text>
          <Text>Aluguel: US$1000,00 </Text>
          <Text>Descrição: Ótimo para quem quer fazer um harém.</Text>
        </Modal>
      </Portal>
      <Card>
        <Card.Title
          title="Casarão de milionario"
          subtitle="Quase de grátis."
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Praia</Text>
          <Text variant="bodyMedium">
            casa de frente com a praia, para alugar.
          </Text>
          <Divider />
          <Text>Área: 100m².</Text>
          <Divider />
          <Text>Benefícios: visão privilegiada da praia do tapaocú.</Text>
          <Divider />
          <Text>Valor: US$1000,00.</Text>
          <Divider />
          <Divider />
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Button onPress={showModal}>Ver mais</Button>
      </Card>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Local: Joinville, SC</Text>
          <Text>Nome: Casarão do mano Milionas</Text>
          <Text>Área: 100m²</Text>
          <Text>Aluguel: US$1000,00 </Text>
          <Text>Descrição: Ótimo para quem quer fazer um harém.</Text>
        </Modal>
      </Portal>
      <Card>
        <Card.Title
          title="Casarão de milionario"
          subtitle="Quase de grátis."
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Praia</Text>
          <Text variant="bodyMedium">
            casa de frente com a praia, para alugar.
          </Text>
          <Divider />
          <Text>Área: 100m².</Text>
          <Divider />
          <Text>Benefícios: visão privilegiada da praia do tapaocú.</Text>
          <Divider />
          <Text>Valor: US$1000,00.</Text>
          <Divider />
          <Divider />
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Button onPress={showModal}>Ver mais</Button>
      </Card>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Local: Joinville, SC</Text>
          <Text>Nome: Casarão do mano Milionas</Text>
          <Text>Área: 100m²</Text>
          <Text>Aluguel: US$1000,00 </Text>
          <Text>Descrição: Ótimo para quem quer fazer um harém.</Text>
        </Modal>
      </Portal>
      <Card>
        <Card.Title
          title="Casarão de milionario"
          subtitle="Quase de grátis."
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Praia</Text>
          <Text variant="bodyMedium">
            casa de frente com a praia, para alugar.
          </Text>
          <Divider />
          <Text>Área: 100m².</Text>
          <Divider />
          <Text>Benefícios: visão privilegiada da praia do tapaocú.</Text>
          <Divider />
          <Text>Valor: US$1000,00.</Text>
          <Divider />
          <Divider />
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Button onPress={showModal}>Ver mais</Button>
      </Card>
      </ScrollView>
    </View>
  );
}
