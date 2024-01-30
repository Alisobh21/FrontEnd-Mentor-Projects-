import "./App.css";

function App() {
  return (
    <div className="container-body ">
      <section className="showcase">
        <div className="main text-center">
          <h1 className="font-bold text-4xl mb-10 lg:text-5xl lg:leading-tight">
            10,000+ of our users love our products.
          </h1>
          <p className="text-base leading-6 mb-10">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="stars text-center">
          <div className="rate my-5 py-2 rounded lg:flex lg:justify-center">
            <div className="flex items-center justify-center ">
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
            </div>
            <p className="mt-3 font-bold text-md"> Rated 5 Stars in Reviews</p>
          </div>
          <div className="rate my-5  py-2 rounded lg:flex lg:justify-center">
            <div className="flex items-center justify-center ">
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
            </div>
            <p className="mt-3 font-bold text-md">
              Rated 5 Stars in Report Guru
            </p>
          </div>
          <div className="rate my-5  py-2 rounded lg:flex lg:justify-center">
            <div className="flex items-center justify-center ">
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
              <img src="icon-star.svg" alt="" />
            </div>
            <p className="mt-3 font-bold text-md">Rated 5 Stars in BestTech</p>
          </div>
        </div>
      </section>
      <div className="testimonials">
        <div className="card my-10 ">
          <div className="flex items-center">
            <img
              src="image-colton.jpg"
              alt="colton"
              className="mr-10 w-14 rounded-full"
            />
            <div>
              <h3>Colton Smith</h3>
              <small>Verified Buyer</small>
            </div>
          </div>
          <p className="mt-5 text-sm">
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </p>
        </div>
        <div className="card my-10">
          <div className="flex items-center">
            <img
              src="image-irene.jpg"
              alt="colton"
              className="mr-10 w-14 rounded-full"
            />
            <div>
              <h3>Irene Roberts</h3>
              <small>Verified Buyer</small>
            </div>
          </div>
          <p className="mt-5 text-sm">
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </p>
        </div>
        <div className="card my-10">
          <div className="flex items-center">
            <img
              src="image-anne.jpg"
              alt="colton"
              className="mr-10 w-14 rounded-full"
            />
            <div>
              <h3>Anne Wallace</h3>
              <small>Verified Buyer</small>
            </div>
          </div>
          <p className="mt-5  text-sm">
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
