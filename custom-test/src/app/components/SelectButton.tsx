'use client'

import { useState } from 'react'
import React from 'react';
import { ChakraProvider, Container, Center, Heading, HStack, VStack, Divider, Text, Flex, Spacer, Button, StackDivider, Box } from '@chakra-ui/react'
import { Icon, InlineIcon } from '@iconify/react';


export default function SelectButton({ name }: { name: String }) {
    return (
        <div>{name}</div>
    )
}