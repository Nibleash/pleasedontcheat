'use client'
import { ChakraProvider, Container, Center, Heading, HStack, VStack, Divider, Text, Flex, Spacer, Button, StackDivider, Box } from '@chakra-ui/react'
import { Icon, InlineIcon } from '@iconify/react';
import SelectButton from './components/SelectButton';

export default function Home() {
  return (
    <ChakraProvider>
      <Container maxW='container.lg' minHeight="100vh" p={2}>
        <VStack h="full" divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'>
          <Box>
            <Center>
              <Heading as='h1' size='3xl' display={"flex"}>
                Test technique rapide <InlineIcon icon="fluent-emoji:desktop-computer" style={{ paddingLeft: "10px" }} />
              </Heading>
            </Center>
            <Text pt={2}>
              Ce test a pour objectif de mesurer vos compétences en programmation. Il est composé de questions sur différents langages, frameworks et outils.

              Avant de commencer, veuillez renseigner les technologies que vous connaissez. Cela nous permettra d'adapter le test à votre niveau de compétence.

              Une fois que vous avez renseigné les technologies que vous connaissez, cliquez sur le bouton "Commencer le test". Le test commencera automatiquement.

              Bon courage !
            </Text>
          </Box>

          <Box>
            <Heading as='h3' size='md'>
              Tu es un..
            </Heading>
            <HStack>
              <SelectButton name="Data Scientist" />
              <SelectButton name="Data Engineer" />
              <SelectButton name="Data Analyst" />
            </HStack>
          </Box>

          <Box>
            <Heading as='h3' size='md'>
              Sélectionne les technologies que tu maitrises
            </Heading>
          </Box>

          <Flex w="full">
            <Spacer /> <Button colorScheme='blue'>Démarrer le test</Button>
          </Flex>
        </VStack >

      </Container>
    </ChakraProvider >
  )
}
