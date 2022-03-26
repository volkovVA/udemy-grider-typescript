import { useState } from 'react';

const GuesList: React.FC = () => {
  const [name, setName] = useState('');
  const [quests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...quests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {quests.map((quest) => (
          <li key={quest}>{quest}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuesList;
