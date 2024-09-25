import { Box, Container, Divider, Text, VStack } from '@chakra-ui/react'
import Navbar_left_editor from './Navbar_left_editor'
import Attribute_editor from './Attributes_editor'

function Handling_editor() {
  return (
    <Container 
        h="100%"
        p={2}
        backgroundColor= "rgba(26, 32, 44, 0.9)"
        >
        <Box>
            <VStack spacing="8">
                <Text fontSize = "2xl" align="center" pt="4" color="white">
                    Handling Editor
                </Text>
                <Divider />
                <Navbar_left_editor />
                <Divider />
                <Attribute_editor />
            </VStack>
        </Box>
    </Container>
  )
}

export default Handling_editor
