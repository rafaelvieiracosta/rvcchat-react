import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";

export default function ChatPage() {
  // Sua lógica vai aqui

  const [mensagem, setMensagem] = React.useState("");
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMensagens.length + 1,
      de: "rafaelvieiracosta",
      texto: novaMensagem,
    };
    setListaDeMensagens([mensagem, ...listaDeMensagens]);
    setMensagem("");
  }

  // ./Sua lógica vai aqui
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.neutrals[900],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "15px",
          backgroundColor: appConfig.theme.colors.neutrals[100],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[200],
            flexDirection: "column",
            borderRadius: "15px",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagens} />

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "10px",
                padding: "12px 16px",
                backgroundColor: appConfig.theme.colors.neutrals[300],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[999],
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button variant="tertiary" colorVariant="dark" label="Sair" href="/" />
      </Box>
    </>
  );
}

function MessageList(props) {
  console.log(props);

  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            variant="heading5"
            styleSheet={{
              color: appConfig.theme.colors.neutrals[800],
              borderRadius: "10px",
              padding: "12px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[300],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/vanessametonini.png`}
              />
              <Text
                tag="strong"
                styleSheet={{
                  fontSize: "16px",
                  color: appConfig.theme.colors.neutrals[600],
                }}
              >
                {mensagem.de}
              </Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[500],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
