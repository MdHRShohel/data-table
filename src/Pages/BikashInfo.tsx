import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const BikashInfo = () => {
  let name: string;
  name = "Bikash Chandra Dey";

  return (
    <div>
      <Box
        w="100%"
        p={5}
        h="100%"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          textAlign={["center"]}
        >
          {name}
        </Text>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th fontSize={"2xl"}>Task Title</Th>
                <Th fontSize={"2xl"} isNumeric>
                  Total / Average no.
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Marks of All Mock Test</Td>
                <Td isNumeric>41</Td>
              </Tr>
              <Tr>
                <Td>Day Wise Applied Number</Td>
                <Td isNumeric>0</Td>
              </Tr>
              <Tr>
                <Td>All Marks of Each Project</Td>
                <Td isNumeric>0</Td>
              </Tr>
              <Tr>
                <Td>Feedback of Each Project</Td>
                <Td isNumeric>0</Td>
              </Tr>
              <Tr>
                <Td>Average scores of Each Teammates</Td>
                <Td isNumeric>0</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default BikashInfo;
