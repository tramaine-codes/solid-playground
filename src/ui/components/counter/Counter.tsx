import { Show, createEffect, createSignal } from 'solid-js';

export const Counter = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount((prev) => prev + 1);

  createEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`count is ${count()}`);
  });

  return (
    <Show when={count() <= 5} fallback="Count limit reached.">
      <span>Count is {count()}</span>{' '}
      <button onClick={increment} type="button">
        Increment
      </button>{' '}
      <button onClick={() => setCount(0)} type="button">
        Reset
      </button>
    </Show>
  );
};
