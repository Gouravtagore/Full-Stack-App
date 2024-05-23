import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="box1">
        <div className="textbox mt-5">
          <h5 className="mb-2">Welcome to</h5>
          <h1 className="mb-2">PawSome Store</h1>
          <h6 className="mb-2">
            "Unleash Joy for Your Furry Friends with Pawsome Pet Shop - Quality Products, Happy Pets!"</h6>
          <button className="b1">Shop now</button>
        </div>
        <div className="imgbox">
          {/* <div className="bg"></div> */}
          <img src="https://images.unsplash.com/photo-1626982998101-037a46a8367b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwd2Fsa3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
      </div>


      <div className="box3 mb-5">
        <div className="card1">
          <img src="https://images.unsplash.com/photo-1554020997-47f84383f66a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwd2Fsa3xlbnwwfDF8MHx8fDA%3D" alt="" />
          <h3 className="mt-3 mx-2">Belts</h3>
        </div>
        <div className="card1">
          <img src="https://images.unsplash.com/photo-1599867685938-9d7701a2d1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwcGxheXxlbnwwfDF8MHx8fDA%3D" alt="" />
          <h3 className="mt-3 mx-2">Toys</h3>
        </div>
        <div className="card1">
          <img src="https://images.unsplash.com/photo-1508609540374-67d1601ba520?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZyUyMGVhdGluZ3xlbnwwfDF8MHx8fDA%3D" alt="" />
          <h3 className="mt-3 mx-2">Snacks</h3>
        </div>
        <div className="card1">
          <img src="https://images.unsplash.com/photo-1597595735781-6a57fb8e3e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwYmF0aHxlbnwwfDF8MHx8fDA%3D" alt="" />
          <h3 className="mt-3 mx-2">Grooming</h3>
        </div>
        <div className="card1">
          <img src="https://plus.unsplash.com/premium_photo-1707410050472-b5cfc9f50b2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnJ5YmFnJTIwZG9nfGVufDB8MXwwfHx8MA%3D%3D" alt="" />
          <h3 className="mt-3 mx-2">Carry</h3>
        </div>

      </div>


      <div className="box2">
        <div className="review">
          <div id="content">
            <div class="testimonial">
              <blockquote>
                This pet dog shopping website offers a fantastic selection of high-quality products. The user-friendly interface makes browsing easy, and the detailed descriptions help in making informed decisions. Fast shipping and excellent customer service enhance the overall experience.
              </blockquote>
              <div></div>
              <p>
                Sirisha ; Hyderabad, India
              </p>
            </div>
          </div>
        </div>

        <div className="review">
          <div id="content">
            <div class="testimonial">
              <blockquote>

                Pet Paws is an exceptional shopping website for dog owners. The user-friendly interface, extensive product range, and competitive prices make it a top choice. Excellent customer service and fast shipping enhance the overall shopping experience.
                Highly recommended!
              </blockquote>
              <div></div>
              <p>
                Viraj ; Nashik , India
              </p>
            </div>
          </div>
        </div>

        <div className="review">
          <div id="content">
            <div class="testimonial">
              <blockquote>

                Pawsome Pet Shop offers a delightful range of dog products. The user-friendly interface, fast shipping, and excellent customer service make it a go-to for pet owners.
                Highly recommend for quality and convenience in pet shopping!
                Definetly Worth it
              </blockquote>
              <div></div>
              <p>
                Manish; Banglore, India
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;
