import { createEffect, createSignal } from 'solid-js';

const [count, setCount] = createSignal(0);

type Assign<A, B> = A & Omit<B, keyof A>;
type Foo = Assign<{ foo: string; bar: string }, { bar: number }>;

const foo: Foo = {};

export const App = () => {
  createEffect(() => {
    // eslint-disable-next-line no-console
    console.log('count is ', count());
  });

  // setInterval(() => setCount(count() + 1), 1000);

  return <></>;
};
