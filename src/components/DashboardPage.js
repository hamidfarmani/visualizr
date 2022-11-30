import {
  Accordion,
  Paper,
  ScrollArea,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";

const DashboardPage = () => {
  const [value, setValue] = useState([]);

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

        <Accordion
          value={value}
          onChange={setValue}
          variant="separated"
          defaultValue="merge-sort"
        >
          <Accordion.Item value="merge-sort">
            <Accordion.Control>Merge sort</Accordion.Control>
            <Accordion.Panel>
              <Text>
                The Merge Sort algorithm is a sorting algorithm that is based on
                the Divide and Conquer paradigm. In this algorithm, the array is
                initially divided into two equal halves and then they are
                combined in a sorted manner.
              </Text>
              <Space h="sm" />

              <Title order={4}>Merge Sort Working Process</Title>
              <Text>
                Think of it as a recursive algorithm continuously splits the
                array in half until it cannot be further divided. This means
                that if the array becomes empty or has only one element left,
                the dividing will stop, i.e. it is the base case to stop the
                recursion. If the array has multiple elements, split the array
                into halves and recursively invoke the merge sort on each of the
                halves. Finally, when both halves are sorted, the merge
                operation is applied. Merge operation is the process of taking
                two smaller sorted arrays and combining them to eventually make
                a larger one.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="bubble-sort">
            <Accordion.Control>Bubble sort</Accordion.Control>
            <Accordion.Panel>
              <Text>
                Bubble Sort is a straighthood, easy to understand sorting
                algorithm. It works by looping through an array and comparing
                neighbouring elements, then swapping them if they are in the
                wrong order. In this fashion, the largest number “bubbles” to
                the top. This is repeated until the array is sorted.
              </Text>

              <Space h="sm" />

              <Title order={4}>Bubble Sort Working Process</Title>
              <Text>
                1. Start at the beginning of the array.
                <br />
                2. Is the adjacent element to the right less? If so, swap.
                <br />
                3. Move up to next element.
                <br />
                4. Repeat steps 2-3 until array is sorted.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="insertion-sort">
            <Accordion.Control>Insertion sort</Accordion.Control>
            <Accordion.Panel>
              <Text>
                Insertion sort is a simple sorting algorithm that works similar
                to the way you sort playing cards in your hands. The array is
                virtually split into a sorted and an unsorted part. Values from
                the unsorted part are picked and placed at the correct position
                in the sorted part.
              </Text>

              <Space h="sm" />

              <Title order={4}>Insertion Sort Working Process</Title>
              <Text>
                1. Begin with a list of unsorted elements.
                <br />
                2. Iterate through the list of unsorted elements, from the first
                item to last.
                <br />
                3. The current element is compared to the elements in all
                preceding positions to the left in each step.
                <br />
                4. If the current element is less than any of the previously
                listed elements, it is moved one position to the left.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="selection-sort">
            <Accordion.Control>Selection sort</Accordion.Control>
            <Accordion.Panel>
              <Text>
                The selection sort algorithm sorts an array by repeatedly
                finding the minimum element (considering ascending order) from
                the unsorted part and putting it at the beginning. The algorithm
                maintains two subarrays in a given array.
                <br />
                - The subarray which already sorted.
                <br />
                - The remaining subarray was unsorted.
                <br />
                In every iteration of the selection sort, the minimum element
                (considering ascending order) from the unsorted subarray is
                picked and moved to the sorted subarray.
              </Text>

              <Space h="sm" />

              <Title order={4}>Selection Sort Working Process</Title>
              <Text>
                1. Set min to the first location.
                <br />
                2. Search the minimum element in the array.
                <br />
                3. swap the first location with the minimum value in the array.
                <br />
                4. assign the second element as min.
                <br />
                5. Repeat the process until we get a sorted array.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Space h="xl" />
      </Paper>
    </ScrollArea>
  );
};
export default DashboardPage;
