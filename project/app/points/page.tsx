import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CoinsIcon, Gift, BadgePercent, Calendar } from "lucide-react";
import { POINTS_PER_DOLLAR, POINTS_REDEMPTION_RATE } from "@/lib/constants";

export default function PointsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <CoinsIcon className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              StayGold Points Program
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Earn points with every stay and redeem them for discounts on future bookings.
              Get {POINTS_PER_DOLLAR} point for every dollar spent!
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-secondary"
              asChild
            >
              <Link href="/search">Start Earning Points</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            How Gold Points Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-6">
                <Gift className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Earn Points</h3>
              <p className="text-muted-foreground">
                Get {POINTS_PER_DOLLAR} Gold Point for every dollar spent on your bookings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-6">
                <BadgePercent className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Redeem Rewards</h3>
              <p className="text-muted-foreground">
                Use your points for discounts. {POINTS_REDEMPTION_RATE} points = $1 off your stay.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-6">
                <Calendar className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Points Validity</h3>
              <p className="text-muted-foreground">
                Your points are valid for 12 months from the date of earning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-backgroundAlt">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Gold Points Benefits
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium mb-1">Flexible Redemption</h4>
                      <p className="text-muted-foreground">
                        Use your points for any booking, with no blackout dates.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium mb-1">Points Never Expire*</h4>
                      <p className="text-muted-foreground">
                        As long as you have activity every 12 months.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium mb-1">Member Exclusive Rates</h4>
                      <p className="text-muted-foreground">
                        Get access to special rates and promotions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Luxury Hotel Room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Start Earning Gold Points Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our rewards program and start earning points with your very first booking.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-secondary"
              asChild
            >
              <Link href="/signup">Create Account</Link>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <Link href="/search">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}