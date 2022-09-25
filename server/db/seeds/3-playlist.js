exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('playlist').insert([
    { id: 1, name: 'Summer Vibes', image_id: '6' },
    { id: 2, name: 'Hard Rock', image_id: '11' },
    { id: 3, name: 'Cool Jazz', image_id: '3' },
    { id: 4, name: 'K Pop', image_id: '16' },
    { id: 5, name: 'Kiwi Classics', image_id: '5' },
    { id: 6, name: 'Aussie Anthems', image_id: '14' },
    { id: 7, name: 'Brit Pop', image_id: '8' },
    { id: 8, name: 'Punk', image_id: '15' },
    { id: 9, name: 'House Party', image_id: '7' },
  ])
}
