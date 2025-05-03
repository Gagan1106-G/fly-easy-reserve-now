
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import FlightCard, { Flight } from "@/components/FlightCard";
import BookingForm from "@/components/BookingForm";
import { generateFlightData } from "@/lib/utils";

const BookFlight = () => {
  const [flights] = useState<Flight[]>(generateFlightData());
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>(flights);
  const [searchParams, setSearchParams] = useState({
    origin: "",
    destination: "",
  });
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  const handleSearch = () => {
    const { origin, destination } = searchParams;
    
    const filtered = flights.filter((flight) => {
      const originMatch = origin 
        ? flight.origin.toLowerCase().includes(origin.toLowerCase()) 
        : true;
      
      const destinationMatch = destination 
        ? flight.destination.toLowerCase().includes(destination.toLowerCase()) 
        : true;
      
      return originMatch && destinationMatch;
    });
    
    setFilteredFlights(filtered);
    setSelectedFlight(null);
  };

  const handleFlightSelect = (flight: Flight) => {
    setSelectedFlight(flight);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleBookingComplete = () => {
    setSelectedFlight(null);
    // You could refresh flights here if you were using a real API
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Your Flight</h1>
            <p className="text-gray-600">Search for available flights and book your next journey</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search Flights</CardTitle>
              <CardDescription>Enter your travel details to find available flights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">From</label>
                  <Select
                    onValueChange={(value) => setSearchParams({ ...searchParams, origin: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select origin city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bangalore">Bangalore</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Mumbai">Mumbai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">To</label>
                  <Select
                    onValueChange={(value) => setSearchParams({ ...searchParams, destination: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="London">London</SelectItem>
                      <SelectItem value="Paris">Paris</SelectItem>
                      <SelectItem value="Thailand">Thailand</SelectItem>
                      <SelectItem value="Chennai">Chennai</SelectItem>
                      <SelectItem value="U.S.A">U.S.A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleSearch} className="mt-6 w-full">
                <Search className="mr-2 h-4 w-4" /> Search Flights
              </Button>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Available Flights</h2>
            {filteredFlights.length > 0 ? (
              <>
                {filteredFlights.map((flight) => (
                  <FlightCard key={flight.flightId} flight={flight} onSelect={handleFlightSelect} />
                ))}
              </>
            ) : (
              <Card>
                <CardContent className="p-6 text-center text-gray-500">
                  No flights found matching your criteria. Please try different search parameters.
                </CardContent>
              </Card>
            )}
          </div>

          {selectedFlight && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Complete Your Booking</h2>
              <BookingForm
                selectedFlight={selectedFlight}
                onBookingComplete={handleBookingComplete}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookFlight;
