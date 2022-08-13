import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const compelteMark = completed ? "[完]" : "[未]";
  return <p>{`${compelteMark}${title}(ユーザ)${userId}`}</p>;
};
