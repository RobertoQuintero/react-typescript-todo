import { useTodos } from "../hooks/useTodos"

export const Title = () => {
  const {pendingtodos}=useTodos()

  return (
    <h1>
      Todos: {pendingtodos.length}
    </h1>
  )
}
