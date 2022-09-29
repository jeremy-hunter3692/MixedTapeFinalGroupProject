/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tracks_playlist').del()
  await knex('tracks_playlist').insert([
    { track_id: 1, playlist_id: 1 },
    { track_id: 2, playlist_id: 1 },
    { track_id: 3, playlist_id: 1 },
    { track_id: 4, playlist_id: 1 },
    { track_id: 5, playlist_id: 1 },
    { track_id: 6, playlist_id: 2 },
    { track_id: 7, playlist_id: 2 },
    { track_id: 8, playlist_id: 2 },
    { track_id: 9, playlist_id: 3 },
    { track_id: 10, playlist_id: 3 },
    { track_id: 11, playlist_id: 3 },
    { track_id: 12, playlist_id: 4 },
    { track_id: 13, playlist_id: 4 },
    { track_id: 14, playlist_id: 4 },
    { track_id: 15, playlist_id: 5 },
    { track_id: 16, playlist_id: 5 },
    { track_id: 17, playlist_id: 5 },
    { track_id: 17, playlist_id: 6 },
    { track_id: 18, playlist_id: 6 },
    { track_id: 19, playlist_id: 6 },
    { track_id: 20, playlist_id: 6 },
  ])
}
