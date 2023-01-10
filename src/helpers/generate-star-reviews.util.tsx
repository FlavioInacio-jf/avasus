import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

export const generateStarReviews = (rating: string) => {
  const stars = Array.from({ length: 5 }, (x, i) => i + 1).map((item) => {
    const [wholePart, decimalPart] = rating.split('.');

    const numberDecimalPart = parseInt(decimalPart, 10);
    const numberWholePart = parseInt(wholePart, 10);

    if (
      item <= numberWholePart ||
      (numberDecimalPart > 5 && item - numberWholePart < 2)
    ) {
      return <BsStarFill key={item} className='text-primary' />;
    }

    if (numberDecimalPart <= 5 && item - numberWholePart < 2) {
      return <BsStarHalf key={item} className='text-primary' />;
    }

    return <BsStar key={item} />;
  });

  return stars;
};
