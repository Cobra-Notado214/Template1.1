import React from "react";
import Hero from "@/components/home/Hero";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import PropertyTypes from "@/components/home/PropertyTypes";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import GoldPoints from "@/components/home/GoldPoints";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <PropertyTypes />
      <FeaturedProperties />
      <GoldPoints />
      <Testimonials />
      <CallToAction />
    </>
  );
}