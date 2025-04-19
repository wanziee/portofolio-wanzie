import StickyBottomNavigationBar from "../components/StickyBottomNavigationBar";

const HomePage = () => {
  return (
    <>
      <p>hello everyone</p>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <StickyBottomNavigationBar />
      </div>
    </>
  );
};

export default HomePage;
