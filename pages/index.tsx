import styles from "@/styles/Home.module.css";
import HeadSection from "@/components/HeadSection";
import HeaderSection from "@/components/header/HeaderSection";
import CreatorSection from "@/components/main/CreatorSection";
import FooterSection from "@/components/footer/FooterSection";
import VisitorSection from "@/components/main/VisitorSection";
import MainSection from "@/components/main/MainSection";

export default function Home() {
  return (
    <>
      <HeadSection />
      <MainSection />
    </>
  );
}
