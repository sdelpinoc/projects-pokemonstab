export const types = [
    {
        name: 'Normal',
        className: 'type-normal',
        icon: '',
        weaknessTo: ['Fighting'],
        resistantTo: [],
        inmuneTo: ['Ghost'],
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
        inmuneTo: [],
        superEffective: ['Bug', 'Steel', 'Grass', 'Ice'],
        notVeryEffective: ['Rock', 'Fire', 'Water', 'Dragon'],
        withoutEffect: []
    }
];
