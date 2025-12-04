import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const RouteFilters = ({ filters, onFilterChange, onResetFilters }) => {
  const difficultyOptions = [
    { value: 'all', label: 'All Difficulties' },
    { value: 'easy', label: 'Easy' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'challenging', label: 'Challenging' }
  ];

  const trafficOptions = [
    { value: 'all', label: 'All Traffic Levels' },
    { value: 'light', label: 'Light Traffic' },
    { value: 'moderate', label: 'Moderate Traffic' },
    { value: 'heavy', label: 'Heavy Traffic' }
  ];

  const sortOptions = [
    { value: 'distance', label: 'Distance (Shortest First)' },
    { value: 'duration', label: 'Duration (Fastest First)' },
    { value: 'fare', label: 'Fare (Lowest First)' },
    { value: 'popularity', label: 'Most Popular' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={20} color="var(--color-primary)" />
          <h3 className="font-semibold text-foreground">Filter Routes</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={onResetFilters}
        >
          Reset
        </Button>
      </div>
      <div className="space-y-4">
        <Input
          type="search"
          label="Search Routes"
          placeholder="Search by name or landmark..."
          value={filters?.search}
          onChange={(e) => onFilterChange('search', e?.target?.value)}
        />

        <Select
          label="Difficulty Level"
          options={difficultyOptions}
          value={filters?.difficulty}
          onChange={(value) => onFilterChange('difficulty', value)}
        />

        <Select
          label="Traffic Condition"
          options={trafficOptions}
          value={filters?.traffic}
          onChange={(value) => onFilterChange('traffic', value)}
        />

        <Select
          label="Sort By"
          options={sortOptions}
          value={filters?.sortBy}
          onChange={(value) => onFilterChange('sortBy', value)}
        />

        <div className="pt-4 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-3">Distance Range</p>
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="number"
              label="Min (km)"
              placeholder="0"
              value={filters?.minDistance}
              onChange={(e) => onFilterChange('minDistance', e?.target?.value)}
            />
            <Input
              type="number"
              label="Max (km)"
              placeholder="100"
              value={filters?.maxDistance}
              onChange={(e) => onFilterChange('maxDistance', e?.target?.value)}
            />
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-3">Fare Range</p>
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="number"
              label="Min ($)"
              placeholder="0"
              value={filters?.minFare}
              onChange={(e) => onFilterChange('minFare', e?.target?.value)}
            />
            <Input
              type="number"
              label="Max ($)"
              placeholder="500"
              value={filters?.maxFare}
              onChange={(e) => onFilterChange('maxFare', e?.target?.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteFilters;