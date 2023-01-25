export const getAllConcerts = (DUMMY_CONCERTS) => {
  return DUMMY_CONCERTS;
};

export const getFeaturedConcerts = (DUMMY_CONCERTS) => {
  return DUMMY_CONCERTS.filter((concert) => concert.isFeatured);
};


export function getFilteredConcerts(dateFilter) {
  const { year, month } = dateFilter;

  let filteredConcerts = DUMMY_CONCERTS.filter((concert) => {
    const concertDate = new Date(concert.date);
    return (
      concertDate.getFullYear() === year && concertDate.getMonth() === month - 1
    );
  });

  return filteredConcerts;
}



export const getConcertById = (id, DUMMY_CONCERTS) => {
  return DUMMY_CONCERTS.find((concert) => concert.id === id);
};