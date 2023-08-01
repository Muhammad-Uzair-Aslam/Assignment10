import "./App.css";
import NavBar from "./components/navBar/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Button from "./components/button/Button";
import rocketLauncherImg from "../src/assets/imgs/RocketLaunch.png";
import imageplaceholderimg from "../src/assets/imgs/Image Placeholder.png";
import AvatarImg from "../src/assets/imgs/Avatar.png";
import TrendingCollection from "./components/trendingCollection/TrendingCollection";
import primaryPlaceholderImg from "./assets/imgs/Primary Photo Placeholder.png";
import secondaryImg from "./assets/imgs/Secondary Photo Placeholder.png";
import secondaryImg1 from "./assets/imgs/Secondary Photo Placeholder 1.png";
import secondaryImg2 from "./assets/imgs/Secondary Photo Placeholder 2.png";
import secondaryImg3 from "./assets/imgs/Secondary Photo Placeholder 3.png";
import secondaryImg4 from "./assets/imgs/Secondary Photo Placeholder 4.png";
import secondaryImg5 from "./assets/imgs/Secondary Photo Placeholder 5.png";
import avatarImg1 from "./assets/imgs/Avatar 1.png";
import avatarImg2 from "./assets/imgs/Avatar 2.png";
import avatarImg3 from "./assets/imgs/Avatar 3.png";
import primaryPlaceholderImg1 from "./assets/imgs/Primary Photo Placeholder 1.png";
import primaryPlaceholderImg2 from "./assets/imgs/Primary Photo Placeholder 2.png";
import ButtonOutline from "./components/buttonOutline/ButtonOutline";
import TopCreators from "./components/topCreators/TopCreators";
import person1 from "./assets/imgs/Avatar Placeholder.png";
import person2 from "./assets/imgs/Artist Avatar.png";
import person3 from "./assets/imgs/Artist Avatar 1.png";
import person4 from "./assets/imgs/Avatar placeholder 1.png";
import person5 from "./assets/imgs/Asset 1.png";
import person6 from "./assets/imgs/Asset 2.png";
import person7 from "./assets/imgs/Asset 3.png";
import person8 from "./assets/imgs/Asset 4.png";
import person9 from "./assets/imgs/Asset 5.png";
import person10 from "./assets/imgs/Asset 6.png";
import person11 from "./assets/imgs/Asset 7.png";
import person12 from "./assets/imgs/Asset 8.png";
import eyeImg from "./assets/imgs/Eye.png";
import HeadingAndoption from "./components/headingAndoption/HeadingAndoption";
import DiscoverMore from "./components/discoverMore/DiscoverMore";
import ImgCard1 from "./assets/imgs/Image.png";
import ImgCard2 from "./assets/imgs/Image 1.png";
import ImgCard3 from "./assets/imgs/Image 3.png";
import Imgcard4 from "./assets/imgs/smallPic.png";
import Imgcard5 from "./assets/imgs/smallPic 1.png";
import Imgcard6 from "./assets/imgs/smallPic 2.png";
import BrowseCategory from "./components/browseCategory/BrowseCategory";
import BrowseCategoryImg1 from "./assets/imgs/Photo & Icon.png";
import BrowseCategoryImg2 from "./assets/imgs/cat.png";
import BrowseCategoryImg3 from "./assets/imgs/Category Icon 1.png";
import BrowseCategoryImg4 from "./assets/imgs/Category Icon 2.png";
import BrowseCategoryImg5 from "./assets/imgs/Photo & Icon (1).png";
import BrowseCategoryImg6 from "./assets/imgs/Category Icon 3.png";
import BrowseCategoryImg7 from "./assets/imgs/Category Icon 4.png";
import BrowseCategoryImg8 from "./assets/imgs/Photo & Icon (2).png";
import NFTImg from "./assets/imgs/NFT Highlight.png";
import HowITWorks from "./components/howITWorks/HowITWorks";
import Icon from "./assets/imgs/Icon.png";
import Icon2 from "./assets/imgs/Icon 2.png";
import Icon3 from "./assets/imgs/Icon 3.png";
import photo from "./assets/imgs/Photo.png";
import envelopSimpleImg from './assets/imgs/EnvelopeSimple.png'
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="text-white">
      <NavBar />
      <div className="container pt-5 text-white">
        <div className="row pt-5">
          <div className="col-lg-6 col-sm-12 p-4">
            <h1
              className="fw-bold display-2 px-5"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Discover Digital Art & Collect NFTs
            </h1>
            <p style={{ fontSize: "18px" }} className="px-5">
              NFT Marketplace UI Created With Anima For Figma. Collect, Buy And
              Sell Art From More Than 20k NFT Artists.
            </p>
            <div className="p-5">
              <Button title="Get Started" src={rocketLauncherImg} />
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <h3 className="pt-4">240K+</h3>
                    <p>Total Sale</p>
                  </div>
                  <div className="col-4">
                    <h3 className="pt-4">100K+</h3>
                    <p>Auctions</p>
                  </div>
                  <div className="col-4">
                    <h3 className="pt-4">240K+</h3>
                    <p>Artists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div
              style={{
                height: "450px",
                backgroundColor: "#3B3B3B",
                width: "450px",
                borderRadius: "20px",
              }}
            >
              <img src={imageplaceholderimg} width={"450px"} />
              <h4 className="p-2">Space Walking</h4>
              <img src={AvatarImg} className="px-2" />
              <span>Animakid</span>
            </div>
          </div>
        </div>
        <h1
          className="pt-5 px-5"
          style={{ fontFamily: "Playfair Display, serif", fontWeight: "bold" }}
        >
          Trending Collection
        </h1>
        <p className="px-5">Checkout our weekly updated trending collection</p>
      </div>
      <div className="container pt-5">
        <div className="row ">
          <TrendingCollection
            img1={primaryPlaceholderImg}
            img2={secondaryImg}
            img3={secondaryImg1}
            img4={avatarImg1}
            title="DSGN Animals"
            desc="MrFox"
          />
          <TrendingCollection
            img1={primaryPlaceholderImg1}
            img2={secondaryImg2}
            img3={secondaryImg3}
            img4={avatarImg2}
            title="Magic Mushrooms"
            desc="Shroomie"
          />
          <TrendingCollection
            img1={primaryPlaceholderImg2}
            img2={secondaryImg4}
            img3={secondaryImg5}
            img4={avatarImg3}
            title="Disco Machines"
            desc="BeKind2Robots"
          />
          <HeadingAndoption
            heading="Top Creators"
            title="View Ranking"
            para="Checkout Top Rated Creators on the NFT Marketplace"
            src={rocketLauncherImg}
          />
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <TopCreators title="1" src={person1} name="Keepitreal" />
          <TopCreators title="2" src={person2} name="DigiLab" />
          <TopCreators title="3" src={person3} name="GravityOne" />
          <TopCreators title="4" src={person4} name="Juanie" />
        </div>
        <div className="row">
          <TopCreators title="5" src={person5} name="BlueWhale" />
          <TopCreators title="6" src={person6} name="Mr Fox" />
          <TopCreators title="7" src={person7} name="Shroomie" />
          <TopCreators title="8" src={person8} name="Robotica" />
        </div>
        <div className="row">
          <TopCreators title="9" src={person9} name="Rusty Robot" />
          <TopCreators title="10" src={person10} name="Animakid" />
          <TopCreators title="11" src={person11} name="Dotgu" />
          <TopCreators title="12" src={person12} name="Ghiblier" />
        </div>
        <div className="row">
          <HeadingAndoption
            heading="Discover More NFTs"
            title="See All"
            para="Explore New Trending NFTs"
            src={eyeImg}
          />
        </div>
        <div className="row">
          <DiscoverMore
            src={ImgCard1}
            heading="Distant Galaxy"
            src1={Imgcard4}
            title="MoonDancer"
          />
          <DiscoverMore
            src={ImgCard2}
            heading="Life on Edena"
            src1={Imgcard5}
            title="NebulaKid"
          />
          <DiscoverMore
            src={ImgCard3}
            heading="AstroFiction"
            src1={Imgcard6}
            title="Spaceone"
          />
        </div>
        <div className="row pt-5">
          <div className="col-12">
            <h3 className="px-5">Browse Category</h3>
          </div>
          <BrowseCategory heading="Art" src={BrowseCategoryImg1} />
          <BrowseCategory heading="Collectibles" src={BrowseCategoryImg2} />
          <BrowseCategory heading="Music" src={BrowseCategoryImg3} />
          <BrowseCategory heading="Photography" src={BrowseCategoryImg4} />
        </div>
        <div className="row mt-3">
          <BrowseCategory heading="Video" src={BrowseCategoryImg5} />
          <BrowseCategory heading="Utilty" src={BrowseCategoryImg6} />
          <BrowseCategory heading="Sports" src={BrowseCategoryImg7} />
          <BrowseCategory heading="Virtual Worlds" src={BrowseCategoryImg8} />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-5">
          <img src={NFTImg} />
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <h3>How it Works</h3>
          <p>Find out how to get started</p>
        </div>
        <div className="row mt-5">
          <HowITWorks
            src={Icon}
            heading="Setup Your wallet"
            para="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
          />
          <HowITWorks
            src={Icon2}
            heading="Create Collection"
            para="Upload your work and setup your collections.Add a description ,social links and floor prices"
          />
          <HowITWorks
            src={Icon3}
            heading="Start Earning"
            para="Choose between auctions and fixed price listing. Start Earning by selling your NFTs or trading others"
          />
        </div>
        <br /> <br />
        <div
          className="row p-5"
          style={{
            margin: "0px 50px",
            backgroundColor: "#3B3B3B",
            borderRadius: "30px",
          }}
        >
          <div className="col-lg-6 col-sm-12 mx-auto ">
            <img src={photo} width={"330px"} />
          </div>
          <div className="col-lg-6 col-sm-12 mx-auto ">
            <h1>
              Join Our Weekly
              <br /> Digest
            </h1>
            <p style={{ font: "24px" }}>
              Get exclusive promotions & updates
              <br />
              straight to your inbox.
            </p>
            <div class="d-flex">
              <input
                type="email"
                class="form-control p-2  input-email"
                placeholder="Enter Your Email here"
                style={{width:"300px"}}
              />
              {/* <button
                class=" m"
                style={{
                  background: " #a259ff",
                  background: "var(--call-to-action,#a259ff)",
                  border: "0",
                  borderRadius: "20px",
                  color: " #fff",
                  height: "55px",
                  marginLeft: "-2rem",
                  padding: "0 30px",
                }}
              >
                <i class="bi bi-envelope me-1"></i> Send
              </button> */}
              <div style={{marginLeft: "-3rem"}}>
              <Button title="send" src={envelopSimpleImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
