export const formatPrice = (price: number): string => {
  return `$ ${price}`;
};

export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};

export const formatReviews = (reviews: number): string => {
  if (reviews >= 1000) {
    return `${(reviews / 1000).toFixed(1)}k`;
  }
  return reviews.toString();
}; 