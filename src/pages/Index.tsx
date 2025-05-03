
import React from "react";
import { Link } from "react-router-dom";
import { Plane, Search, Calendar, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="hero-pattern pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Book Your Flight <span className="text-sky-500">Hassle-Free</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover affordable flights to anywhere in the world with our simple booking system.
              Reserve now and take off to your dream destination!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Now
                </Button>
              </Link>
              <Link to="/manage">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Manage Booking
                </Button>
              </Link>
            </div>
            
            <div className="relative mt-16">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-12 animate-float">
                <Plane className="h-16 w-16 text-sky-500 transform -rotate-45" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
              Why Choose FlyEasy?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-sky-50 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="bg-sky-100 p-3 rounded-full mb-4">
                  <Search className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
                <p className="text-gray-600">
                  Quickly find the best flights to your destination with our powerful search tool.
                </p>
              </div>
              
              <div className="bg-sky-50 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="bg-sky-100 p-3 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
                <p className="text-gray-600">
                  Book flights with flexible change options and manage your bookings with ease.
                </p>
              </div>
              
              <div className="bg-sky-50 rounded-lg p-6 flex flex-col items-center text-center">
                <div className="bg-sky-100 p-3 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Booking</h3>
                <p className="text-gray-600">
                  Complete your reservation in minutes with our streamlined booking process.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Popular Destinations */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Popular Destinations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our most popular flight routes and start planning your next adventure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularDestinations.map((destination) => (
                <div key={destination.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-sky-400 to-sky-600 flex items-center justify-center text-white">
                    <Globe className="h-16 w-16" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                    <p className="text-gray-500 mb-3">From {destination.origin}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sky-600 text-lg">₹{destination.price}</span>
                      <Link to="/book">
                        <Button size="sm">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-sky-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book Your Next Adventure?
            </h2>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have booked their flights with FlyEasy.
              Start your journey today!
            </p>
            <Link to="/book">
              <Button size="lg" variant="secondary">
                Book My Flight Now
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white pt-12 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <Plane className="h-6 w-6 text-sky-400" />
                  <span className="ml-2 text-xl font-semibold">FlyEasy</span>
                </div>
                <p className="text-gray-300">
                  Your trusted platform for booking flights to destinations worldwide.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
              <p>© 2025 FlyEasy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

// Sample data for popular destinations
const popularDestinations = [
  { id: 1, name: "London", origin: "Bangalore", price: "11,500" },
  { id: 2, name: "Paris", origin: "Bangalore", price: "8,600" },
  { id: 3, name: "Thailand", origin: "Bangalore", price: "9,950" },
  { id: 4, name: "Chennai", origin: "Delhi", price: "4,750" },
  { id: 5, name: "U.S.A", origin: "Mumbai", price: "8,650" },
  { id: 6, name: "Singapore", origin: "Delhi", price: "7,500" },
];

export default Index;
