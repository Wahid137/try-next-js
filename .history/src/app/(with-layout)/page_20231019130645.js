import image1 from "@/assets/atharva-whaval-00FtI1OxMUI-unsplash.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <h1>Main</h1>
      <Image src="/hybridcycle.jpg" width={400} height={371.5} alt="" />
    </main>
  )
}

export default HomePage;