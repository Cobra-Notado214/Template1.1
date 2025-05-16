"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { FEATURED_DESTINATIONS } from "@/lib/constants";

const FeaturedDestinations = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-backgroundAlt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most sought-after destinations and find your next adventure.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {FEATURED_DESTINATIONS.map((destination) => (
            <motion.div key={destination.id} variants={item}>
              <Link 
                href={`/search?destination=${destination.name}`}
                className="group block overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center mb-1">
                      <MapPin className="h-4 w-4 mr-1 text-primary" />
                      <h3 className="font-heading font-semibold text-lg">
                        {destination.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-200 line-clamp-2">
                      {destination.description}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {destination.properties} properties
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;