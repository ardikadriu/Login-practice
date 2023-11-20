import Time from "./components/Time";
import Headset from "./components/Headset";
import Icon from "./components/Icon";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#FF4E29] max-w-[428px]  shrink-0 ">
      <Time />
      <Headset />
      <Icon />
      <Footer />
    </main>
  );
}
