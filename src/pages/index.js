import TrustedClientsSection from "@/component/trustedclients"; import Hero from "@/component/Hero";
import Features from "@/component/features";
import Download from "@/component/download";
import Workwithus from "@/component/workwithus";
import Howwork from "@/component/howwork";
import { useEffect, useRef } from "react";

export default function Home({setScrollFunction}) {
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const workRef = useRef(null);
  const clientRef = useRef(null);
  const downloadRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) =>{
    ref.current?.scrollIntoView({behavior : "smooth"})
  }

  useEffect(()=>{
    setScrollFunction({
      hero:()=> scrollTo(heroRef),
      feature:()=> scrollTo(featureRef),
      work:()=> scrollTo(workRef),
      client:()=> scrollTo(clientRef),
      download:()=> scrollTo(downloadRef),
      contact:()=> scrollTo(contactRef)
    })
  },[setScrollFunction]);

  return (
    <div className="w-full space-y-20 mb-20">
      <Hero ref={heroRef} />

      {/* Features */}
      <Features ref={featureRef}/>

      {/* Howitwork */}
      <Howwork ref={workRef}/>

      {/* Clients */}
      <TrustedClientsSection ref={clientRef}/>

      {/* Download now */}
      <Download ref={downloadRef}/>

      {/* Work with us */}
      <Workwithus ref={contactRef}/>
    </div>
  );
}
