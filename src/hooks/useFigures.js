import pont from '../img/pont.png';
import hexagone from '../img/hexagone.png';
import doubleHexagone from '../img/double_hexagone.png';

const useFigures = () => {

  const figures = [
    {
      src: pont,
      alt: "Figure du pont",
      label: "Pont"
    },
    {
      src: hexagone,
      alt: "Figure de l'hexagone",
      label: "Hexagone"
    },
    {
      src: doubleHexagone,
      alt: "Figure du double hexagone",
      label: "Double hexagone"
    }
  ]

  return { figures };
}

export default useFigures;
