"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; 
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");

  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxury hotel view"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <motion.h1 
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Your Perfect Stay
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Book premium accommodations and earn Gold Points with every stay.
        </motion.p>

        {/* Search Box */}
        <motion.div 
          className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-white">Destination</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="destination"
                  placeholder="Where are you going?"
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-primary"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>

            {/* Check In */}
            <div className="space-y-2">
              <Label htmlFor="check-in" className="text-white">Check In</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="check-in"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white",
                      !checkIn && "text-gray-300"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check Out */}
            <div className="space-y-2">
              <Label htmlFor="check-out" className="text-white">Check Out</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="check-out"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white",
                      !checkOut && "text-gray-300"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-white">Guests</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Select 
                  value={guests} 
                  onValueChange={setGuests}
                >
                  <SelectTrigger 
                    id="guests" 
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-primary"
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button 
            className="w-full mt-6 bg-primary hover:bg-primary/90 text-secondary font-medium text-lg h-12"
          >
            <Search className="mr-2 h-5 w-5" /> Search
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;