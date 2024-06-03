import { useState } from "react";
import { Box, Button, Checkbox, Flex, Input, List, ListItem, Text } from "@chakra-ui/react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "" && newTaskDate.trim() !== "") {
      setTasks([...tasks, { text: newTask, date: newTaskDate, completed: false }]);
      setNewTask("");
      setNewTaskDate("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Box w="100%" maxW="md" mt={4}>
      <Flex mb={4}>
        <Input
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          mr={2}
        />
        <Input
          type="date"
          value={newTaskDate}
          onChange={(e) => setNewTaskDate(e.target.value)}
          mr={2}
        />
        <Button onClick={addTask} colorScheme="blue">
          Add
        </Button>
      </Flex>
      <List spacing={3}>
        {tasks.map((task, index) => (
          <ListItem key={index} display="flex" alignItems="center">
            <Checkbox
              isChecked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              mr={2}
            />
            <Text as={task.completed ? "s" : ""} flex="1">
              {task.text} - {task.date}
            </Text>
            <Button size="sm" colorScheme="red" onClick={() => deleteTask(index)}>
              X
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;