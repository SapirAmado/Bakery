const Cards = () => {
  const cheeseCake = {
    titleCheese: "עוגת גבינה אוכמניות",
    Image: {
      url: "https://cdn.pixabay.com/photo/2017/02/14/04/12/cake-2064637_960_720.jpg",
      alt: "cheese Cake",
    },
    descriptionCheese: "עוגת גבינה עשירה עם מחית אוכמניות תוצרת בית",
  };

  const chocolateCake = {
    titleChoco: "עוגת שוקולד ותותים",
    Image: {
      url: "https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg",
      alt: "chocolate Cake",
    },
    descriptionChoco: "שכבות עוגת שוקולד עם קרם שוקולד שוויצרי בציפוי גאנש שוקולד חלב ותותים"
  };

  const macaron = {
    titleMacaron: "מארז עוגיות מקרון",
    Image: {
      url: "https://cdn.pixabay.com/photo/2020/01/05/07/15/colorful-4742428_960_720.jpg",
      alt: "Macaron",
    },
    descriptionMacaron: "מארז עוגיות מקרון בטעמים שונים: תות, פיסטוק, פסיפלורה, לבנדר, רובי ולימונצ'לו"
  };

  const cookies = {
    titlecookies: "מארז עוגיות לבבות מסוכרים",
    Image: {
      url: "https://cdn.pixabay.com/photo/2013/07/25/11/58/heart-166918_960_720.jpg",
      alt: "cookies",
    },
    descriptioncookies: "עוגיות קראנצ'יות מבצק עלים מפוצצות בסוכר וניל בצורת לבבות"
  };

  const {
    titleCheese,
    descriptionCheese,
  } = cheeseCake;

  const {
    titleChoco,
    descriptionChoco,
  } = chocolateCake;

  const {
    titleMacaron,
    descriptionMacaron,
  } = macaron;

  const {
    titlecookies,
    descriptioncookies,
  } = cookies;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2017/02/14/04/12/cake-2064637_960_720.jpg" className="img-fluid" alt="cheese Cake"/>
        <div className="card-body">
          <h5 className="card-title">{titleCheese}</h5>
          <p className="card-text">{descriptionCheese}</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg" className="img-fluid" alt="chocolate Cake"/>
        <div className="card-body">
          <h5 className="card-title">{titleChoco}</h5>
          <p className="card-text">{descriptionChoco}</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2020/01/05/07/15/colorful-4742428_960_720.jpg" className="img-fluid" alt="Macaron"/>
        <div className="card-body">
          <h5 className="card-title">{titleMacaron}</h5>
          <p className="card-text">{descriptionMacaron}</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2013/07/25/11/58/heart-166918_960_720.jpg" className="img-fluid" alt="cookies"/>
        <div className="card-body">
          <h5 className="card-title">{titlecookies}</h5>
          <p className="card-text">{descriptioncookies}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cards;
