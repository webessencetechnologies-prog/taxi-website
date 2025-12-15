import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import VehicleCard from './components/VehicleCard';
import FilterPanel from './components/FilterPanel';
import VehicleDetailsModal from './components/VehicleDetailsModel';
import ComparisonPanel from './components/ComparisionPanel';
import StatsSection from './components/StatsSection';

const FleetGallery = () => {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    capacity: 'all',
    luggage: 'all',
    priceMin: '',
    priceMax: '',
    availableOnly: false,
    popularOnly: false,
    sortBy: 'popular'
  });

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [comparisonList, setComparisonList] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const vehicles = [
  {
    id: 1,
    name: "Toyota Camry 2023",
    category: "Sedan",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a60215a-1764774525450.png",
    imageAlt: "Silver Toyota Camry 2023 sedan parked in modern urban setting with glass buildings in background",
    pricePerKm: 1.2,
    capacity: "4 passengers",
    luggage: "3 bags",
    fuelType: "Hybrid",
    isPopular: true,
    isAvailable: true,
    driver: {
      name: "Michael Rodriguez",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f383ff29-1763295330729.png",
      avatarAlt: "Professional headshot of Hispanic male driver with short black hair wearing navy blue suit and warm smile",
      rating: 4.9,
      trips: 1250,
      phone: "++919409713448",
      whatsapp: "+919409713448",
      experience: "8 years of professional driving",
      bio: "Experienced driver specializing in airport transfers and city tours. Known for punctuality and excellent customer service.",
      specialties: ["Airport Transfers", "City Tours", "Corporate Travel"]
    },
    specifications: [
    { icon: "Users", label: "Capacity", value: "4 Passengers" },
    { icon: "Briefcase", label: "Luggage", value: "3 Large Bags" },
    { icon: "Fuel", label: "Fuel Type", value: "Hybrid" },
    { icon: "Gauge", label: "Transmission", value: "Automatic" },
    { icon: "Calendar", label: "Year", value: "2023" },
    { icon: "Shield", label: "Insurance", value: "Full Coverage" }],

    features: [
    "Climate Control AC",
    "Leather Seats",
    "GPS Navigation",
    "Bluetooth Audio",
    "USB Charging Ports",
    "Child Seat Available",
    "Wheelchair Accessible",
    "Pet Friendly"],

    gallery: [
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a60215a-1764774525450.png",
      imageAlt: "Silver Toyota Camry 2023 sedan exterior view in urban parking lot with modern architecture"
    },
    {
      image: "https://images.unsplash.com/photo-1589833153445-8502ebb1bfe5",
      imageAlt: "Toyota Camry 2023 interior dashboard showing leather steering wheel and digital display panel"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a91871a5-1764645680981.png",
      imageAlt: "Toyota Camry 2023 spacious trunk open showing large luggage capacity with three suitcases"
    }],

    reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_186600153-1763296403185.png",
      avatarAlt: "Professional headshot of Caucasian woman with blonde hair in business attire smiling warmly",
      rating: 5.0,
      date: "2 days ago",
      route: "Airport to Downtown",
      comment: "Michael was incredibly professional and the car was spotless. Perfect ride for my business trip with plenty of room for luggage."
    },
    {
      id: 2,
      name: "David Chen",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_156233ed3-1763293655955.png",
      avatarAlt: "Professional headshot of Asian male with short black hair wearing glasses and dark suit",
      rating: 4.8,
      date: "1 week ago",
      route: "City Tour",
      comment: "Great experience! The hybrid car was smooth and quiet. Michael knew all the best routes and shared interesting local insights."
    }]

  },
  {
    id: 2,
    name: "Honda CR-V 2024",
    category: "SUV",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a79abb3b-1764774525404.png",
    imageAlt: "White Honda CR-V 2024 SUV parked on mountain road with scenic valley view in background",
    pricePerKm: 1.5,
    capacity: "5 passengers",
    luggage: "4 bags",
    fuelType: "Petrol",
    isPopular: true,
    isAvailable: true,
    driver: {
      name: "Jennifer Williams",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17faa8e7a-1763295754680.png",
      avatarAlt: "Professional headshot of African American female driver with curly hair wearing professional blazer and friendly smile",
      rating: 4.8,
      trips: 980,
      phone: "+1234567891",
      whatsapp: "1234567891",
      experience: "6 years of professional driving",
      bio: "Family-friendly driver with extensive experience in long-distance trips and special events. Safety is my top priority.",
      specialties: ["Family Trips", "Long Distance", "Special Events"]
    },
    specifications: [
    { icon: "Users", label: "Capacity", value: "5 Passengers" },
    { icon: "Briefcase", label: "Luggage", value: "4 Large Bags" },
    { icon: "Fuel", label: "Fuel Type", value: "Petrol" },
    { icon: "Gauge", label: "Transmission", value: "Automatic" },
    { icon: "Calendar", label: "Year", value: "2024" },
    { icon: "Shield", label: "Insurance", value: "Full Coverage" }],

    features: [
    "Dual Climate Control",
    "Premium Sound System",
    "Panoramic Sunroof",
    "Advanced Safety Features",
    "Spacious Interior",
    "Multiple USB Ports",
    "Child Seats Available",
    "Extra Luggage Space"],

    gallery: [
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a79abb3b-1764774525404.png",
      imageAlt: "White Honda CR-V 2024 SUV exterior front three-quarter view on mountain highway"
    },
    {
      image: "https://images.unsplash.com/photo-1583918004174-2009aa95484a",
      imageAlt: "Honda CR-V 2024 luxurious interior showing leather seats and modern dashboard with touchscreen"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a91871a5-1764645680981.png",
      imageAlt: "Honda CR-V 2024 rear cargo area with seats folded showing maximum luggage capacity"
    }],

    reviews: [
    {
      id: 1,
      name: "Robert Martinez",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_199428bcb-1763295913661.png",
      avatarAlt: "Professional headshot of Hispanic male with beard wearing casual shirt and friendly expression",
      rating: 5.0,
      date: "3 days ago",
      route: "Family Weekend Trip",
      comment: "Jennifer was amazing with our kids! The SUV had plenty of space for our family of five plus all our luggage. Highly recommend!"
    }]

  },
  {
    id: 3,
    name: "Mercedes E-Class 2023",
    category: "Luxury",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_124bd60c8-1764649034676.png",
    imageAlt: "Black Mercedes E-Class 2023 luxury sedan parked in front of upscale hotel entrance with valet service",
    pricePerKm: 2.5,
    capacity: "4 passengers",
    luggage: "3 bags",
    fuelType: "Diesel",
    isPopular: false,
    isAvailable: true,
    driver: {
      name: "James Anderson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2d07422-1763293898348.png",
      avatarAlt: "Professional headshot of Caucasian male driver in formal black suit with professional demeanor",
      rating: 5.0,
      trips: 1500,
      phone: "+1234567892",
      whatsapp: "1234567892",
      experience: "10 years of luxury chauffeur service",
      bio: "Premium chauffeur specializing in executive transportation and VIP services. Discretion and professionalism guaranteed.",
      specialties: ["Executive Travel", "VIP Service", "Airport Luxury"]
    },
    specifications: [
    { icon: "Users", label: "Capacity", value: "4 Passengers" },
    { icon: "Briefcase", label: "Luggage", value: "3 Large Bags" },
    { icon: "Fuel", label: "Fuel Type", value: "Diesel" },
    { icon: "Gauge", label: "Transmission", value: "Automatic" },
    { icon: "Calendar", label: "Year", value: "2023" },
    { icon: "Shield", label: "Insurance", value: "Premium Coverage" }],

    features: [
    "Premium Leather Interior",
    "Massage Seats",
    "Ambient Lighting",
    "Burmester Sound System",
    "Privacy Glass",
    "Champagne Cooler",
    "WiFi Hotspot",
    "Complimentary Water"],

    gallery: [
    {
      image: "https://images.unsplash.com/photo-1584978678073-e20a6194db59",
      imageAlt: "Black Mercedes E-Class 2023 luxury sedan exterior showcasing elegant design and chrome details"
    },
    {
      image: "https://images.unsplash.com/photo-1663175035572-ca047139fc4a",
      imageAlt: "Mercedes E-Class 2023 premium interior with beige leather seats and wood trim dashboard"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd1be177-1764880282295.png",
      imageAlt: "Mercedes E-Class 2023 spacious trunk with premium carpet lining and organized luggage"
    }],

    reviews: [
    {
      id: 1,
      name: "Elizabeth Thompson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d14fa33a-1763297543998.png",
      avatarAlt: "Professional headshot of Caucasian businesswoman with brown hair in elegant business suit",
      rating: 5.0,
      date: "1 day ago",
      route: "Corporate Event",
      comment: "Absolutely exceptional service! James was punctual, professional, and the Mercedes was immaculate. Perfect for our executive meeting."
    }]

  },
  {
    id: 4,
    name: "Toyota Sienna 2024",
    category: "Van",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c7c1c2b-1764651047529.png",
    imageAlt: "Silver Toyota Sienna 2024 minivan parked at family resort with sliding doors open showing spacious interior",
    pricePerKm: 1.8,
    capacity: "7 passengers",
    luggage: "5 bags",
    fuelType: "Hybrid",
    isPopular: true,
    isAvailable: false,
    driver: {
      name: "Maria Garcia",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1633a6836-1763301455488.png",
      avatarAlt: "Professional headshot of Hispanic female driver with long dark hair wearing casual professional attire",
      rating: 4.9,
      trips: 850,
      phone: "+1234567893",
      whatsapp: "1234567893",
      experience: "5 years specializing in group transportation",
      bio: "Experienced in handling large groups and families. Known for patience, safety, and making every journey comfortable.",
      specialties: ["Group Travel", "Family Trips", "Airport Groups"]
    },
    specifications: [
    { icon: "Users", label: "Capacity", value: "7 Passengers" },
    { icon: "Briefcase", label: "Luggage", value: "5 Large Bags" },
    { icon: "Fuel", label: "Fuel Type", value: "Hybrid" },
    { icon: "Gauge", label: "Transmission", value: "Automatic" },
    { icon: "Calendar", label: "Year", value: "2024" },
    { icon: "Shield", label: "Insurance", value: "Full Coverage" }],

    features: [
    "Three-Row Seating",
    "Power Sliding Doors",
    "Rear Entertainment System",
    "Multiple Climate Zones",
    "Extra Storage Space",
    "USB Ports All Rows",
    "Child Seat Anchors",
    "Wheelchair Accessible"],

    gallery: [
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c7c1c2b-1764651047529.png",
      imageAlt: "Silver Toyota Sienna 2024 minivan exterior showing sliding door and spacious design"
    },
    {
      image: "https://images.unsplash.com/photo-1585102172395-d47df7c46497",
      imageAlt: "Toyota Sienna 2024 interior showing three rows of comfortable seating with entertainment screens"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1914a80c6-1764645683996.png",
      imageAlt: "Toyota Sienna 2024 cargo area with all seats showing maximum luggage capacity for groups"
    }],

    reviews: [
    {
      id: 1,
      name: "Thomas Wilson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d3fc70f9-1763292853898.png",
      avatarAlt: "Professional headshot of Caucasian male with gray hair wearing casual shirt and glasses",
      rating: 5.0,
      date: "5 days ago",
      route: "Family Airport Transfer",
      comment: "Maria was wonderful! She helped with our luggage and made sure everyone was comfortable. The van was perfect for our family of six."
    }]

  },
  {
    id: 5,
    name: "Nissan Altima 2023",
    category: "Sedan",
    image: "https://images.unsplash.com/photo-1713212726900-901437534c10",
    imageAlt: "Red Nissan Altima 2023 sedan parked in downtown business district with modern office buildings",
    pricePerKm: 1.1,
    capacity: "4 passengers",
    luggage: "2 bags",
    fuelType: "Petrol",
    isPopular: false,
    isAvailable: true,
    driver: {
      name: "Ahmed Hassan",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2dd8678-1763294040253.png",
      avatarAlt: "Professional headshot of Middle Eastern male driver with short black hair in business casual attire",
      rating: 4.7,
      trips: 650,
      phone: "+1234567894",
      whatsapp: "1234567894",
      experience: "4 years of city driving experience",
      bio: "Friendly and reliable driver with excellent knowledge of city routes. Always on time and ready to help.",
      specialties: ["City Rides", "Quick Trips", "Business Travel"]
    },
    specifications: [
    { icon: "Users", label: "Capacity", value: "4 Passengers" },
    { icon: "Briefcase", label: "Luggage", value: "2 Large Bags" },
    { icon: "Fuel", label: "Fuel Type", value: "Petrol" },
    { icon: "Gauge", label: "Transmission", value: "Automatic" },
    { icon: "Calendar", label: "Year", value: "2023" },
    { icon: "Shield", label: "Insurance", value: "Full Coverage" }],

    features: [
    "Air Conditioning",
    "Comfortable Seats",
    "GPS Navigation",
    "Bluetooth Audio",
    "USB Charging",
    "Clean Interior",
    "Fuel Efficient",
    "Reliable Service"],

    gallery: [
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_150c65ae9-1764780175103.png",
      imageAlt: "Red Nissan Altima 2023 sedan exterior front view in urban setting"
    },
    {
      image: "https://images.unsplash.com/photo-1685782788152-541055554269",
      imageAlt: "Nissan Altima 2023 interior showing comfortable cloth seats and modern dashboard"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1014b6c55-1764880283786.png",
      imageAlt: "Nissan Altima 2023 trunk space with two large suitcases fitting comfortably"
    }],

    reviews: [
    {
      id: 1,
      name: "Lisa Brown",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d116ed60-1763297477097.png",
      avatarAlt: "Professional headshot of Caucasian woman with short brown hair wearing casual business attire",
      rating: 4.7,
      date: "1 week ago",
      route: "Downtown Commute",
      comment: "Ahmed is always punctual and friendly. Great for my daily commute to work. The car is clean and comfortable."
    }]

  },
  {
    id: 6,
    name: "Ford Explorer 2024",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1681580481786-475fc6e7dc5c",
    imageAlt: "Blue Ford Explorer 2024 SUV parked at outdoor adventure location with hiking trail in background",
    pricePerKm: 1.6,
    capacity: "6 passengers",
    luggage: "4 bags",
    fuelType: "Petrol",
    isPopular: false,
    isAvailable: true,
    driver: {
      name: "Christopher Lee",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17859c296-1763293764435.png",
      avatarAlt: "Professional headshot of Asian male driver with short black hair wearing casual polo shirt",
      rating: 4.8,
      trips: 720,
      phone: "+1234567895",
      whatsapp: "1234567895",
      experience: "5 years of SUV driving experience",
      bio: "Adventure-ready driver with experience in both city and highway driving. Perfect for family trips and outdoor adventures.",
      specialties: ["Family Trips", "Outdoor Adventures", "Highway Travel"]
    },
    specifications: [
    { icon: "Users", label: "Capacity", value: "6 Passengers" },
    { icon: "Briefcase", label: "Luggage", value: "4 Large Bags" },
    { icon: "Fuel", label: "Fuel Type", value: "Petrol" },
    { icon: "Gauge", label: "Transmission", value: "Automatic" },
    { icon: "Calendar", label: "Year", value: "2024" },
    { icon: "Shield", label: "Insurance", value: "Full Coverage" }],

    features: [
    "Three-Row Seating",
    "All-Wheel Drive",
    "Roof Rack",
    "Towing Capability",
    "Advanced Safety",
    "Spacious Cargo",
    "Entertainment System",
    "Climate Control"],

    gallery: [
    {
      image: "https://images.unsplash.com/photo-1610412327311-a35d652edf5d",
      imageAlt: "Blue Ford Explorer 2024 SUV exterior showing rugged design and roof rack"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f4a880be-1764645682512.png",
      imageAlt: "Ford Explorer 2024 interior with three rows of seating and modern technology"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1914a80c6-1764645683996.png",
      imageAlt: "Ford Explorer 2024 cargo area showing large storage capacity with outdoor gear"
    }],

    reviews: [
    {
      id: 1,
      name: "Kevin Park",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfe01913-1763293830266.png",
      avatarAlt: "Professional headshot of Asian male with glasses wearing outdoor jacket and friendly smile",
      rating: 4.8,
      date: "4 days ago",
      route: "Mountain Trip",
      comment: "Christopher was great! The Explorer handled the mountain roads perfectly and had plenty of room for our camping gear."
    }]

  }];


  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      category: 'all',
      capacity: 'all',
      luggage: 'all',
      priceMin: '',
      priceMax: '',
      availableOnly: false,
      popularOnly: false,
      sortBy: 'popular'
    });
  };

  const handleCompareToggle = (vehicleId) => {
    setComparisonList((prev) => {
      const exists = prev?.find((v) => v?.id === vehicleId);
      if (exists) {
        return prev?.filter((v) => v?.id !== vehicleId);
      }
      if (prev?.length >= 3) {
        return prev;
      }
      const vehicle = vehicles?.find((v) => v?.id === vehicleId);
      return [...prev, vehicle];
    });
  };

  const handleRemoveFromComparison = (vehicleId) => {
    setComparisonList((prev) => prev?.filter((v) => v?.id !== vehicleId));
  };

  const handleClearComparison = () => {
    setComparisonList([]);
  };

  const filteredVehicles = useMemo(() => {
    let result = [...vehicles];

    if (filters?.search) {
      result = result?.filter((v) =>
      v?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
      v?.category?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }

    if (filters?.category !== 'all') {
      result = result?.filter((v) => v?.category?.toLowerCase() === filters?.category?.toLowerCase());
    }

    if (filters?.capacity !== 'all') {
      result = result?.filter((v) => {
        const capacity = parseInt(v?.capacity);
        return capacity >= parseInt(filters?.capacity);
      });
    }

    if (filters?.luggage !== 'all') {
      result = result?.filter((v) => {
        const luggage = parseInt(v?.luggage);
        return luggage >= parseInt(filters?.luggage);
      });
    }

    if (filters?.priceMin) {
      result = result?.filter((v) => v?.pricePerKm >= parseFloat(filters?.priceMin));
    }

    if (filters?.priceMax) {
      result = result?.filter((v) => v?.pricePerKm <= parseFloat(filters?.priceMax));
    }

    if (filters?.availableOnly) {
      result = result?.filter((v) => v?.isAvailable);
    }

    if (filters?.popularOnly) {
      result = result?.filter((v) => v?.isPopular);
    }

    switch (filters?.sortBy) {
      case 'price-low':
        result?.sort((a, b) => a?.pricePerKm - b?.pricePerKm);
        break;
      case 'price-high':
        result?.sort((a, b) => b?.pricePerKm - a?.pricePerKm);
        break;
      case 'rating':
        result?.sort((a, b) => b?.driver?.rating - a?.driver?.rating);
        break;
      case 'popular':
      default:
        result?.sort((a, b) => (b?.isPopular ? 1 : 0) - (a?.isPopular ? 1 : 0));
        break;
    }

    return result;
  }, [vehicles, filters]);

  const availableCount = vehicles?.filter((v) => v?.isAvailable)?.length;
  const categoryCount = [...new Set(vehicles.map((v) => v.category))]?.length;

  return (
    <>
      <Helmet>
        <title>Fleet Gallery - ShivSakti Travels | Premium Taxi Booking</title>
        <meta name="description" content="Browse our comprehensive fleet of premium vehicles. Compare specifications, view driver profiles, and book your perfect ride with transparent pricing." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Our Premium Fleet
                </h1>
                <p className="text-lg text-muted-foreground">
                  Choose from our diverse collection of well-maintained vehicles. Every car comes with a verified driver, transparent pricing, and direct communication options.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 bg-card border-y border-border">
            <div className="container mx-auto px-4">
              <StatsSection
                totalVehicles={vehicles?.length}
                availableVehicles={availableCount}
                categories={categoryCount} />

            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Available Vehicles
                  </h2>
                  <p className="text-muted-foreground">
                    Showing {filteredVehicles?.length} of {vehicles?.length} vehicles
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="default"
                  iconName="SlidersHorizontal"
                  iconPosition="left"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden">

                  Filters
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  <FilterPanel
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onReset={handleResetFilters} />

                </div>

                <div className="lg:col-span-3">
                  {filteredVehicles?.length > 0 ?
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredVehicles?.map((vehicle) =>
                    <VehicleCard
                      key={vehicle?.id}
                      vehicle={vehicle}
                      onViewDetails={setSelectedVehicle}
                      onCompare={handleCompareToggle}
                      isComparing={comparisonList?.some((v) => v?.id === vehicle?.id)} />

                    )}
                    </div> :

                  <div className="bg-card rounded-xl border border-border p-12 text-center">
                      <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        No vehicles found
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Try adjusting your filters to see more results
                      </p>
                      <Button
                      variant="default"
                      size="default"
                      iconName="RotateCcw"
                      iconPosition="left"
                      onClick={handleResetFilters}>

                        Reset Filters
                      </Button>
                    </div>
                  }
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">
                      Need Help Choosing?
                    </h2>
                    <p className="text-muted-foreground">
                      Our team is ready to help you find the perfect vehicle for your journey. Contact us for personalized recommendations.
                    </p>
                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="default"
                        size="lg"
                        iconName="Phone"
                        iconPosition="left"
                        onClick={() => window.location.href = 'tel:++919409713448'}>

                        Call Now
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        iconName="MessageCircle"
                        iconPosition="left"
                        onClick={() => window.open('https://wa.me/+919409713448', '_blank')}>

                        WhatsApp
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background rounded-xl p-6 text-center">
                      <Icon name="Shield" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Verified Drivers</div>
                    </div>
                    <div className="bg-background rounded-xl p-6 text-center">
                      <Icon name="Clock" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Available</div>
                    </div>
                    <div className="bg-background rounded-xl p-6 text-center">
                      <Icon name="Star" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground mb-1">4.8</div>
                      <div className="text-sm text-muted-foreground">Avg Rating</div>
                    </div>
                    <div className="bg-background rounded-xl p-6 text-center">
                      <Icon name="Users" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground mb-1">50K+</div>
                      <div className="text-sm text-muted-foreground">Happy Riders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {selectedVehicle &&
        <VehicleDetailsModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)} />

        }

        <ComparisonPanel
          vehicles={comparisonList}
          onRemove={handleRemoveFromComparison}
          onClear={handleClearComparison} />

      </div>
    </>);

};

export default FleetGallery;