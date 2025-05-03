
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "@/components/Navbar";
import { generateFlightData } from "@/lib/utils";

const FlightData = () => {
  const flights = generateFlightData();
  
  const passengerData = [
    { name: "John Smith", email: "john@example.com", totalSpent: 11500, selectedClass: "Economy", luggageWeight: 15.5 },
    { name: "Emily Johnson", email: "emily@example.com", totalSpent: 12900, selectedClass: "Business", luggageWeight: 22.0 },
    { name: "Robert Brown", email: "robert@example.com", totalSpent: 9500, selectedClass: "First Class", luggageWeight: 10.5 },
    { name: "Anna Williams", email: "anna@example.com", totalSpent: 4750, selectedClass: "Economy", luggageWeight: 18.2 },
    { name: "Michael Davis", email: "michael@example.com", totalSpent: 8600, selectedClass: "Premium Economy", luggageWeight: 14.0 },
  ];

  const chartData = flights.map(flight => ({
    name: flight.destination,
    price: flight.price,
    seats: flight.seatsAvailable
  }));

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Flight Data</h1>
            <p className="text-gray-600">View flight information, passenger details, and statistics</p>
          </div>

          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="flights">Flights</TabsTrigger>
              <TabsTrigger value="passengers">Passengers</TabsTrigger>
              <TabsTrigger value="statistics">Statistics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="flights">
              <Card>
                <CardHeader>
                  <CardTitle>Available Flights</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableCaption>List of available flights</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Flight ID</TableHead>
                        <TableHead>Airline</TableHead>
                        <TableHead>Origin</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Departure</TableHead>
                        <TableHead>Available Seats</TableHead>
                        <TableHead>Price (₹)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {flights.map((flight) => (
                        <TableRow key={flight.flightId}>
                          <TableCell className="font-medium">{flight.flightId}</TableCell>
                          <TableCell>{flight.airline}</TableCell>
                          <TableCell>{flight.origin}</TableCell>
                          <TableCell>{flight.destination}</TableCell>
                          <TableCell>{flight.departureTime}</TableCell>
                          <TableCell>{flight.seatsAvailable}</TableCell>
                          <TableCell>₹{flight.price.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="passengers">
              <Card>
                <CardHeader>
                  <CardTitle>Passenger Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableCaption>Passenger information</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Total Spent (₹)</TableHead>
                        <TableHead>Selected Class</TableHead>
                        <TableHead>Luggage Weight (kg)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {passengerData.map((passenger, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{passenger.name}</TableCell>
                          <TableCell>{passenger.email}</TableCell>
                          <TableCell>₹{passenger.totalSpent.toLocaleString()}</TableCell>
                          <TableCell>{passenger.selectedClass}</TableCell>
                          <TableCell>{passenger.luggageWeight}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="statistics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Price by Destination</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chartData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `₹${value}`} />
                        <Bar dataKey="price" fill="#0ea5e9" name="Price (₹)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Available Seats by Destination</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chartData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="seats" fill="#3b82f6" name="Available Seats" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default FlightData;
