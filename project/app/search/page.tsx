"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, MapPin, Calendar, Users, Star, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { MOCK_PROPERTIES, PROPERTY_TYPES, POINTS_PER_DOLLAR } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function SearchPage() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [starRating, setStarRating] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [goldPointsEligible, setGoldPointsEligible] = useState(false);

  return (
    <div className="min-h-screen bg-backgroundAlt pt-20">
      {/* Sticky Search Bar */}
      <div className="sticky top-16 z-30 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Where are you going?"
                className="pl-10"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            {/* Check In */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP") : "Check in"}
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

            {/* Check Out */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP") : "Check out"}
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

            {/* Guests */}
            <div className="flex space-x-2">
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Mobile Filters Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    {/* Mobile Filters Content */}
                    <div className="space-y-6">
                      {/* Price Range */}
                      <div>
                        <Label>Price Range</Label>
                        <div className="pt-4">
                          <Slider
                            defaultValue={[0, 1000]}
                            max={1000}
                            step={10}
                            value={priceRange}
                            onValueChange={setPriceRange}
                          />
                          <div className="flex justify-between mt-2">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div>
                        <Label>Star Rating</Label>
                        <Select value={starRating} onValueChange={setStarRating}>
                          <SelectTrigger>
                            <SelectValue placeholder="Any Rating" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Any Rating</SelectItem>
                            <SelectItem value="5">5 Stars</SelectItem>
                            <SelectItem value="4">4+ Stars</SelectItem>
                            <SelectItem value="3">3+ Stars</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Property Type */}
                      <div>
                        <Label>Property Type</Label>
                        <Select value={propertyType} onValueChange={setPropertyType}>
                          <SelectTrigger>
                            <SelectValue placeholder="All Properties" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Properties</SelectItem>
                            {PROPERTY_TYPES.map((type) => (
                              <SelectItem key={type.id} value={type.id}>
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Additional Filters */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="free-cancellation">Free Cancellation</Label>
                          <Switch
                            id="free-cancellation"
                            checked={freeCancellation}
                            onCheckedChange={setFreeCancellation}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="gold-points">Gold Points Eligible</Label>
                          <Switch
                            id="gold-points"
                            checked={goldPointsEligible}
                            onCheckedChange={setGoldPointsEligible}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden md:block w-64 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <h2 className="font-heading text-lg font-semibold flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h2>

              {/* Price Range */}
              <div>
                <Label>Price Range</Label>
                <div className="pt-4">
                  <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <Label>Star Rating</Label>
                <Select value={starRating} onValueChange={setStarRating}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Rating</SelectItem>
                    <SelectItem value="5">5 Stars</SelectItem>
                    <SelectItem value="4">4+ Stars</SelectItem>
                    <SelectItem value="3">3+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Property Type */}
              <div>
                <Label>Property Type</Label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Properties" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Properties</SelectItem>
                    {PROPERTY_TYPES.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Filters */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="free-cancellation-desktop">Free Cancellation</Label>
                  <Switch
                    id="free-cancellation-desktop"
                    checked={freeCancellation}
                    onCheckedChange={setFreeCancellation}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="gold-points-desktop">Gold Points Eligible</Label>
                  <Switch
                    id="gold-points-desktop"
                    checked={goldPointsEligible}
                    onCheckedChange={setGoldPointsEligible}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6">
              {MOCK_PROPERTIES.map((property) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-72 h-48">
                        <Image
                          src={property.image}
                          alt={property.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 p-6">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div>
                            <h3 className="font-heading text-xl font-semibold mb-2">
                              {property.name}
                            </h3>
                            <div className="flex items-center text-sm text-muted-foreground mb-2">
                              <MapPin className="h-4 w-4 mr-1" />
                              {property.location}
                            </div>
                            <div className="flex items-center mb-4">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < property.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                              <span className="ml-2 text-sm">
                                ({property.reviewCount} reviews)
                              </span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-bold mb-1">
                              ${property.price}
                              <span className="text-sm font-normal text-muted-foreground">
                                /night
                              </span>
                            </div>
                            <div className="text-sm text-primary font-medium mb-4">
                              Earn {property.price * POINTS_PER_DOLLAR} Gold Points
                            </div>
                            <Button className="bg-primary hover:bg-primary/90 text-secondary">
                              View Details
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {property.features.map((feature, index) => (
                            <span
                              key={index}
                              className="inline-block text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}