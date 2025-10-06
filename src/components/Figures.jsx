import useFigures from '../hooks/useFigures'
import Title from './Title'
import { map } from 'ramda'
import './figures.css'

// TODO: faire un accordion
const Figures = () => {
  const { figures } = useFigures();

  return (
    <div className='figures-bloc'>
      <Title title={"Figures"} />
      <div className='figures'>
        { map(
          figure => <div>
            <img className='figure-img' src={figure.src} alt={figure.alt} />
            <div className='figure-label'>{figure.label}</div>
          </div>
        )(figures)}
        <div>
        </div>
      </div>
    </div>
  )
}

export default Figures