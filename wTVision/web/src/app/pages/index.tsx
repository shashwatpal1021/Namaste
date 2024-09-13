import { useEffect, useState } from 'react';
import styles from '../styles/Items.module.scss';

const Home = () => {
  const [items, setItems] = useState<{ key: string, value: string }[]>([]);

  useEffect(() => {
    fetch('/api/items')  
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const handleEdit = (index: number, newValue: string) => {
    const updatedItems = [...items];
    updatedItems[index].value = newValue;
    setItems(updatedItems);
  };

  return (
    <div className={styles.itemsContainer}>
      {items.map((item, index) => (
        <div key={item.key} className={styles.item}>
          <h3>{item.key}</h3>
          <input
            type="text"
            value={item.value}
            onChange={(e) => handleEdit(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
