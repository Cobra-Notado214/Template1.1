import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
          Start Earning Gold Points With Your Next Adventure
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
          Join {APP_NAME} today to access exclusive deals, earn rewards, and enhance your travel experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg" 
            className="bg-secondary text-primary hover:bg-secondary/90 font-medium"
            asChild
          >
            <Link href="/signup">
              Create an Account
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-secondary text-secondary hover:bg-secondary/10"
            asChild
          >
            <Link href="/search">
              Browse Properties
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;