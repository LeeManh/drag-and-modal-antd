import React from "react";
import styled from "styled-components";
import Task from "Task";
import { Draggable, Droppable } from "@hello-pangea/dnd";

const Container = styled.div`
  width: 300px;
  flex-shrink: 0;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const Title = styled.div`
  padding: 8px;
  cursor: pointer;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) =>
    props.isDraggingOver ? "skyblue" : "inherit"};
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provider) => (
        <Container {...provider.draggableProps} ref={provider.innerRef}>
          <Title {...provider.dragHandleProps}>{column.title}</Title>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
