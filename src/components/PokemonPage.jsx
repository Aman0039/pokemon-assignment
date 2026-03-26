import { pokemons } from '../data';
import { usePokemon } from '../hooks/usePokemon';

const PokemonPage = () => {
  const { index, pokemon, selectPokemon, next, prev, isFirst, isLast } =
    usePokemon(pokemons);

  return (
    <div className="flex flex-col items-center justify-center text-center gap-11">
      <h1 className='text-4xl text-gray-950 font-semibold font-mono'>Pokemon Page</h1>

      {/* Buttons */}
      <div className="flex items-center justify-center">
        <button onClick={prev} disabled={isFirst}
        className=' bg-black pb-1 pt-1 p-5 rounded-xl text-white disabled:bg-black/50'
        >
          Previous
        </button>

        <button
          onClick={next}
          disabled={isLast}
          className="ml-4 bg-black pb-1 pt-1 p-5 rounded-xl text-white disabled:bg-black/50"
        >
          Next
        </button>
      </div>

      {/* Pokemon Display */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-2 p-2 rounded-xl text-gray-900/90 font-semibold">
          {pokemon.name.toUpperCase()}
        </h2>

        <div className="flex items-center justify-center rounded-xl shadow-md">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="max-w-full h-58 w-68 max-h-full object-fill"
          />
        </div>

        <p className="text-sm text-gray-800">
          {pokemon.description}
        </p>
      </div>
         <select
        value={index}
        onChange={(e) => selectPokemon(Number(e.target.value))}
        className="bg-white/60 rounded-md p-8 pb-1 pt-1 border border-lime-900/60 text-black"
      >
        {pokemons.map((p, i) => (
          <option key={p.name} value={i}>
            {p.name.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default PokemonPage;