import Link from "next/link";
import Illustration404 from "../assets/illustration404";
import TextButton from "../components/textButton";

const Custom404 = () => {
  return (
    <div
      className=" bg-gray-800 h-screen flex items-center justify-center
    lg:p-24 md:py-20 sm:py-16 py-12 px-4"
    >
      <div
        className="flex md:flex-row flex-col-reverse
      items-center justify-around w-screen"
      >
        <div className="max-w-xl font-mono text-gray-200 md:text-left text-center">
          <h1 className="md:text-6xl text-2xl">404</h1>
          <h1 className="md:text-4xl text-2xl">This is awkward...</h1>
          <p className="md:text-2xl text-base mb-6">
            Maybe you want to go back to the main page of this site?
          </p>
          <Link href="/">
            <div>
              <TextButton text="Go Back Home" />
            </div>
          </Link>
        </div>
        <div className="w-1/2 max-w-xl">
          <Illustration404 />
        </div>
      </div>
    </div>
  );
};

export default Custom404;
