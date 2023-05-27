import { HiCalendar } from 'react-icons/hi';
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from '@chakra-ui/react';

export function LaunchItem(launch) {
  return (
    <Box p={4} m={4} bg='gray.300' borderRadius='lg'>
      <Flex display='flex'>
        <Text fontSize='xl'>
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>{launch.launch_success ? 'Success' : 'Failure'}</Tag>
      </Flex>
      <Flex align='center'>
        <Icon as={HiCalendar} color='gray.600' />{' '}
        <Text fontSize='sm' color='gray.600' ml={1}>
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>
      <Button colorScheme='purple'>Ver detalles</Button>
    </Box>
  )
}