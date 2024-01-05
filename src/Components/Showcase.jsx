import Button from "./Button";
import showcaseImage from "../assets/showcase.svg";

const Showcase = () => {
  return (
    <section className="flex items-center py-6">
      <div className="w-1/2">
        <img src={showcaseImage} alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-9xl">DEVMART</h1>
        <p className="text-5xl">
          is <span className="text-blue-500">YOUR</span> place to shop now
        </p>
        <div className="my-6 w-32">
          <Button>Browse</Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
