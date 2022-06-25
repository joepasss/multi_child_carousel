import './carousel.scss';

export const Carousel = () => {
  const lis = [];
  for (let i = 0; i < 14; i++) {
    lis.push(<li key={i}>{i}</li>);
  }

  return (
    <div className='carousel-container'>
      <div className='button-group'>
        <button className='btn btn-left'>&lt;</button>
        <button className='btn btn-right'>&gt;</button>
      </div>

      <div className='image-container'>
        <ul className='list'>{lis}</ul>
      </div>
    </div>
  );
};
