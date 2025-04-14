import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
//   import { getTodos, postTodo } from '../my-api'

// Create a client
const queryClient = new QueryClient();

const Example = () => {
  return <div>hello</div>;
};

//   function Example() {
//     return (
//       // Provide the client to your App
//       <QueryClientProvider client={queryClient}> //để có thể dùng useQuery và useMutation thì cần Provider
//         <Todos />
//       </QueryClientProvider>
//     )
//   }

//   function Todos() {
//     // Access the client
//     const queryClient = useQueryClient()

//     // Queries
//     const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

//     // Mutations
//     const mutation = useMutation({
//       mutationFn: postTodo,
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries({ queryKey: ['todos'] })
//       },
//     })

//     return (
//       <div>
//         <ul>{query.data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>

//         <button
//           onClick={() => {
//             mutation.mutate({
//               id: Date.now(),
//               title: 'Do Laundry',
//             })
//           }}
//         >
//           Add Todo
//         </button>
//       </div>
//     )
//   }

export default Example;
