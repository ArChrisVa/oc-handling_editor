import { Button, Container, HStack } from '@chakra-ui/react'
import React from 'react'

function Navbar_left_editor() {
  return (
    <Container>
        <HStack
            justifyContent="space-between"
        >
            <Button colorScheme="rgba(26, 32, 44, 0.8)" variant="outline">Vehicle</Button>
            <Button colorScheme="rgba(26, 32, 44, 0.8)" variant="outline">Import</Button>
            <Button colorScheme="rgba(26, 32, 44, 0.8)" variant="outline">Export</Button>
            <Button colorScheme="rgba(26, 32, 44, 0.8)" variant="outline">Save</Button>
        </HStack>
    </Container>  
    )
}

export default Navbar_left_editor
