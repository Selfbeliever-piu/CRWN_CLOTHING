  const App = () => {
    
    const categories = [
      {
        id: 1,
        title: 'Hats'
      },
      {
        id: 2,
        title: 'Jackets'
      },
      {
        id: 3,
        title: 'Sneakers'
      },
      {
        id: 4,
        title: 'Womens'
      },
      {
        id: 5,
        title: 'mens'
      }
    ]
    
    return (
      <div className="categories-container">
      {categories && categories.map(item  => (
        <div className="category-container" key={item.id}>
        {/* <img/> */}
          <div className="background-image"></div>
            <div className="category-body-container">
              <h2>{item.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
      ))}
      </div>
    );
  }

  export default App;
