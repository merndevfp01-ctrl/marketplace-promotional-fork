import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { BadgeIndianRupee, Calculator, CheckCircle, Eye, MapPin, Percent, Sparkles, Store, UserRound, Zap } from "lucide-react";
import TrustedClientsSection from "@/component/trustedclients"; import Hero from "@/component/Hero";
import Features from "@/component/features";
import Howitwork from "@/component/howitwork";
import Download from "@/component/download";
import Workwithus from "@/component/workwithus";
;


export default function Home() {
  return (
    <div className="w-full space-y-20 mb-20">
      <Hero />

      {/* Features */}
      <Features />

      {/* Howitwork */}
      <Howitwork />

      {/* Clients */}
      <TrustedClientsSection />

      {/* Download now */}
      <Download/>

      {/* Work with us */}
      <Workwithus/>
    </div>
  );
}
