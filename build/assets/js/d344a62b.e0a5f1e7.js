"use strict";(self.webpackChunkkhanhhv_docs=self.webpackChunkkhanhhv_docs||[]).push([[9370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,g=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(3117),r=(n(7294),n(3905)),o=n(6508);const i={slug:"advanced-react-query",title:"Advanced React Query",authors:"vinlt",tags:["reactjs","react-query","frontend"],image:"./react-query.png",description:"Advanced react query"},s=void 0,u={permalink:"/docs/build/blog/advanced-react-query",source:"@site/blog/2023-03-19-advanced-react-query-post/index.mdx",title:"Advanced React Query",description:"Advanced react query",date:"2023-03-19T00:00:00.000Z",formattedDate:"March 19, 2023",tags:[{label:"reactjs",permalink:"/docs/build/blog/tags/reactjs"},{label:"react-query",permalink:"/docs/build/blog/tags/react-query"},{label:"frontend",permalink:"/docs/build/blog/tags/frontend"}],readingTime:4.89,hasTruncateMarker:!0,authors:[{name:"Nguyen Luong Truong Vi",title:"FullStack Developer",url:"https://www.vinlt.xyz/",imageURL:"https://lh3.googleusercontent.com/a/AGNmyxa0aL71EFgqWqKsVHlutJGUlx3eyYnujFaS_OPp=s800",key:"vinlt"}],frontMatter:{slug:"advanced-react-query",title:"Advanced React Query",authors:"vinlt",tags:["reactjs","react-query","frontend"],image:"./react-query.png",description:"Advanced react query"},nextItem:{title:"Introduction React 18",permalink:"/docs/build/blog/introduction-react-18"}},l={image:n(7287).Z,authorsImageUrls:[void 0]},c=[{value:"1. Query Keys",id:"1-query-keys",level:2},{value:"2. Query function",id:"2-query-function",level:2},{value:"3. Query Variables",id:"3-query-variables",level:2},{value:"4. Mutations",id:"4-mutations",level:2},{value:"5. Infinite Queries",id:"5-infinite-queries",level:2},{value:"Conclusion",id:"conclusion",level:2}],d=(p="BlogBanner",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const h={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{imageUrl:o.Z,mdxType:"BlogBanner"}),(0,r.kt)("p",null,"React Query is a popular data management library that makes fetching, caching, and updating data in React applications easy and efficient. It simplifies complex data fetching patterns, optimizes network requests, and provides real-time updates without requiring complex configuration."),(0,r.kt)("p",null,"In this blog, we'll explore some advanced features of React Query, along with some examples to illustrate how to use them."),(0,r.kt)("h2",{id:"1-query-keys"},"1. Query Keys"),(0,r.kt)("p",null,"Query keys are the unique identifiers for queries in React Query. They help React Query keep track of the data and cache it efficiently. When a query key changes, React Query will invalidate the cache and refetch the data if needed."),(0,r.kt)("p",null,"Here's an example of how to use query keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const queryClient = new QueryClient()\n\nfunction App() {\n  const { data, isLoading } = useQuery(\n    ['todos', { status: 'active' }],\n    fetchTodos\n  )\n\n  if (isLoading) {\n    return <div>Loading...</div>\n  }\n\n  return (\n    <div>\n      <h1>Todos</h1>\n      <ul>\n        {data.map((todo) => (\n          <li key={todo.id}>{todo.title}</li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"In this example, we're using an array as a query key. The first element is a string that represents the name of the query, and the second element is an object that represents the query parameters. This way, we can have multiple queries with different parameters, but with the same name."),(0,r.kt)("h2",{id:"2-query-function"},"2. Query function"),(0,r.kt)("p",null,"The query function is responsible for fetching the data for a query. It receives the query parameters as an argument and returns a Promise with the data."),(0,r.kt)("p",null,"Here's an example of how to use a query function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function fetchTodos(status) {\n  return axios.get(`/todos?status=${status}`).then((res) => res.data)\n}\n\nconst queryClient = new QueryClient()\n\nfunction App() {\n  const { data, isLoading } = useQuery(\n    ['todos', 'active'],\n    () => fetchTodos('active')\n  )\n\n  if (isLoading) {\n    return <div>Loading...</div>\n  }\n\n  return (\n    <div>\n      <h1>Todos</h1>\n      <ul>\n        {data.map((todo) => (\n          <li key={todo.id}>{todo.title}</li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"In this example, we're using an arrow function as a query function. The arrow function receives the query parameter ('active') as an argument and returns a Promise with the data."),(0,r.kt)("h2",{id:"3-query-variables"},"3. Query Variables"),(0,r.kt)("p",null,"Query variables are similar to query parameters, but they are used for dynamic queries. Query variables can change during the lifecycle of the component, and React Query will automatically update the data accordingly."),(0,r.kt)("p",null,"Here's an example of how to use query variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const queryClient = new QueryClient()\n\nfunction App() {\n  const [status, setStatus] = useState('active')\n\n  const { data, isLoading } = useQuery(\n    ['todos', status],\n    () => fetchTodos(status)\n  )\n\n  if (isLoading) {\n    return <div>Loading...</div>\n  }\n\n  return (\n    <div>\n      <h1>Todos</h1>\n      <button onClick={() => setStatus('active')}>Active</button>\n      <button onClick={() => setStatus('completed')}>Completed</button>\n      <ul>\n        {data.map((todo) => (\n          <li key={todo.id}>{todo.title}</li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"In this example, we're using the useState hook to manage the status variable. We're also using the status variable as a query variable, so React Query will automatically update the data when the status changes."),(0,r.kt)("h2",{id:"4-mutations"},"4. Mutations"),(0,r.kt)("p",null,"Mutations are used to update or create data on the server. React Query provides a simple and powerful way to manage mutations with its useMutation hook."),(0,r.kt)("p",null,"Here's an example of how to use useMutation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const queryClient = new QueryClient()\n\nfunction App() {\n  const [title, setTitle] = useState('')\n  const [description, setDescription] = useState('')\n\n  const { mutate, isLoading } = useMutation(addTodo, {\n    onSuccess: () => {\n      queryClient.invalidateQueries('todos')\n      setTitle('')\n      setDescription('')\n    },\n  })\n\n  function handleSubmit(e) {\n    e.preventDefault()\n\n    mutate({ title, description })\n  }\n\n  return (\n    <div>\n      <h1>Add Todo</h1>\n      <form onSubmit={handleSubmit}>\n        <label>\n          Title:\n          <input\n            type=\"text\"\n            value={title}\n            onChange={(e) => setTitle(e.target.value)}\n          />\n        </label>\n        <label>\n          Description:\n          <textarea\n            value={description}\n            onChange={(e) => setDescription(e.target.value)}\n          />\n        </label>\n        <button type=\"submit\" disabled={isLoading}>\n          {isLoading ? 'Saving...' : 'Save'}\n        </button>\n      </form>\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"In this example, we're using the useMutation hook to manage the addTodo mutation. We're passing the addTodo function as the mutation function and providing an onSuccess callback to invalidate the 'todos' query and clear the form inputs."),(0,r.kt)("h2",{id:"5-infinite-queries"},"5. Infinite Queries"),(0,r.kt)("p",null,"Infinite queries are used to fetch a large amount of data that cannot be loaded all at once. React Query provides an easy way to manage infinite queries with its useInfiniteQuery hook."),(0,r.kt)("p",null,"Here's an example of how to use useInfiniteQuery:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const queryClient = new QueryClient()\n\nfunction App() {\n  const fetchTodos = async (key, nextCursor = 0) => {\n    const response = await fetch(`/api/todos?cursor=${nextCursor}`)\n    const data = await response.json()\n    return { todos: data.todos, nextCursor: data.nextCursor }\n  }\n\n  const {\n    data,\n    isLoading,\n    fetchNextPage,\n    hasNextPage,\n    isFetchingNextPage,\n  } = useInfiniteQuery('todos', fetchTodos, {\n    getNextPageParam: (lastPage) => lastPage.nextCursor,\n  })\n\n  if (isLoading) {\n    return <div>Loading...</div>\n  }\n\n  return (\n    <div>\n      <h1>Todos</h1>\n      {data.pages.map((page, i) => (\n        <React.Fragment key={i}>\n          {page.todos.map((todo) => (\n            <div key={todo.id}>\n              <h2>{todo.title}</h2>\n              <p>{todo.description}</p>\n            </div>\n          ))}\n        </React.Fragment>\n      ))}\n      {hasNextPage && (\n        <button\n          onClick={() => fetchNextPage()}\n          disabled={isFetchingNextPage}\n        >\n          {isFetchingNextPage ? 'Loading more...' : 'Load more'}\n        </button>\n      )}\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"In this example, we're using the useInfiniteQuery hook to manage the infinite todos query. We're passing the fetchTodos function as the query function and providing a getNextPageParam callback to extract the nextCursor from the last page. We're also using the fetchNextPage function to fetch the next page of data and the hasNextPage and isFetchingNextPage flags to control the load more button"),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"React Query is a powerful library that simplifies data fetching and state management in React applications. In this blog post, we covered advanced concepts such as caching, prefetching, mutations, and infinite queries."),(0,r.kt)("p",null,"Caching can improve application performance by storing data in a cache that can be reused across components. Prefetching can load data before it's needed, improving perceived performance. Mutations update or create data on the server, and React Query provides a simple and powerful way to manage mutations with its useMutation hook. Infinite queries fetch large amounts of data that cannot be loaded all at once, and React Query provides an easy way to manage them with its useInfiniteQuery hook."),(0,r.kt)("p",null,"By mastering these advanced concepts, you can take full advantage of React Query's capabilities and build robust and performant applications."))}g.isMDXComponent=!0},6508:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/react-query-6896654d6374ceec06c2de93e742c900.png"},7287:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/react-query-6896654d6374ceec06c2de93e742c900.png"}}]);