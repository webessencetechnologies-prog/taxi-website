import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ filters, onFilterChange, onReset }) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'van', label: 'Van' }
  ];

  const capacityOptions = [
    { value: 'all', label: 'Any Capacity' },
    { value: '4', label: '4 Passengers' },
    { value: '5', label: '5 Passengers' },
    { value: '6', label: '6 Passengers' },
    { value: '7', label: '7+ Passengers' }
  ];

  const luggageOptions = [
    { value: 'all', label: 'Any Luggage' },
    { value: '2', label: '2 Bags' },
    { value: '3', label: '3 Bags' },
    { value: '4', label: '4 Bags' },
    { value: '5', label: '5+ Bags' }
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Icon name="SlidersHorizontal" size={20} color="var(--color-primary)" />
          Filters
        </h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
      <div className="space-y-4">
        <Input
          type="text"
          label="Search Vehicles"
          placeholder="Search by name or model..."
          value={filters?.search}
          onChange={(e) => onFilterChange('search', e?.target?.value)}
        />

        <Select
          label="Category"
          options={categoryOptions}
          value={filters?.category}
          onChange={(value) => onFilterChange('category', value)}
        />

        <Select
          label="Passenger Capacity"
          options={capacityOptions}
          value={filters?.capacity}
          onChange={(value) => onFilterChange('capacity', value)}
        />

        <Select
          label="Luggage Capacity"
          options={luggageOptions}
          value={filters?.luggage}
          onChange={(value) => onFilterChange('luggage', value)}
        />

        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Price Range (per km)</label>
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="number"
              placeholder="Min"
              value={filters?.priceMin}
              onChange={(e) => onFilterChange('priceMin', e?.target?.value)}
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters?.priceMax}
              onChange={(e) => onFilterChange('priceMax', e?.target?.value)}
            />
          </div>
        </div>

        <div className="space-y-3 pt-2 border-t border-border">
          <label className="text-sm font-medium text-foreground">Availability</label>
          <Checkbox
            label="Available Now"
            checked={filters?.availableOnly}
            onChange={(e) => onFilterChange('availableOnly', e?.target?.checked)}
          />
          <Checkbox
            label="Popular Vehicles"
            checked={filters?.popularOnly}
            onChange={(e) => onFilterChange('popularOnly', e?.target?.checked)}
          />
        </div>

        <Select
          label="Sort By"
          options={sortOptions}
          value={filters?.sortBy}
          onChange={(value) => onFilterChange('sortBy', value)}
        />
      </div>
    </div>
  );
};

export default FilterPanel;