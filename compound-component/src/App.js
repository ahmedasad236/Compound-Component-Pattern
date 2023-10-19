import Counter from './Counter';
import './index.css';

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter>
        <Counter.Label>Counter Compound Component</Counter.Label>
        <Counter.Increase icon="+" />
        <Counter.Count />
        <Counter.Decrease icon="-" />
      </Counter>
    </div>
  );
}
