import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ConsultationFormProps {
  className?: string;
}

export function ConsultationForm({ className }: ConsultationFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    treatment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTreatmentChange = (value: string) => {
    setFormData((prev) => ({ ...prev, treatment: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="lg"
          className="h-11 rounded-md text-lg px-8 py-6 w-full sm:w-auto"
        >
          Request Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-4">
            Schedule Your Healing Journey
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="treatment">Treatment</Label>
            <Select
              value={formData.treatment}
              onValueChange={handleTreatmentChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select treatment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ayurveda">Ayurveda</SelectItem>
                <SelectItem value="yoga">Yoga Therapy</SelectItem>
                <SelectItem value="meditation">Meditation</SelectItem>
                <SelectItem value="naturopathy">Naturopathy</SelectItem>
                <SelectItem value="consultation">General Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full"
            variant="default"
          >
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}