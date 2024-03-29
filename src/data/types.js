export const types = [
  {
    name: 'Normal',
    className: 'type-normal',
    icon: '',
    weaknessTo: ['Fighting'],
    resistantTo: [],
    ImmuneTo: ['Ghost'],
    superEffective: [],
    notVeryEffective: ['Rock', 'Steel'],
    withoutEffect: ['Ghost']
  },
  {
    name: 'Fire',
    className: 'type-fire',
    icon: '',
    weaknessTo: ['Ground', 'Rock', 'Water'],
    resistantTo: ['Bug', 'Steel', 'Fire', 'Grass', 'Ice', 'Fairy'],
    ImmuneTo: [],
    superEffective: ['Bug', 'Steel', 'Grass', 'Ice'],
    notVeryEffective: ['Rock', 'Fire', 'Water', 'Dragon'],
    withoutEffect: []
  },
  {
    name: 'Water',
    className: 'type-water',
    icon: '',
    weaknessTo: ['Grass', 'Electric'],
    resistantTo: ['Steel', 'Fire', 'Water', 'Ice'],
    ImmuneTo: [],
    superEffective: ['Ground', 'Rock', 'Fire'],
    notVeryEffective: ['Water', 'Grass', 'Dragon'],
    withoutEffect: []
  },
  {
    name: 'Grass',
    className: 'type-grass',
    icon: '',
    weaknessTo: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'],
    resistantTo: ['Ground', 'Water', 'Grass', 'Electric'],
    ImmuneTo: [],
    superEffective: ['Water', 'Ground', 'Rock'],
    notVeryEffective: ['Poison', 'Flying', 'Bug', 'Steel', 'Fire', 'Grass', 'Dragon'],
    withoutEffect: []
  },
  {
    name: 'Electric',
    className: 'type-electric',
    icon: '',
    weaknessTo: ['Ground'],
    resistantTo: ['Flying', 'Steel', 'Electric'],
    ImmuneTo: [],
    superEffective: ['Flying', 'Water'],
    notVeryEffective: ['Grass', 'Electric', 'Dragon'],
    withoutEffect: ['Ground']
  },
  {
    name: 'Ice',
    className: 'type-ice',
    icon: '',
    weaknessTo: ['Fighting', 'Rock', 'Steel', 'Fire'],
    resistantTo: ['Ice'],
    ImmuneTo: [],
    superEffective: ['Flying', 'Ground', 'Grass', 'Dragon'],
    notVeryEffective: ['Steel', 'Fire', 'Water', 'Ice'],
    withoutEffect: []
  },
  {
    name: 'Fighting',
    className: 'type-fighting',
    icon: '',
    weaknessTo: ['Flying', 'Psychic', 'Fairy'],
    resistantTo: ['Rock', 'Bug', 'Dark'],
    ImmuneTo: [],
    superEffective: ['Normal', 'Rock', 'Steel', 'Ice', 'Dark'],
    notVeryEffective: ['Flying', 'Poison', 'Bug', 'Psychic', 'Fairy'],
    withoutEffect: ['Ghost']
  },
  {
    name: 'Poison',
    className: 'type-poison',
    icon: '',
    weaknessTo: ['Ground', 'Psychic'],
    resistantTo: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy'],
    ImmuneTo: [],
    superEffective: ['Grass', 'Fairy'],
    notVeryEffective: ['Poison', 'Ground', 'Rock', 'Ghost'],
    withoutEffect: ['Steel']
  },
  {
    name: 'Ground',
    className: 'type-ground',
    icon: '',
    weaknessTo: ['Water', 'Grass', 'Ice'],
    resistantTo: ['Poison', 'Rock'],
    ImmuneTo: ['Electric'],
    superEffective: ['Poison', 'Rock', 'Steel', 'Fire', 'Electric'],
    notVeryEffective: ['Bug', 'Grass'],
    withoutEffect: ['Flying']
  },
  {
    name: 'Flying',
    className: 'type-flying',
    icon: '',
    weaknessTo: ['Rock', 'Electric', 'Ice'],
    resistantTo: ['Bug', 'Grass', 'Fighting'],
    ImmuneTo: ['Ground'],
    superEffective: ['Fighting', 'Bug', 'Grass'],
    notVeryEffective: ['Rock', 'Steel', 'Electric'],
    withoutEffect: []
  },
  {
    name: 'Psychic',
    className: 'type-psychic',
    icon: '',
    weaknessTo: ['Bug', 'Ghost', 'Dark'],
    resistantTo: ['Fighting', 'Psychic'],
    ImmuneTo: [],
    superEffective: ['Fighting', 'Poison'],
    notVeryEffective: ['Steel', 'Psychic'],
    withoutEffect: ['Dark']
  },
  {
    name: 'Bug',
    className: 'type-bug',
    icon: '',
    weaknessTo: ['Flying', 'Rock', 'Fire'],
    resistantTo: ['Fighting', 'Ground', 'Grass'],
    ImmuneTo: [],
    superEffective: ['Grass', 'Psychic', 'Dark'],
    notVeryEffective: ['Fighting', 'Flying', 'Poison', 'Ghost', 'Steel', 'Fire', 'Fairy'],
    withoutEffect: []
  },
  {
    name: 'Rock',
    className: 'type-rock',
    icon: '',
    weaknessTo: ['Fighting', 'Ground', 'Steel', 'Water', 'Grass'],
    resistantTo: ['Normal', 'Flying', 'Poison', 'Fire'],
    ImmuneTo: [],
    superEffective: ['Flying', 'Bug', 'Fire', 'Ice'],
    notVeryEffective: ['Fighting', 'Ground', 'Steel'],
    withoutEffect: []
  },
  {
    name: 'Ghost',
    className: 'type-ghost',
    icon: '',
    weaknessTo: ['Ghost', 'Dark'],
    resistantTo: ['Poison', 'Bug'],
    ImmuneTo: ['Normal', 'Fighting'],
    superEffective: ['Ghost', 'Psychic'],
    notVeryEffective: ['Dark'],
    withoutEffect: ['Normal']
  },
  {
    name: 'Dark',
    className: 'type-dark',
    icon: '',
    weaknessTo: ['Fighting', 'Bug', 'Fairy'],
    resistantTo: ['Ghost', 'Dark'],
    ImmuneTo: ['Psychic'],
    superEffective: ['Ghost', 'Psychic'],
    notVeryEffective: ['Fighting', 'Dark', 'Fairy'],
    withoutEffect: []
  },
  {
    name: 'Dragon',
    className: 'type-dragon',
    icon: '',
    weaknessTo: ['Ice', 'Dragon', 'Fairy'],
    resistantTo: ['Fire', 'Water', 'Grass', 'Electric'],
    ImmuneTo: [],
    superEffective: ['Dragon'],
    notVeryEffective: ['Steel'],
    withoutEffect: ['Fairy']
  },
  {
    name: 'Steel',
    className: 'type-steel',
    icon: '',
    weaknessTo: ['Fighting', 'Ground', 'Fire'],
    resistantTo: ['Normal', 'Flying', 'Rock', 'Bug', 'Steel', 'Grass', 'Psychic', 'Ice', 'Dragon', 'Fairy'],
    ImmuneTo: ['Poison'],
    superEffective: ['Rock', 'Ice', 'Fairy'],
    notVeryEffective: ['Steel', 'Fire', 'Water', 'Electric'],
    withoutEffect: []
  },
  {
    name: 'Fairy',
    className: 'type-fairy',
    icon: '',
    weaknessTo: ['Poison', 'Steel'],
    resistantTo: ['Fighting', 'Bug', 'Dark'],
    ImmuneTo: ['Dragon'],
    superEffective: ['Fighting', 'Dragon', 'Dark'],
    notVeryEffective: ['Poison', 'Steel', 'Fire'],
    withoutEffect: []
  }
]
