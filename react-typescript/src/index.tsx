import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';
import GuesList from './state/GuestList';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <GuesList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
