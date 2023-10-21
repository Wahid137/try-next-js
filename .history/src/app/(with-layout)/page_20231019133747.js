import image1 from "@/assets/atharva-whaval-00FtI1OxMUI-unsplash.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <h1>Main</h1>
      <Image src={image1} width={400} height={266.8} alt="" />
      <Image src="/hybridcycle.jpg" width={400} height={266.8} alt="" />
    </main>
  )
}

export default HomePage;