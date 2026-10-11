import { useState } from 'react';
import ProductCard from './components/ProductCard';
import useProducts from './hooks/useProducts';

function App() {
  const { items, isLoading, errorText } = useProducts();
  const [query, setQuery] = useState('');
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => setCartItems((prev) => prev + 1);

  const visibleItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="shop">
      <header className="shop__header">
        <h1>АгроМаркет</h1>
        <div className="shop__cart">🛒 Корзина: {cartItems}</div>
      </header>

      <main className="shop__main">
        <h2 className="shop__heading">Каталог</h2>
        <input
          className="shop__search"
          type="text"
          placeholder="Поиск товара..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {isLoading && <p>Загрузка...</p>}
        {errorText && <p className="shop__error">{errorText}</p>}

        {!isLoading && !errorText && (
          <div className="shop__grid">
            {visibleItems.map((item) => (
              <ProductCard key={item.id} product={item} onAdd={addToCart} />
            ))}
          </div>
        )}
      </main>

      <footer className="shop__footer">
        <p>&copy; 2026 АгроМаркет — лабораторная работа №3. Выполнил: Біржан Талғат</p>
      </footer>
    </div>
  );
}

export default App;
