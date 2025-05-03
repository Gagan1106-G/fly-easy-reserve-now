
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import TicketTable, { Ticket } from "@/components/TicketTable";
import { generateSampleTickets } from "@/lib/utils";

const ManageTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>(generateSampleTickets());
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>(tickets);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredTickets(tickets);
      return;
    }

    const filtered = tickets.filter((ticket) => 
      ticket.ticketId.toString() === searchTerm ||
      ticket.passengerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredTickets(filtered);
  };

  const handleCancelTicket = (ticketId: number) => {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.ticketId === ticketId) {
        return { ...ticket, status: "Cancelled" };
      }
      return ticket;
    });

    setTickets(updatedTickets);
    setFilteredTickets(
      filteredTickets.map((ticket) => {
        if (ticket.ticketId === ticketId) {
          return { ...ticket, status: "Cancelled" };
        }
        return ticket;
      })
    );

    toast.success("Ticket Cancelled Successfully", {
      description: `Ticket #${ticketId} has been cancelled.`,
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Your Tickets</h1>
            <p className="text-gray-600">View and manage your flight reservations</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Find Your Booking</CardTitle>
              <CardDescription>Enter your ticket ID or passenger name to find your booking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Enter Ticket ID or Passenger Name"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow"
                />
                <Button onClick={handleSearch} className="whitespace-nowrap">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <TicketTable 
                tickets={filteredTickets} 
                onCancelTicket={handleCancelTicket}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ManageTickets;
