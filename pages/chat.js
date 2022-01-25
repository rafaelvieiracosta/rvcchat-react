import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
export default function PaginaDoChat(){
    return(
        <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.neutrals[999],
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', height:'91%',
              borderRadius: '20px', padding: '24px', margin: '30px 30px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[400],
            }}
          >

              <Text >Futuro Chat</Text>

        </Box>
        </Box>
      </>
    )
}