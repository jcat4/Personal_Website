// Everything editable about the site lives here.
// Sprite numbers are National Dex IDs (Gen 1/2 only: 1-251).

export const profile = {
  name: 'Joey Cardosi',
  title: 'Full stack developer',
  company: 'Shopify',
  home: 'Memphis, TN',
  school: 'University of Arkansas',
  blurb:
    'I like making things fast, well-designed, and nice to use. Off the clock: cats, coffee, and catching them all.',
};

export const links = {
  github: 'https://github.com/jcat4',
  linkedin: 'https://www.linkedin.com/in/joeycardosi/',
};

// Interests, presented as a party. `type` picks the badge color in CSS.
export const party = [
  {
    id: 52,
    name: 'MEOWTH',
    topic: 'Cats',
    type: 'normal',
    entry: 'Will pet any cat that holds still. Most cats do not hold still.',
  },
  {
    id: 143,
    name: 'SNORLAX',
    topic: 'Coffee',
    type: 'normal',
    entry: 'Does not function before the first cup. Blocks the road until then.',
  },
  {
    id: 25,
    name: 'PIKACHU',
    topic: 'Pokémon',
    type: 'electric',
    entry: 'Gen 1 and Gen 2 forever. Still hears the Goldenrod City theme in dreams.',
  },
  {
    id: 151,
    name: 'MEW',
    topic: 'Anime',
    type: 'psychic',
    entry: 'Always one more episode. It is never one more episode.',
  },
  {
    id: 137,
    name: 'PORYGON',
    topic: 'Video games',
    type: 'normal',
    entry: 'Lives on a screen. Has opinions about frame rates and level design.',
  },
  {
    id: 94,
    name: 'GENGAR',
    topic: 'Late-night coding',
    type: 'ghost',
    entry: 'Shows up after midnight. Leaves behind commits and an empty mug.',
  },
];
