const RestoListView = ({
  data,
  keyword,
  setKeyword,
  onSearch,
  onDetail,
  loading,
}) => {
  return (
    <div className="container">
      <h2 className="title">🍽️ Daftar Restaurant</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Cari restaurant..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && onSearch(keyword)}
        />
        <button onClick={() => onSearch(keyword)}>Search</button>
      </div>

      {loading && <p className="loading">🔄 Loading data restaurant...</p>}

      {!loading && data.length === 0 && (
        <p className="empty">Restaurant tidak ditemukan</p>
      )}

      <div className="grid">
        {data.map((resto) => (
          <div className="card" key={resto.id}>
            <img
              src={`https://restaurant-api.dicoding.dev/images/small/${resto.pictureId}`}
              alt={resto.name}
            />
            <div className="card-body">
              <h3>{resto.name}</h3>
              <p>📍 {resto.city}</p>
              <p>⭐ {resto.rating}</p>
              <button onClick={() => onDetail(resto.id)}>
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestoListView;
