"use strict";(self.webpackChunkkhanhhv_docs=self.webpackChunkkhanhhv_docs||[]).push([[8432],{4608:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"introduction-react-18","metadata":{"permalink":"/docs/build/blog/introduction-react-18","source":"@site/blog/2023-03-19-react-18-post/index.mdx","title":"Introduction React 18","description":"fjdosafjasoidjfiosd","date":"2023-03-19T00:00:00.000Z","formattedDate":"March 19, 2023","tags":[{"label":"reactjs","permalink":"/docs/build/blog/tags/reactjs"},{"label":"frontend","permalink":"/docs/build/blog/tags/frontend"}],"readingTime":2.325,"hasTruncateMarker":true,"authors":[{"name":"Nguyen Luong Truong Vi","title":"FullStack Developer","url":"https://www.vinlt.xyz/","imageURL":"https://lh3.googleusercontent.com/a/AGNmyxa0aL71EFgqWqKsVHlutJGUlx3eyYnujFaS_OPp=s800","key":"vinlt"}],"frontMatter":{"slug":"introduction-react-18","title":"Introduction React 18","authors":"vinlt","tags":["reactjs","frontend"],"image":"./react-18.png","description":"fjdosafjasoidjfiosd"},"nextItem":{"title":"Advanced React Query","permalink":"/docs/build/blog/advanced-react-query"}},"content":"import BannerImage from \'./react-18.png\';\\n\\n<BlogBanner \\n  imageUrl={BannerImage}\\n/>\\n\\nReact 18 is the latest version of the popular front-end JavaScript library. This new version comes with several improvements that make it easier and more efficient to develop web applications. In this blog, we will take a closer look at some of the key features of React 18 and how they can benefit developers.\\n\\n\x3c!--truncate--\x3e\\n\\n## 1. Automatic Batching of State Updates\\nIn React 18, the library will automatically batch state updates in certain situations. This means that if you have multiple state updates that occur within the same event loop, React will group them together and perform them in a single batch update. This can result in significant performance improvements, as it reduces the number of unnecessary re-renders that occur in your application.\\n\\n## 2. Suspense for Data Fetching\\nAnother major feature of React 18 is the introduction of Suspense for data fetching. This allows you to display a loading indicator while your application is waiting for data to be fetched from an external API or database. Suspense also allows you to handle errors more gracefully, by displaying an error message if data fetching fails.\\n\\n## 3. Improved Server-Side Rendering\\nReact 18 includes several improvements to server-side rendering (SSR). SSR is the process of rendering your React components on the server, rather than in the browser. This can result in faster initial page loads and improved search engine optimization (SEO). With React 18, SSR has been made more efficient and flexible, allowing you to customize how your components are rendered on the server.\\n\\n## 4. New Event Delegation Model\\nReact 18 introduces a new event delegation model, which can improve performance when handling events. In the past, React would attach event listeners directly to each individual element in the DOM. This could lead to performance issues if you had a large number of elements that needed to handle events. With the new event delegation model, React attaches a single event listener to the parent element, which can handle events for all child elements. This can significantly reduce the number of event listeners in your application, leading to improved performance.\\n\\n## 5. Improved Developer Experience\\nFinally, React 18 includes several improvements to the developer experience. This includes improved error messages and warnings, better support for debugging, and easier integration with other tools and frameworks. These improvements can help developers to more easily build and maintain high-quality web applications.\\n\\nIn conclusion, React 18 is a major update to the popular front-end JavaScript library. It includes several new features and improvements that can help developers to build faster, more efficient, and more maintainable web applications. If you are a React developer, you should definitely take the time to explore the new features and see how they can benefit your projects."},{"id":"advanced-react-query","metadata":{"permalink":"/docs/build/blog/advanced-react-query","source":"@site/blog/2023-03-19-advanced-react-query-post/index.mdx","title":"Advanced React Query","description":"Advanced react query","date":"2023-03-19T00:00:00.000Z","formattedDate":"March 19, 2023","tags":[{"label":"reactjs","permalink":"/docs/build/blog/tags/reactjs"},{"label":"react-query","permalink":"/docs/build/blog/tags/react-query"},{"label":"frontend","permalink":"/docs/build/blog/tags/frontend"}],"readingTime":4.89,"hasTruncateMarker":true,"authors":[{"name":"Nguyen Luong Truong Vi","title":"FullStack Developer","url":"https://www.vinlt.xyz/","imageURL":"https://lh3.googleusercontent.com/a/AGNmyxa0aL71EFgqWqKsVHlutJGUlx3eyYnujFaS_OPp=s800","key":"vinlt"}],"frontMatter":{"slug":"advanced-react-query","title":"Advanced React Query","authors":"vinlt","tags":["reactjs","react-query","frontend"],"image":"./react-query.png","description":"Advanced react query"},"prevItem":{"title":"Introduction React 18","permalink":"/docs/build/blog/introduction-react-18"},"nextItem":{"title":"Welcome","permalink":"/docs/build/blog/welcome"}},"content":"import BannerImage from \'./react-query.png\';\\n\\n<BlogBanner \\n  imageUrl={BannerImage}\\n/>\\n\\nReact Query is a popular data management library that makes fetching, caching, and updating data in React applications easy and efficient. It simplifies complex data fetching patterns, optimizes network requests, and provides real-time updates without requiring complex configuration.\\n\\n\x3c!--truncate--\x3e\\n\\nIn this blog, we\'ll explore some advanced features of React Query, along with some examples to illustrate how to use them.\\n\\n## 1. Query Keys\\n\\nQuery keys are the unique identifiers for queries in React Query. They help React Query keep track of the data and cache it efficiently. When a query key changes, React Query will invalidate the cache and refetch the data if needed.\\n\\nHere\'s an example of how to use query keys:\\n\\n```jsx\\nconst queryClient = new QueryClient()\\n\\nfunction App() {\\n  const { data, isLoading } = useQuery(\\n    [\'todos\', { status: \'active\' }],\\n    fetchTodos\\n  )\\n\\n  if (isLoading) {\\n    return <div>Loading...</div>\\n  }\\n\\n  return (\\n    <div>\\n      <h1>Todos</h1>\\n      <ul>\\n        {data.map((todo) => (\\n          <li key={todo.id}>{todo.title}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  )\\n}\\n```\\n\\nIn this example, we\'re using an array as a query key. The first element is a string that represents the name of the query, and the second element is an object that represents the query parameters. This way, we can have multiple queries with different parameters, but with the same name.\\n\\n## 2. Query function\\n\\nThe query function is responsible for fetching the data for a query. It receives the query parameters as an argument and returns a Promise with the data.\\n\\nHere\'s an example of how to use a query function:\\n\\n```jsx\\nfunction fetchTodos(status) {\\n  return axios.get(`/todos?status=${status}`).then((res) => res.data)\\n}\\n\\nconst queryClient = new QueryClient()\\n\\nfunction App() {\\n  const { data, isLoading } = useQuery(\\n    [\'todos\', \'active\'],\\n    () => fetchTodos(\'active\')\\n  )\\n\\n  if (isLoading) {\\n    return <div>Loading...</div>\\n  }\\n\\n  return (\\n    <div>\\n      <h1>Todos</h1>\\n      <ul>\\n        {data.map((todo) => (\\n          <li key={todo.id}>{todo.title}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  )\\n}\\n```\\n\\nIn this example, we\'re using an arrow function as a query function. The arrow function receives the query parameter (\'active\') as an argument and returns a Promise with the data.\\n\\n## 3. Query Variables\\n\\nQuery variables are similar to query parameters, but they are used for dynamic queries. Query variables can change during the lifecycle of the component, and React Query will automatically update the data accordingly.\\n\\nHere\'s an example of how to use query variables:\\n\\n```jsx\\nconst queryClient = new QueryClient()\\n\\nfunction App() {\\n  const [status, setStatus] = useState(\'active\')\\n\\n  const { data, isLoading } = useQuery(\\n    [\'todos\', status],\\n    () => fetchTodos(status)\\n  )\\n\\n  if (isLoading) {\\n    return <div>Loading...</div>\\n  }\\n\\n  return (\\n    <div>\\n      <h1>Todos</h1>\\n      <button onClick={() => setStatus(\'active\')}>Active</button>\\n      <button onClick={() => setStatus(\'completed\')}>Completed</button>\\n      <ul>\\n        {data.map((todo) => (\\n          <li key={todo.id}>{todo.title}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  )\\n}\\n```\\n\\nIn this example, we\'re using the useState hook to manage the status variable. We\'re also using the status variable as a query variable, so React Query will automatically update the data when the status changes.\\n\\n## 4. Mutations\\n\\nMutations are used to update or create data on the server. React Query provides a simple and powerful way to manage mutations with its useMutation hook.\\n\\nHere\'s an example of how to use useMutation:\\n\\n```jsx\\nconst queryClient = new QueryClient()\\n\\nfunction App() {\\n  const [title, setTitle] = useState(\'\')\\n  const [description, setDescription] = useState(\'\')\\n\\n  const { mutate, isLoading } = useMutation(addTodo, {\\n    onSuccess: () => {\\n      queryClient.invalidateQueries(\'todos\')\\n      setTitle(\'\')\\n      setDescription(\'\')\\n    },\\n  })\\n\\n  function handleSubmit(e) {\\n    e.preventDefault()\\n\\n    mutate({ title, description })\\n  }\\n\\n  return (\\n    <div>\\n      <h1>Add Todo</h1>\\n      <form onSubmit={handleSubmit}>\\n        <label>\\n          Title:\\n          <input\\n            type=\\"text\\"\\n            value={title}\\n            onChange={(e) => setTitle(e.target.value)}\\n          />\\n        </label>\\n        <label>\\n          Description:\\n          <textarea\\n            value={description}\\n            onChange={(e) => setDescription(e.target.value)}\\n          />\\n        </label>\\n        <button type=\\"submit\\" disabled={isLoading}>\\n          {isLoading ? \'Saving...\' : \'Save\'}\\n        </button>\\n      </form>\\n    </div>\\n  )\\n}\\n```\\n\\nIn this example, we\'re using the useMutation hook to manage the addTodo mutation. We\'re passing the addTodo function as the mutation function and providing an onSuccess callback to invalidate the \'todos\' query and clear the form inputs.\\n\\n## 5. Infinite Queries\\n\\nInfinite queries are used to fetch a large amount of data that cannot be loaded all at once. React Query provides an easy way to manage infinite queries with its useInfiniteQuery hook.\\n\\nHere\'s an example of how to use useInfiniteQuery:\\n\\n```jsx\\nconst queryClient = new QueryClient()\\n\\nfunction App() {\\n  const fetchTodos = async (key, nextCursor = 0) => {\\n    const response = await fetch(`/api/todos?cursor=${nextCursor}`)\\n    const data = await response.json()\\n    return { todos: data.todos, nextCursor: data.nextCursor }\\n  }\\n\\n  const {\\n    data,\\n    isLoading,\\n    fetchNextPage,\\n    hasNextPage,\\n    isFetchingNextPage,\\n  } = useInfiniteQuery(\'todos\', fetchTodos, {\\n    getNextPageParam: (lastPage) => lastPage.nextCursor,\\n  })\\n\\n  if (isLoading) {\\n    return <div>Loading...</div>\\n  }\\n\\n  return (\\n    <div>\\n      <h1>Todos</h1>\\n      {data.pages.map((page, i) => (\\n        <React.Fragment key={i}>\\n          {page.todos.map((todo) => (\\n            <div key={todo.id}>\\n              <h2>{todo.title}</h2>\\n              <p>{todo.description}</p>\\n            </div>\\n          ))}\\n        </React.Fragment>\\n      ))}\\n      {hasNextPage && (\\n        <button\\n          onClick={() => fetchNextPage()}\\n          disabled={isFetchingNextPage}\\n        >\\n          {isFetchingNextPage ? \'Loading more...\' : \'Load more\'}\\n        </button>\\n      )}\\n    </div>\\n  )\\n}\\n```\\n\\nIn this example, we\'re using the useInfiniteQuery hook to manage the infinite todos query. We\'re passing the fetchTodos function as the query function and providing a getNextPageParam callback to extract the nextCursor from the last page. We\'re also using the fetchNextPage function to fetch the next page of data and the hasNextPage and isFetchingNextPage flags to control the load more button\\n\\n## Conclusion\\n\\nReact Query is a powerful library that simplifies data fetching and state management in React applications. In this blog post, we covered advanced concepts such as caching, prefetching, mutations, and infinite queries.\\n\\nCaching can improve application performance by storing data in a cache that can be reused across components. Prefetching can load data before it\'s needed, improving perceived performance. Mutations update or create data on the server, and React Query provides a simple and powerful way to manage mutations with its useMutation hook. Infinite queries fetch large amounts of data that cannot be loaded all at once, and React Query provides an easy way to manage them with its useInfiniteQuery hook.\\n\\nBy mastering these advanced concepts, you can take full advantage of React Query\'s capabilities and build robust and performant applications."},{"id":"welcome","metadata":{"permalink":"/docs/build/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/docs/build/blog/tags/facebook"},{"label":"hello","permalink":"/docs/build/blog/tags/hello"},{"label":"docusaurus","permalink":"/docs/build/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"Advanced React Query","permalink":"/docs/build/blog/advanced-react-query"},"nextItem":{"title":"MDX Blog Post","permalink":"/docs/build/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/docs/build/blog/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/docs/build/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/docs/build/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/docs/build/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/docs/build/blog/long-blog-post","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/docs/build/blog/tags/hello"},{"label":"docusaurus","permalink":"/docs/build/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/docs/build/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/docs/build/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/docs/build/blog/first-blog-post","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/docs/build/blog/tags/hola"},{"label":"docusaurus","permalink":"/docs/build/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/docs/build/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);