"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FEATURED_DESTINATIONS } from "@/lib/constants";

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

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-backgroundAlt pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Destinations Hero"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Explore Top Travel Destinations
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover amazing places and create unforgettable memories
            </motion.p>
            <motion.div
              className="max-w-md mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-primary"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Destinations
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {FEATURED_DESTINATIONS.map((destination) => (
              <motion.div key={destination.id} variants={item}>
                <Link
                  href={`/search?destination=${destination.name}`}
                  className="group block"
                >
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center mb-2">
                        <MapPin className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-heading text-xl font-semibold text-white">
                          {destination.name}
                        </h3>
                      </div>
                      <p className="text-gray-200 mb-4 line-clamp-2">
                        {destination.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">
                          {destination.properties} properties
                        </span>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-secondary"
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Most Booked Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Most Booked This Month
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {FEATURED_DESTINATIONS.map((destination) => (
              <motion.div key={destination.id} variants={item}>
                <Link
                  href={`/search?destination=${destination.name}`}
                  className="group block"
                >
                  <div className="bg-backgroundAlt rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {destination.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          From $99/night
                        </span>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                          Popular
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}