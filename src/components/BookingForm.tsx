
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Flight } from "./FlightCard";
import { formatCurrency } from "@/lib/utils";

interface BookingFormProps {
  selectedFlight: Flight | null;
  onBookingComplete: () => void;
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  classType: z.string(),
  luggageWeight: z.coerce.number().min(0, "Luggage weight cannot be negative").max(50, "Maximum luggage weight is 50kg"),
});

type FormValues = z.infer<typeof formSchema>;

const classTypes = [
  { id: 1, name: "Economy", multiplier: 1.0 },
  { id: 2, name: "Premium Economy", multiplier: 1.2 },
  { id: 3, name: "Business", multiplier: 1.5 },
  { id: 4, name: "First Class", multiplier: 2.0 },
];

const BookingForm: React.FC<BookingFormProps> = ({ selectedFlight, onBookingComplete }) => {
  const [totalPrice, setTotalPrice] = useState<number | null>(
    selectedFlight ? selectedFlight.price : null
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      classType: "1",
      luggageWeight: 0,
    },
  });

  const handleClassTypeChange = (value: string) => {
    if (!selectedFlight) return;
    
    const selectedClass = classTypes.find(ct => ct.id.toString() === value);
    if (selectedClass) {
      const newPrice = selectedFlight.price * selectedClass.multiplier;
      setTotalPrice(newPrice);
    }
    form.setValue("classType", value);
  };

  const onSubmit = (data: FormValues) => {
    if (!selectedFlight) return;
    
    toast.success("Booking Successful!", {
      description: `Your flight from ${selectedFlight.origin} to ${selectedFlight.destination} has been booked.`,
    });
    
    // Reset form
    form.reset();
    onBookingComplete();
  };

  if (!selectedFlight) return null;

  return (
    <Card className="w-full mt-6">
      <CardHeader>
        <CardTitle>Complete Your Booking</CardTitle>
        <CardDescription>
          Fill in your details to book your flight from {selectedFlight.origin} to {selectedFlight.destination}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="classType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class Type</FormLabel>
                  <Select 
                    onValueChange={handleClassTypeChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {classTypes.map((classType) => (
                        <SelectItem key={classType.id} value={classType.id.toString()}>
                          {classType.name} ({formatCurrency(selectedFlight.price * classType.multiplier)})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="luggageWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Luggage Weight (kg)</FormLabel>
                  <FormControl>
                    <Input type="number" min="0" max="50" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-4 border-t">
              <div className="flex justify-between mb-4">
                <span className="text-lg">Total Price:</span>
                <span className="text-lg font-bold text-sky-600">
                  {totalPrice ? formatCurrency(totalPrice) : "N/A"}
                </span>
              </div>
              
              <Button type="submit" className="w-full">
                Confirm Booking
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
