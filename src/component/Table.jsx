import { Table } from "@mantine/core";

export const TablularData = ({ data }) => {
  const rows = data.map((element) => (
    <Table.Tr key={element.title}>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>{element.class1}</Table.Td>
      <Table.Td>{element.class2}</Table.Td>
      <Table.Td>{element.class3}</Table.Td>
    </Table.Tr>
  ));

  const header = (
    <Table.Tr>
      <Table.Th>Measure</Table.Th>
      <Table.Th>Class 1</Table.Th>
      <Table.Th>Class 2</Table.Th>
      <Table.Th>Class 3</Table.Th>
    </Table.Tr>
  );

  return (
    <Table
      withTableBorder
      withColumnBorders
      style={{
        width: "50%",
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <Table.Thead>{header}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
