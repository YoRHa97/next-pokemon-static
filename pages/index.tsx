import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { PokemonListResponse, PokemonSmall } from '../interfaces';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { pokeApi } from '../api';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: PokemonSmall[] = data.results.map((result, idx) => {
    const id: number = idx + 1;
    return {
      ...result,
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    };
  });
  return {
    props: {
      pokemons,
    },
  };
};

type Props = {
  pokemons: PokemonSmall[];
};

const PokemonListPage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export default PokemonListPage;
