import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>

      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["800"]};
        }
      `}</style>
    </>
  );
}

export default function PaginaInicial() {
  //const username = 'rafaelvieiracosta';
  const [username, setUsername] = React.useState("");
  const [local, setLocal] = React.useState("");
  const roteamento = useRouter();
  
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.neutrals[999],
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "20px",
            padding: "24px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[100],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (event) {
              event.preventDefault();
              if (username != '' && username != undefined){
                  roteamento.push(`/chat?username=${username}`);
              }
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
            }}
          >
            <Image
              styleSheet={{
                width: "50%",
                marginBottom: "16px",
                height: "50%",
              }}
              src={`https://raw.githubusercontent.com/rafaelvieiracosta/rafaelvieiracosta/c01f62ca97e09397e74d5cd249001ce22df6c613/rvc.svg`}
            />

            <TextField
              value={username}
              onChange={function (event) {
                console.log("digitou", );
                if (event.target.value.length > 2) {
                  const valor = event.target.value;

                fetch('https://api.github.com/users/' + event.target.value)
                  .then(function(respostaDoServidor){
                    return respostaDoServidor.json()
                  })
                  .then(function(respostaConvertida){
                    setLocal(respostaConvertida.location);
                  })
                }
                setUsername(valor);
              }}
              fullWidth
              rounded="md"
              placeholder="Escreva seu usuário do GitHub"
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[999],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[100],
                },
              }}
            />

            <Button
              type="submit"
              label="Entrar"
              rounded="md"
              fullWidth
              uppercase
              styleSheet={{ color: appConfig.theme.colors.neutrals[999] }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[400],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[500],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[200],
              borderRadius: "20px",
              flex: 1,
              minHeight: "240px",
              minWidth: "200px",
            }}
          >
            <Image
              styleSheet={{
                minHeight: "168px",
                minWidth: "168px",
                borderRadius: "20px",
                marginBottom: "16px",
                border: "1px solid #CED3D9",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[100],
                backgroundColor: appConfig.theme.colors.neutrals[999],
                padding: "3px 10px",
                borderRadius: "7px",
                minHeight: "20px",
                minWidth: "100%",
                maxWidth: "100%",
                textAlign: "center",
              }}
            >
              {username}
            </Text>

            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[999],
                backgroundColor: appConfig.theme.colors.neutrals[200],
                border: "1px solid #0B0C12",
                padding: "3px 10px",
                borderRadius: "7px",
                minHeight: "20px",
                maxHeight: "20px",
                minWidth: "100%",
                maxWidth: "100%",
                textAlign: "center",
                marginTop: "2px",
              }}
            >
              {local}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
