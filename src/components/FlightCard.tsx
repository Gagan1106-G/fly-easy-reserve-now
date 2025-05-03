
import React from "react";
import { Clock, MapPin, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

export interface Flight {
  flightId: number;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  seatsAvailable: number;
  price: number;
}

interface FlightCardProps {
  flight: Flight;
  onSelect: (flight: Flight) => void;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight, onSelect }) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Plane className="h-5 w-5 text-sky-500 mr-2" />
              <h3 className="text-lg font-medium">{flight.airline}</h3>
            </div>
            <div className="mt-2 flex items-center text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">
                {flight.origin} → {flight.destination}
              </span>
            </div>
            <div className="mt-1 flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{flight.departureTime}</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <span className="text-2xl font-bold text-sky-600">
              {formatCurrency(flight.price)}
            </span>
            <span className="text-sm text-gray-500 mb-3">
              {flight.seatsAvailable} seats left
            </span>
            <Button 
              onClick={() => onSelect(flight)}
              className="w-full md:w-auto"
            >
              Select Flight
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
