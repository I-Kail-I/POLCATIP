import NavBar from "../Component/NavBar";
import GunungFuji from "../assets/Mount Fuji.jpeg";
import GunuEverest from "../assets/Mount Everst.jpg";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="d-flex vh-100">
        <div className="container">
          {/**Web signature */}
          <div className="row mt-5 signature" style={{ textAlign: "center" }}>
            <h1 style={{ fontFamily: "sans-serif", fontSize: "56px" }}>
              Every Peak Has A Story <br /> Start Yours Today
            </h1>

            <p
              style={{
                fontFamily: "sans",
                fontSize: "32px",
                fontWeight: "lighter",
              }}
            >
              Conquer Mountains, and create your story with <br /> adrenaline{" "}
            </p>
          </div>

          <div className="row mt-5">
            <div className="card d-flex flex-row flex-wrap flex-md-nowrap">
              <div className="col">
                <img
                  src={GunungFuji}
                  alt="Mount Fuji"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>

              <div className="col">
                <h3>
                  Mount Everest ─{" "}
                  <span style={{ fontFamily: "inter" }}>
                    The Ultimate Test for those who seek for an extreme
                    challenge. Do you ready to test your body? So start the
                    journey now
                  </span>{" "}
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <div className="col">
                  
                </div>

                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
