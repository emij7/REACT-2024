import { lazy } from "react";

type AppProps = {
  message: string;
};
const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];
const x: [string, number] = ["hello", 10]; // OK
enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Green;

//lazy
const Button: React.LazyExoticComponent<
  React.ComponentType<{ children: string }>
> = lazy(() => import("./components/Button"));

function App({ message }: AppProps) {
  console.log(list);
  console.log(list2);
  console.log(x);
  console.log(c);
  return (
    <div>
      {message}
      <div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}

export default App;
