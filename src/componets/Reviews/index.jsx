import Header from "../Header";
import axios from "axios";
import { createMemo, createSignal, For } from "solid-js";
const Reviews = () => {
  const [post, setPost] = createSignal([]);
  const nemo = createMemo(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setPost(res.data);
  });
  return (
    <div class=" xl:max-w-screen-xl   min-h-full overflow-y-hidden box-border overflow-x-hidden w-4/5 mx-auto">
      <Header />
      <div class="my-8">
        <For each={post()}>
          {(el, index) => (
            <div class="p-3 border mb-4 border-black" key={index()}>
              <p class="text-indigo-300 text-left">{el.email}</p>
              <p class="text-center text-purple-500">{el.username}</p>
              <p class="text-center">{el.name}</p>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
export default Reviews;
