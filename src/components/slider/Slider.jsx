import "./slider.css";

function Slider() {
  return (
    <div className="slider">
      <div className="slider-container">
        <div className="title">
          <h1>Organic Food Is Good For Health</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            quibusdam laboriosam beatae cum, optio doloribus, reprehenderit est
            assumenda animi ducimus vitae atque odio sapiente et ab illum
            expedita eaque libero.
          </p>
          <div className="buttons">
            <button className="btn1">Our Services</button>
            <button className="btn2">Contact Us</button>
          </div>
        </div>

        <div className="img">
          <img src="/images/slider-2.png" alt="img" className="slider-img" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
