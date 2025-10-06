import Title from './Title'
import FormInput from '../formComponents/FormInput'
import ButtonLink from '../formComponents/ButtonLink'

const GameTurnPlayer = ({ playerFirstName, playerIndex, register, setValue }) => {
  return (
    <div className='game-turn-player'>
      <Title title={playerFirstName} />
      <FormInput label={"Points du triangle"} register={register(`joueur${playerIndex}_points`)} />
      <div className="group-buttons">
        <ButtonLink 
          label={"1ère pioche"}
          onClick={() => setValue(`joueur${playerIndex}_pioche1`, -5)}
        />
        <ButtonLink 
          label={"2e pioche"}
          onClick={() => setValue(`joueur${playerIndex}_pioche2`, -5)}
        />
        <ButtonLink
          label={"3e pioche"}
          onClick={() => setValue(`joueur${playerIndex}_pioche3`, -5)}
        />
        <ButtonLink
          label={"Oups ! J'peux pas !"}
          onClick={() => setValue(`joueur${playerIndex}_pioche4`, -10)}
        />
      </div>

    </div>
  )
}

export default GameTurnPlayer