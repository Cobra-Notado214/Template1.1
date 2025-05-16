"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CoinsIcon, Gift, BadgePercent, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { POINTS_PER_DOLLAR, POINTS_REDEMPTION_RATE } from "@/lib/constants";

const GoldPoints = () => {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <CoinsIcon className="h-6 w-6 text-primary mr-2" />
                <h3 className="font-heading text-xl font-semibold">Gold Points</h3>
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Earn Rewards with Every Stay
              </h2>
              
              <p className="text-gray-300 mb-8">
                Our loyalty program rewards you for every booking. Earn {POINTS_PER_DOLLAR} Gold Point for every dollar spent, and redeem your points for discounts on future stays.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-secondary-light p-2 rounded-lg mr-4">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Earn Points</h4>
                    <p className="text-sm text-gray-300">
                      {POINTS_PER_DOLLAR} point per $1 spent on bookings
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-light p-2 rounded-lg mr-4">
                    <BadgePercent className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Redeem Rewards</h4>
                    <p className="text-sm text-gray-300">
                      {POINTS_REDEMPTION_RATE} points = $1 discount
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-light p-2 rounded-lg mr-4">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Points Validity</h4>
                    <p className="text-sm text-gray-300">
                      Points valid for 12 months
                    </p>
                  </div>
                </div>
              </div>
              
              <Link href="/points">
                <Button className="bg-primary hover:bg-primary/90 text-secondary">
                  Learn More About Gold Points
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.pexels.com/photos/7936587/pexels-photo-7936587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Gold Points Loyalty Program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-200">Current Points</p>
                      <h4 className="font-heading text-2xl font-bold">1,250</h4>
                    </div>
                    <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                      <CoinsIcon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Gold Points Value:</span>
                      <span className="font-medium">${1250 / POINTS_REDEMPTION_RATE}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Next Tier:</span>
                      <span className="font-medium">750 points away</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldPoints;