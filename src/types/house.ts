export interface House {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

export interface HouseCardProps extends House {
  onClick?: () => void;
}

export interface HouseGridProps {
  houses: House[];
  onHouseClick?: (house: House) => void;
}

export interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
} 