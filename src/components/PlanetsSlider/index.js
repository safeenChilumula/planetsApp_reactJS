import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const setting = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div data-testid="planets" className="slides-container">
        <h1 className="planets-heading">PLANETS</h1>
        <Slider {...setting}>
          {planetsList.map(each => (
            <PlanetItem eachItem={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default PlanetsSlider
