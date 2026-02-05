const RestoDetailView = ({ data, onBack, loading }) => {
  if (loading) return <p className="loading">🔄 Loading detail restaurant...</p>;

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={onBack}>
        ⬅ Kembali
      </button>

      <img
        className="detail-img"
        src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`}
        alt={data.name}
      />

      <h2>{data.name}</h2>
      <p>📍 {data.city}</p>
      <p>⭐ {data.rating}</p>

      <h4>Deskripsi</h4>
      <p>{data.description}</p>

      <div className="menu">
        <div>
          <h4>🍛 Makanan</h4>
          <ul>
            {data.menus.foods.map((food, i) => (
              <li key={i}>{food.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>🥤 Minuman</h4>
          <ul>
            {data.menus.drinks.map((drink, i) => (
              <li key={i}>{drink.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestoDetailView;
