/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    const playlist = {
      name: playlistName,
      songs: [],
    };

    playlists = [...playlists, playlist];
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => playlists;

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      playlists = playlists.filter(({ name }) => name !== playlistName); 
      //playlist => playlist.name !== playlistName
    };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    const playlist = playlists.find(({ name }) => name === playlistName);
    if (!playlist) {
      throw new Error("Playlist not found");
    }

    playlists = playlists.map(playlist => {
      if (playlist.name === playlistName) {
        const newSongs = [...playlist.songs, {...song, favorite: false}];
        return {
          ...playlist,
          songs: newSongs
        }
      }
      return playlist;
    });
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    const playlist = playlists.find(({ name }) => name === playlistName);
    if (!playlist) {
      throw new Error("Playlist not found");
    }
    
    const song = playlist.songs.find(song => song.title === title);
    if (!song) {
      throw new Error("Song not found");
    }
    
    playlists = playlists.map(playlist => {
      if (playlist.name === playlistName) {
        const newSongs = playlist.songs.filter(song => song.title !== title);
        return {
          ...playlist,
          songs: newSongs
        }
      }
      return playlist;
    }); 
  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {
    playlists = playlists.map(playlist => {
      if (playlist.name === playlistName) {
        const newSongs = playlist.songs.map(song => {
          if (song.title === title) {
            return {
              ...song,
              favorite: !song.favorite,
            }
          }
          return song
        })
        return {
          ...playlist,
          songs: newSongs
        }
      }
      return playlist;
    });
  }; // Cuando le doy a incluir en favoritos no me aparece nada para poder borrar el favorito. Sin embargo he preparado la función para que se pueda quitar un favorito para cuando haya botón que permita quitar canciones de favoritos

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */

  const sortBy = (songs, criterion, isText) => {
    const sortedSongs = [...songs].toSorted((a, b) => {
      let critA = a[criterion];
      let critB = b[criterion];
      if (!isText) {
        critA = a[criterion];
        critB = b[criterion];
      } else {
        critA = critA.toLowerCase();
        critB = critB.toLowerCase();
      }

      if (critA < critB) {
        return -1;
      }
      else if (critA > critB) {
        return 1;
      }
      return 0;
      }
    )
    return sortedSongs;
  }; // Esto ha costado mucho, mucho

  const sortSongs = (playlistName, criterion) => {
    const playlist = playlists.find(({ name }) => name === playlistName);
    if (!playlist) {
      throw new Error("Playlist not found");
    }

    const validCriterion = ["title", "artist", "duration"];
    if (!validCriterion.includes(criterion)) {
      throw new Error("Criterion invalid");
    }

    playlists = playlists.map(playlist => {
      if (playlist.name === playlistName) {
        return {
          ...playlist,
          songs: sortBy(playlist.songs, criterion, criterion === "duration" ? false : true)
        };
      }
    });

    /* Version original sin refactorizar
    playlists = playlists.map(playlist => {
      if (playlist.name === playlistName) {
        let songs = [];
        switch (criterion) {
          case "title":
            songs = [...playlist.songs].toSorted((a, b) => {
              const titleA = a.title.toLowerCase();
              const titleB = b.title.toLowerCase();
              if (titleA < titleB) {
                return -1;
              }
              if (titleA > titleB) {
                return 1;
              }
              return 0;
            });
            return {
              ...playlist,
              songs
            }
          case "artist":
            songs = [...playlist.songs].toSorted((a, b) => {
              const artistA = a.artist.toLowerCase();
              const artistB = b.artist.toLowerCase();
              if (artistA < artistB) {
                return -1;
              }
              if (artistA > artistB) {
                return 1;
              }
              return 0;
            });
            return {
              ...playlist,
              songs
            }
          case "duration":
            songs = [...playlist.songs].toSorted((a, b) => {
              if (a.duration < b.duration) {
                return -1;
              }
              if (a.duration > b.duration) {
                return 1;
              }
              return 0;
            });
            return {
              ...playlist,
              songs
            }
          default:
            throw new Error ("Criterion not found");
        }
      }
      return playlist;
    }); */
    
  };
  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};


export default musicCatalog;