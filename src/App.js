import React from 'react'
import {
  ChakraProvider,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Image,
  Box
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const App = () => (
  <ChakraProvider resetCSS>
    <Box
      display="flex"
      width="1000px"
      height="1000px"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        height="250px"
        width="250px"
        src="https://via.placeholder.com/600/92c952"
        htmlHeight={600}
        htmlWidth={600}
        overflow="visible"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        zIndex="docked"
      />
      <Image
        height="100px"
        width="100px"
        src="https://via.placeholder.com/150/771796"
        ml={-150}
        display="block"
        zIndex="docked"
      />
    </Box>
  </ChakraProvider>
)

export default App
