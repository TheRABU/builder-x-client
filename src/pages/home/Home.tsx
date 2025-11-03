import BuilderPage from "../builder/BuilderPage";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-neutral-800">
        <h2 className="text-3xl text-white text-center">
          Select your components and build a website
        </h2>

        <div>
          <BuilderPage />
        </div>
      </div>
    </>
  );
};

export default Home;
