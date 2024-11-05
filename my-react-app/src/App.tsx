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

function App({ message }: AppProps) {
  console.log(list);
  console.log(list2);
  console.log(x);
  console.log(c);
  return <div>{message}</div>;
}

export default App;
