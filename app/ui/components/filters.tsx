'use client'
import React, { useState } from 'react'
import { Box, VStack, Checkbox, Text } from '@chakra-ui/react'
import { useSearchStore } from '@/app/context/searchStore'

interface FilterCategory {
  name: string
  options: string[]
}

export default function Filters() {
  const { setSearchQuery } = useSearchStore()
  const [selectedOption, setSelectedOption] = useState<string>('')

  const filterCategories: FilterCategory[] = [
    { name: 'Processador', options: ['Intel', 'AMD'] },
    { name: 'Placa de Vídeo', options: ['Nvidia', 'AMD'] },
    { name: 'Memória Ram', options: ['Rise Mode', 'Kingston'] }
  ]

  const handleFilterChange = (category: string, option: string) => {
    const categoryOption = category + option

    if (categoryOption === selectedOption) {
      setSelectedOption('')
      setSearchQuery('') // Limpa a pesquisa
    } else {
      setSelectedOption(categoryOption)
      setSearchQuery(category.toLowerCase() + ' ' + option.toLowerCase()) 
    }
  }

  return (
    <VStack align="start" spacing={4} className="flex-col text-white">
      {filterCategories.map((category) => (
        <Box key={category.name} w="full">
          <Text fontWeight="bold" mb={2}>{category.name}</Text>
          <VStack align="start" spacing={1}>
            {category.options.map((option) => (
              <Checkbox
                key={category.name + option}
                colorScheme="teal"
                onChange={() => handleFilterChange(category.name, option)}
                isChecked={selectedOption === category.name + option}
              >
                {option}
              </Checkbox>
            ))}
          </VStack>
        </Box>
      ))}
    </VStack>
  )
}
