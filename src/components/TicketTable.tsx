
import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

export interface Ticket {
  ticketId: number;
  passengerName: string;
  airline: string;
  origin: string;
  destination: string;
  classType: string;
  status: string;
  totalPrice: number;
  luggageWeight: number;
}

interface TicketTableProps {
  tickets: Ticket[];
  onCancelTicket: (ticketId: number) => void;
}

const TicketTable: React.FC<TicketTableProps> = ({ tickets, onCancelTicket }) => {
  return (
    <Table>
      <TableCaption>Your flight tickets</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Ticket ID</TableHead>
          <TableHead>Passenger</TableHead>
          <TableHead>Route</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <TableRow key={ticket.ticketId} className={ticket.status === "Cancelled" ? "bg-gray-100" : ""}>
              <TableCell className="font-medium">{ticket.ticketId}</TableCell>
              <TableCell>{ticket.passengerName}</TableCell>
              <TableCell>{ticket.origin} → {ticket.destination}</TableCell>
              <TableCell>{ticket.classType}</TableCell>
              <TableCell>{formatCurrency(ticket.totalPrice)}</TableCell>
              <TableCell>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  ticket.status === "Booked" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {ticket.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onCancelTicket(ticket.ticketId)}
                  disabled={ticket.status === "Cancelled"}
                  className={ticket.status === "Cancelled" ? "opacity-50 cursor-not-allowed" : ""}
                >
                  Cancel
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={7} className="text-center py-4 text-gray-500">No tickets found</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TicketTable;
