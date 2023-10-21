import image1 from "@/assets/atharva-whaval-00FtI1OxMUI-unsplash.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <h1>Main</h1>
      <Image src={image1} placeholder="blur" width={400} height={266.8} alt="" />
      {/* <Image src="/hybridcycle.jpg" width={400} height={266.8} alt="" /> */}
      {/* <Image src="https://images.unsplash.com/photo-1696858853754-0c325e6dc7d4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={400} height={266.8} alt="" /> */}
    </main>
  )
}

export default HomePage;