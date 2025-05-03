
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function generateFlightData() {
  const sampleFlights = [
    {
      flightId: 1,
      airline: "Airline A",
      origin: "Bangalore",
      destination: "London",
      departureTime: "2025-05-01 10:00AM",
      seatsAvailable: 100,
      price: 11500,
    },
    {
      flightId: 2,
      airline: "Airline B",
      origin: "Delhi",
      destination: "Chennai",
      departureTime: "2025-05-02 08:30AM",
      seatsAvailable: 150,
      price: 4750,
    },
    {
      flightId: 3,
      airline: "Airline C",
      origin: "Bangalore",
      destination: "Paris",
      departureTime: "2025-05-03 06:00AM",
      seatsAvailable: 80,
      price: 8600,
    },
    {
      flightId: 4,
      airline: "Airline D",
      origin: "Bangalore",
      destination: "Thailand",
      departureTime: "2025-05-05 04:30PM",
      seatsAvailable: 200,
      price: 9950,
    },
    {
      flightId: 5,
      airline: "Airline E",
      origin: "Mumbai",
      destination: "U.S.A",
      departureTime: "2025-05-06 12:15PM",
      seatsAvailable: 120,
      price: 8650,
    }
  ];

  return sampleFlights;
}

export function generateSampleTickets() {
  return [
    {
      ticketId: 1,
      passengerName: "John Smith",
      airline: "Airline A",
      origin: "Bangalore",
      destination: "London",
      classType: "Economy",
      status: "Booked",
      totalPrice: 11500,
      luggageWeight: 15.5,
    },
    {
      ticketId: 2,
      passengerName: "Emily Johnson",
      airline: "Airline C",
      origin: "Bangalore",
      destination: "Paris",
      classType: "Business",
      status: "Booked",
      totalPrice: 12900,
      luggageWeight: 22.0,
    },
    {
      ticketId: 3,
      passengerName: "Robert Brown",
      airline: "Airline B",
      origin: "Delhi",
      destination: "Chennai",
      classType: "First Class",
      status: "Cancelled",
      totalPrice: 9500,
      luggageWeight: 10.5,
    }
  ];
}
