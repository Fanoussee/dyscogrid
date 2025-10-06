import Title from './Title'
import FormInput from '../formComponents/FormInput'
import ButtonLink from '../formComponents/ButtonLink'
import { map, or } from 'ramda'
import { isNotNilOrEmpty } from 'ramda-adjunct'
import { pioches } from '../helpers/pioches'

const GameTurnPlayer = ({ playerFirstName, playerIndex, register, setValue, watch }) => {
  return (
    <div className='game-turn-player'>
      <Title title={playerFirstName} />
      <FormInput 
        label={"Points du triangle"}
        register={register(`joueur${playerIndex}.points`)}
        disabled={isNotNilOrEmpty(watch(`joueur${playerIndex}.pioche4`))}
      />
      <div className="group-buttons">
        {map(
          pioche => {
            const hasValue = isNotNilOrEmpty(watch(`joueur${playerIndex}.points`));
            const hasPioche = isNotNilOrEmpty(watch(`joueur${playerIndex}.pioche${pioche.index}`));
            
            return <ButtonLink 
              key={pioche.index}
              label={pioche.label}
              onClick={() => setValue(`joueur${playerIndex}.pioche${pioche.index}`, pioche.valeur)}
              disabled={or(hasValue, hasPioche)}
            />
          }
        )(pioches)}
      </div>
      {/* <Figures /> */}
    </div>
  )
}

export default GameTurnPlayer