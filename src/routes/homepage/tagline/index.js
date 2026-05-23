import "./tagline.scss";
import Marquee from "react-fast-marquee";
import US from "../../../assets/images/US.svg";
import EU from "../../../assets/images/EU.svg";
import Loss from "../../../assets/images/graph loss.png";
import Profit from "../../../assets/images/GREEN PRO.png";
export default function Tagline() {
  return (
    <section className="tagline-container">
      <div className="tagline">
        <Marquee className="marquee" pauseOnHover>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">USDJPY</div>
              </div>
              <div className="bottom-counts">
                <div className="price">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Loss} alt="loss" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">EURUSD</div>
              </div>
              <div className="bottom-counts">
                <div className="price profit">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage profit">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Profit} alt="Profit" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">USDJPY</div>
              </div>
              <div className="bottom-counts">
                <div className="price">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Loss} alt="loss" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">EURUSD</div>
              </div>
              <div className="bottom-counts">
                <div className="price profit">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage profit">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Profit} alt="Profit" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">USDJPY</div>
              </div>
              <div className="bottom-counts">
                <div className="price">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Loss} alt="loss" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">EURUSD</div>
              </div>
              <div className="bottom-counts">
                <div className="price profit">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage profit">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Profit} alt="Profit" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">USDJPY</div>
              </div>
              <div className="bottom-counts">
                <div className="price">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Loss} alt="loss" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">EURUSD</div>
              </div>
              <div className="bottom-counts">
                <div className="price profit">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage profit">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Profit} alt="Profit" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">USDJPY</div>
              </div>
              <div className="bottom-counts">
                <div className="price">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Loss} alt="loss" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">EURUSD</div>
              </div>
              <div className="bottom-counts">
                <div className="price profit">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage profit">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Profit} alt="Profit" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">USDJPY</div>
              </div>
              <div className="bottom-counts">
                <div className="price">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Loss} alt="loss" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">EURUSD</div>
              </div>
              <div className="bottom-counts">
                <div className="price profit">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage profit">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Profit} alt="Profit" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">USDJPY</div>
              </div>
              <div className="bottom-counts">
                <div className="price">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Loss} alt="loss" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">EURUSD</div>
              </div>
              <div className="bottom-counts">
                <div className="price profit">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage profit">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Profit} alt="Profit" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">USDJPY</div>
              </div>
              <div className="bottom-counts">
                <div className="price">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Loss} alt="loss" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">EURUSD</div>
              </div>
              <div className="bottom-counts">
                <div className="price profit">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage profit">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Profit} alt="Profit" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">USDJPY</div>
              </div>
              <div className="bottom-counts">
                <div className="price">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Loss} alt="loss" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">EURUSD</div>
              </div>
              <div className="bottom-counts">
                <div className="price profit">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage profit">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Profit} alt="Profit" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">USDJPY</div>
              </div>
              <div className="bottom-counts">
                <div className="price">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Loss} alt="loss" />
            </div>
          </div>
          <div className="marquee-alignment">
            <div className="marquee-leftside">
              <div className="tv-clip">
                <div className="top-images">
                  <div className="first-top-img">
                    <img src={US} alt="US logo" />
                  </div>
                  <div className="bottom-img">
                    <img src={EU} alt="EU logo" />
                  </div>
                </div>
                <div className="img-text">EURUSD</div>
              </div>
              <div className="bottom-counts">
                <div className="price profit">4,547.75</div>
                <div className="country">USD</div>
                <div className="flow-percentage profit">-0.003%</div>
              </div>
            </div>
            <div className="marquee-rightside">
              <img src={Profit} alt="Profit" />
            </div>
          </div>
        </Marquee>
      
      <div className="right-image-hover">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="18"
          fill="none"
          viewBox="0 0 21 18"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M8 4H0v4h4v6h4zm8 10h-5l4-10h5zm-5-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="18"
          fill="none"
          viewBox="0 0 85 18"
        >
          <g fill="currentColor" clip-path="url(#a)">
            <path d="M63.67 4.52c0 .67-.56 1.22-1.27 1.22-.69 0-1.27-.55-1.27-1.22 0-.68.58-1.22 1.27-1.22s1.27.54 1.27 1.22M63.42 14h-2.06V6.43h2.06zM32.24 5.8c.71 0 1.28-.55 1.28-1.22 0-.68-.57-1.22-1.28-1.22-.68 0-1.26.54-1.26 1.22s.58 1.22 1.26 1.22M31.18 14h2.06V6.47h-2.06zM5.8 14H3.74V6H1V4h7.55v2H5.8zM10.6 14H8.55V6.46h2.05v1.3c.25-.7.92-1.22 1.74-1.22h.02q.29-.02.64.07v1.95c-.3-.1-.56-.13-.9-.13-.94 0-1.5.69-1.5 1.85zM36.67 14H34.6V6.48l2.06-.01v.69q.59-.85 2-.84c1.75 0 2.8 1.24 2.8 3.06V14H39.4V9.9c0-1-.38-1.82-1.21-1.82-.93 0-1.53.63-1.53 1.98zM56.56 14l4.17-10h-2.4l-2.8 7.1L52.5 4h-2.4l4.4 10zM81.5 14h-2l-1.33-4.25L76.8 14h-2.01l-2.45-7.51h2.15l1.4 4.83 1.5-4.83h1.55l1.5 4.83 1.39-4.83H84z"></path>
            <path
              fill-rule="evenodd"
              d="M16.72 14.2c1.04 0 1.77-.54 2.11-1.02V14h2.06V6.47h-2.05v.84a2.6 2.6 0 0 0-2.12-1c-2 0-3.55 1.8-3.55 3.94s1.54 3.94 3.55 3.94m.44-1.9c-1.15 0-1.9-.86-1.9-2.05 0-1.2.75-2.06 1.9-2.06s1.9.86 1.9 2.06c0 1.19-.75 2.05-1.9 2.05M27.75 13.18a2.6 2.6 0 0 1-2.11 1.01c-2 0-3.55-1.81-3.55-3.94s1.54-3.95 3.55-3.95c1.04 0 1.77.53 2.11 1.02V3.36h2.06V14h-2.06zm-3.58-2.93c0 1.2.76 2.05 1.9 2.05 1.15 0 1.9-.86 1.9-2.05 0-1.2-.75-2.06-1.9-2.06-1.14 0-1.9.86-1.9 2.06M46.43 17.35c2.3 0 3.96-1.18 3.96-3.9V6.5h-2.06v.84a2.5 2.5 0 0 0-2.1-1c-1.98 0-3.56 1.68-3.56 3.82 0 2.11 1.58 3.9 3.56 3.9.97 0 1.7-.53 2.1-1.1v.52c0 1.2-.71 2.07-1.93 2.07-.85 0-1.7-.29-2.36-.94l-1.13 1.54a5 5 0 0 0 3.52 1.21m.24-5.27a1.9 1.9 0 0 1-1.92-1.93c0-1.17.88-1.94 1.92-1.94s1.92.77 1.92 1.94c0 1.14-.88 1.93-1.92 1.93M72.19 12.7a4.1 4.1 0 0 1-3.5 1.69c-2.25 0-4-1.56-4-3.95a3.86 3.86 0 0 1 3.97-3.94c1.97 0 3.71 1.25 3.71 3.72v.1q0 .28-.03.68H66.7c.12 1 1 1.5 2 1.5.95 0 1.6-.42 1.95-.95zm-3.6-4.5c-.76 0-1.62.4-1.82 1.32h3.53c-.18-.9-.93-1.31-1.7-1.31"
              clip-rule="evenodd"
            ></path>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h85v18H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
      
      </div>
    </section>
  );
}
