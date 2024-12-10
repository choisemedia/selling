import "./styles.css";
import "./usercard.css";
import "./slider.css";
import { useRoute, Link } from "react-router5";
import { BackButton } from "@twa-dev/sdk/react";
import useScript from "./useScript";

export default function App() {
  useScript("https://c0diecypher.github.io/yyyevar.github.io/carduser.js");
  useScript("https://c0diecypher.github.io/yyyevar.github.io/swiper.js");
  useScript("https://c0diecypher.github.io/yyyevar.github.io/search.js");

  const { route } = useRoute();
  return (
    <>
      <main>
        {route.name === "home" && (
          <div class="container">
            <div class="nav">
              <img id="userphoto" class="userphoto" src="" alt="" />

              <div id="usercard" class="usercard"></div>
              <a href="https://t.me/zipperwear" class="btnurl">
                <button class="tgbutton">
                  <img
                    src="https://seeklogo.com/images/T/telegram-logo-57C0252D71-seeklogo.com.png"
                    class="widget-logo"
                  />
                  <p class="widget-text">zipperwear</p>
                  <p class="widget-text-low"> наш телеграм канал</p>
                </button>
              </a>
            </div>
            <a href="https://hyc6fv.csb.app/whois">
              <button class="search">Поиск</button>
            </a>
            <div class="slider">
              <div class="slider-list">
                <div class="slider-track">
                  <div class="slide">
                    <a target="_blank" href="https://t.me/zipperwear">
                      <img
                        src="https://c0diecypher.github.io/yyyevar.github.io/icons/image_2023-07-24_19-48-52.png"
                        class="slide"
                      />
                    </a>
                  </div>
                  <div class="slide">
                    <a class="" href="https://t.me/zipperwear">
                      <img
                        src="https://c0diecypher.github.io/yyyevar.github.io/icons/image_2023-07-24_19-49-38.png"
                        class="slide"
                      />
                    </a>
                  </div>
                  <div class="slide">
                    <a class="" href="">
                      <img
                        src="https://c0diecypher.github.io/yyyevar.github.io/icons/image_2023-07-24_19-49-52.png"
                        class="slide"
                      />
                    </a>
                  </div>
                  <div class="slide"></div>
                  <div class="slide"></div>
                </div>
              </div>
            </div>
            <h3 class="content-catalog">Каталог</h3>
            <div class="content">
              <div class="content-wears">
                <div class="item">
                  <img
                    class="itemimg"
                    src="https://i.siteapi.org/WQ8jOyCV-NT_8et3WWGlXHoPwf4=/61x239:926x610/fit-in/312x240/filters:fill(transparent):format(png)/fcf6ebfc2dd944c.s2.siteapi.org/img/eisehlfrj688c8w0gs4sc00g04cgko"
                  />
                </div>
                <div class="one">
                  <h3 class="item-price">
                    <b>12 129</b>
                  </h3>
                  <p class="item-text">Vans Old Skool</p>
                  <div class="operations">
                    <button
                      onClick="document.location='https://hyc6fv.csb.app/search.html'"
                      id="btn"
                      class="buy"
                    >
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div class="content-wears">
                <div class="item">
                  <img
                    class="itemimg"
                    src="https://gosneakers.ru/wa-data/public/shop/products/76/15/1576/images/6315/6315.440@2x.jpg"
                  />
                </div>
                <div class="one">
                  <h3 class="item-price">
                    <b>12 129</b>
                  </h3>
                  <p class="item-text">Nike Air Force 1 Low 07 White</p>
                  <div class="operations">
                    <button
                      onClick="document.location={https://hyc6fv.csb.app/search.html}"
                      id="btn"
                      class="buy"
                    >
                      Купить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {route.name === "settings" && (
          <>
            <BackButton />
          </>
        )}
        {route.name === "whois" && (
          <>
            <BackButton />
            <iframe class="nobord" src="search.html" />
          </>
        )}
        {route.name === "about" && (
          <>
            <BackButton />
            <h1>About</h1>
          </>
        )}
      </main>
    </>
  );
}
