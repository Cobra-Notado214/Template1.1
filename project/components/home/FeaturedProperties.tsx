"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_PROPERTIES } from "@/lib/constants";

const FeaturedProperties = () => {
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Featured Properties
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Handpicked properties that our customers love
            </p>
          </div>
          <Link href="/search" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View All Properties
            </Button>
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {MOCK_PROPERTIES.slice(0, 6).map((property) => (
            <motion.div key={property.id} variants={item}>
              <Link href={`/property/${property.id}`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary text-secondary">
                      {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {property.location}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{property.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">({property.reviewCount})</span>
                      </div>
                    </div>
                    
                    <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {property.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {property.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.slice(0, 3).map((feature, index) => (
                        <span 
                          key={index} 
                          className="inline-block text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                      {property.features.length > 3 && (
                        <span className="inline-block text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          +{property.features.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div>
                        <span className="font-heading font-bold text-lg">${property.price}</span>
                        <span className="text-sm text-muted-foreground"> / night</span>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-secondary" size="sm">
                        View Details
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
  );
};

export default FeaturedProperties;