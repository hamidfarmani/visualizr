import { Paper, ScrollArea, Space, Text, Title } from "@mantine/core";

const DashboardPage = () => {
  return (
    <ScrollArea style={{ height: 730 }}>
      <Paper shadow="md" p="md">
        <Title order={1}>Sorting Algorithms</Title>
        <Space h="md" />

        <Text>
          Sorting algorithms are used to sort a data structure according to a
          specific order relationship, such as numerical order. This operation
          is one of the most important and widespread in computer science.
        </Text>
        <Space h="sm" />

        <Text>
          For a long time, new methods have been developed to make this
          procedure faster and faster. There are currently hundreds of different
          sorting algorithms, each with its own specific characteristics.
        </Text>
        <Space h="sm" />

        <Text>
          They are classified according to two metrics: space complexity and
          time complexity. Most of them fall into two categories: Logarithmic
          The complexity is proportional to the binary logarithm of n. An
          example of a logarithmic sorting algorithm is Merge sort, with space
          and time complexity O(n log n). Quadratic The complexity is
          proportional to the square of n. An example of a quadratic sorting
          algorithm is Bubble sort, with a time complexity of O(n2).
        </Text>
        <Space h="sm" />

        <Text>
          Space and time complexity can also be further subdivided into 3
          different cases: best case, average case and worst case. Sorting
          algorithms can be difficult to understand and it's easy to get
          confused. I thought visualizing sorting algorithms can be a great way
          to better understand their functioning while having fun!
        </Text>

        <Space h="xl" />

        <Title order={2}>Merge sort</Title>
        <Space h="sm" />

        <Text>
          The Merge Sort algorithm is a sorting algorithm that is based on the
          Divide and Conquer paradigm. In this algorithm, the array is initially
          divided into two equal halves and then they are combined in a sorted
          manner.
        </Text>
        <Space h="sm" />

        <Title order={4}>Merge Sort Working Process</Title>
        <Text>
          Think of it as a recursive algorithm continuously splits the array in
          half until it cannot be further divided. This means that if the array
          becomes empty or has only one element left, the dividing will stop,
          i.e. it is the base case to stop the recursion. If the array has
          multiple elements, split the array into halves and recursively invoke
          the merge sort on each of the halves. Finally, when both halves are
          sorted, the merge operation is applied. Merge operation is the process
          of taking two smaller sorted arrays and combining them to eventually
          make a larger one.
        </Text>

        <Space h="xl" />
      </Paper>
    </ScrollArea>
  );
};
export default DashboardPage;
