import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Select from "../../../components/ui/Select";

const FareCalculator = () => {
  const [selectedRoute, setSelectedRoute] = useState("");
  // const [selectedCar, setSelectedCar] = useState("");
  const [calculatedFare, setCalculatedFare] = useState(null);

  const [sourceCity, setSourceCity] = useState(null);
  const [destinationCity, setDestinationCity] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  const routes = [
    {
      value: "airport-downtown",
      label: "Airport to Downtown",
      distance: "15 km",
    },
    {
      value: "hotel-business",
      label: "Hotel Zone to Business District",
      distance: "8 km",
    },
    {
      value: "city-mall",
      label: "City Center to Shopping Mall",
      distance: "12 km",
    },
    {
      value: "airport-station",
      label: "Airport to Train Station",
      distance: "22 km",
    },
  ];

  const gujaratCitiesOptions = [
    { label: "Ahmedabad", value: "23.0225,72.5714" },
    { label: "Surat", value: "21.1702,72.8311" },
    { label: "Vadodara", value: "22.3072,73.1812" },
    { label: "Rajkot", value: "22.3039,70.8022" },
    { label: "Bhavnagar", value: "21.7645,72.1519" },
    { label: "Jamnagar", value: "22.4707,70.0577" },
    { label: "Junagadh", value: "21.5222,70.4579" },
    { label: "Gandhinagar", value: "23.2156,72.6369" },
    { label: "Anand", value: "22.5645,72.9289" },
    { label: "Nadiad", value: "22.6916,72.8634" },
    { label: "Morbi", value: "22.8173,70.8377" },
    { label: "Mehsana", value: "23.588,72.3693" },
    { label: "Patan", value: "23.8493,72.1266" },
    { label: "Porbandar", value: "21.6417,69.6293" },
    { label: "Dwarka", value: "22.2442,68.9685" },
    { label: "Bhuj", value: "23.253,69.6693" },
    { label: "Valsad", value: "20.5992,72.9342" },
    { label: "Vapi", value: "20.3893,72.9106" },
    { label: "Navsari", value: "20.9467,72.952" },
    { label: "Palanpur", value: "24.174,72.433" },
  ];

  const cars = [
    {
      label: "Swift Dzire",
      value: { carname: "Swift Dzire", price: 11 },
    },
    {
      label: "Hyundai Aura",
      value: { carname: "Hyundai Aura", price: 11 },
    },
    {
      label: "Hyundai Xcent",
      value: { carname: "Hyundai Xcent", price: 10 },
    },
    {
      label: "Honda Amaze",
      value: { carname: "Honda Amaze", price: 11 },
    },
    {
      label: "Maruti Ertiga",
      value: { carname: "Maruti Ertiga", price: 14 },
    },
    {
      label: "Kia Carens",
      value: { carname: "Kia Carens", price: 16 },
    },
    {
      label: "Toyota Innova",
      value: { carname: "Toyota Innova", price: 16 },
    },
    {
      label: "Toyota Innova Crysta",
      value: { carname: "Toyota Innova Crysta", price: 20 },
    },
    {
      label: "Tufan 10 Seater",
      value: { carname: "Tufan 10 Seater", price: 20 },
    },
    {
      label: "Tempo Traveller 10 Seater",
      value: { carname: "Tempo Traveller 10 Seater", price: 23 },
    },
    {
      label: "Tempo Traveller 12 Seater",
      value: { carname: "Tempo Traveller 12 Seater", price: 26 },
    },
    {
      label: "Force Urbania 16+1 Seater",
      value: { carname: "Force Urbania 16+1 Seater", price: 35 },
    },
  ];

  const carTypes = [
    {
      value: "sedan",
      label: "Sedan",
      rate: 17,
      description: "Comfortable 4-seater",
    },
    { value: "suv", label: "SUV", rate: 27, description: "Spacious 7-seater" },
    {
      value: "luxury",
      label: "Luxury",
      rate: 30,
      description: "Premium experience",
    },
  ];

  // Source city change
  const handleSourceCityChange = (selectedOption) => {
    setSourceCity(selectedOption);
  };

  // Destination city change
  const handleDestinationCityChange = (selectedOption) => {
    console.log("select ", selectedOption);
    setDestinationCity(selectedOption);
  };

  // Car change
  const handleCarChange = (selectedOption) => {
    const fullCar = cars.find((car) => car.value === selectedOption);
    console.log("full ", fullCar);
    setSelectedCar(fullCar);
  };

  const calculateDistanceKm = (fromValue, toValue) => {
    console.log("from ", fromValue);
    console.log("to ", toValue);
    const R = 6371; // Earth radius in KM
    const [fromLat, fromLon] = fromValue.split(",").map(Number);
    const [toLat, toLon] = toValue.split(",").map(Number);

    const toRad = (deg) => deg * (Math.PI / 180);

    const dLat = toRad(toLat - fromLat);
    const dLon = toRad(toLon - fromLon);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(fromLat)) *
        Math.cos(toRad(toLat)) *
        Math.sin(dLon / 2) ** 2;

    return Number(
      (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(2)
    );
  };

  const calculateFare = () => {
    if (!sourceCity || !destinationCity || !selectedCar) return;

    console.log("selected car ", selectedCar);

    const destinationCityName = gujaratCitiesOptions.find(
      (city) => city.value === destinationCity
    );

    const sourceCityName = gujaratCitiesOptions.find(
      (city) => city.value === sourceCity
    );
    console.log("destination ", destinationCityName);
    console.log("source ", sourceCityName);

    const distance = calculateDistanceKm(sourceCity, destinationCity);
    console.log("distance ", distance);

    let roundOffDistance = Math.round(distance);

    if (roundOffDistance < 300) {
      roundOffDistance = 300;
    }

    const ratePerKm = selectedCar.value.price;
    const baseFare = 0; // optional
    const totalFare = baseFare + roundOffDistance * ratePerKm;

    setCalculatedFare({
      sourceCityName: sourceCityName.label,
      destinationCityName: destinationCityName.label,
      distance: distance,
      distanceFare: totalFare,
      ratePerKm,
      carType: selectedCar.value.carname,
      total: totalFare,
    });

    setSourceCity();
    setDestinationCity();
    setSelectedCar();
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Calculator" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">
                Instant Pricing
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Calculate Your Fare
            </h2>
            <p className="text-muted-foreground">
              Know your exact price before booking. No hidden charges, no
              surprises.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Select
                label="Source City"
                placeholder="Select source"
                options={gujaratCitiesOptions}
                value={sourceCity}
                onChange={handleSourceCityChange}
                searchable
              />

              <Select
                label="Destination City"
                placeholder="Select destination"
                options={gujaratCitiesOptions}
                value={destinationCity}
                onChange={handleDestinationCityChange}
                searchable
              />

              <Select
                label="Select Car"
                placeholder="Choose vehicle"
                options={cars}
                value={selectedCar?.value ?? ""}
                labelKey="label"
                onChange={handleCarChange}
              />
            </div>

            <Button
              variant="default"
              size="lg"
              fullWidth
              iconName="Calculator"
              iconPosition="right"
              onClick={calculateFare}
              disabled={!sourceCity || !destinationCity || !selectedCar}
            >
              Calculate Fare
            </Button>

            {calculatedFare && (
              <div className="mt-8 p-6 bg-muted rounded-xl border border-border animate-slide-up">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">
                    Fare Breakdown
                  </h3>
                  <div className="flex items-center space-x-2 text-success">
                    <Icon name="CheckCircle" size={20} />
                    <span className="text-sm font-medium">
                      Transparent Pricing
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {/* <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Base Fare</span>
                    <span className="font-medium text-foreground">
                      ₹{calculatedFare?.baseFare?.toFixed(2)}
                    </span>
                  </div> */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total Fare</span>
                    <span className="font-medium text-foreground">
                      ₹{calculatedFare?.distanceFare?.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Vehicle Type</span>
                    <span className="font-medium text-foreground">
                      {calculatedFare.carType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Source City</span>
                    <span className="font-medium text-foreground">
                      {calculatedFare?.sourceCityName}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Destination City
                    </span>
                    <span className="font-medium text-foreground">
                      {calculatedFare?.destinationCityName}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total KM</span>
                    <span className="font-medium text-foreground">
                      {calculatedFare?.distance} KM
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Minimum Kilometers
                    </span>
                    <span className="font-medium text-foreground">300 KM</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-semibold text-foreground">
                    Total Fare
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    ₹ {calculatedFare?.total?.toFixed(2)}
                  </span>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} color="var(--color-primary)" />
                    <div className="text-sm text-foreground">
                      <p className="font-medium mb-1">Price Guarantee</p>
                      <p className="text-muted-foreground">
                        The displayed fare covers your trip cost. Any tolls,
                        parking fees, border/state taxes, or driver night stay
                        charges (DP per night) will be additional and payable
                        during the journey.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <Button
                    variant="default"
                    size="default"
                    fullWidth
                    iconName="Car"
                    iconPosition="left"
                    onClick={() => (window.location.href = "/fleet-gallery")}
                  >
                    Book This Ride
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    iconName="Phone"
                    onClick={() =>
                      (window.location.href = "tel:++919409713448")
                    }
                  >
                    Call
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Icon
                name="DollarSign"
                size={32}
                color="var(--color-primary)"
                className="mx-auto mb-3"
              />
              <h4 className="font-semibold text-foreground mb-2">
                No Hidden Fees
              </h4>
              <p className="text-sm text-muted-foreground">
                What you see is what you pay. Always.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Icon
                name="TrendingDown"
                size={32}
                color="var(--color-primary)"
                className="mx-auto mb-3"
              />
              <h4 className="font-semibold text-foreground mb-2">
                No Surge Pricing
              </h4>
              <p className="text-sm text-muted-foreground">
                Same price, peak or off-peak hours.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Icon
                name="Shield"
                size={32}
                color="var(--color-primary)"
                className="mx-auto mb-3"
              />
              <h4 className="font-semibold text-foreground mb-2">Price Lock</h4>
              <p className="text-sm text-muted-foreground">
                Your quoted price is guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareCalculator;
