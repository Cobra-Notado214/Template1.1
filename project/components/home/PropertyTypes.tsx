"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building, Home, Landmark, Warehouse, TreePalm as PalmTree } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PROPERTY_TYPES } from "@/lib/constants";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  building: <Building className="h-10 w-10 text-primary" />,
  home: <Home className="h-10 w-10 text-primary" />,
  landmark: <Landmark className="h-10 w-10 text-primary" />,
  warehouse: <Warehouse className="h-10 w-10 text-primary" />,
  "palm-tree": <PalmTree className="h-10 w-10 text-primary" />,
};

const PropertyTypes = () => {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Browse by Property Type
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect accommodation for your next trip
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROPERTY_TYPES.map((type) => (
            <motion.div key={type.id} variants={item}>
              <Link 
                href={`/search?type=${type.id}`}
                className="block group"
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                      {iconMap[type.icon]}
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {type.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Explore &rarr;
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyTypes;