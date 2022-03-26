import { Child } from './Child';

const Parent = () => {
  return <Child color="red" onClick={() => console.log('Click')} />;
};

export default Parent;
