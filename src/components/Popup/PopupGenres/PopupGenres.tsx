type PopupGenresProps = {
  genres: string[];
};

const PopupGenres = ({ genres }: PopupGenresProps) => {
  return (
    <>
      {genres.map((item) => (
        <span className='film-details__genre' key={item}>
          {item}
        </span>
      ))}
    </>
  );
};

export default PopupGenres;
