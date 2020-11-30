package MusicBoard.services;

import MusicBoard.dao.SongStorage;
import MusicBoard.dao.UserStorage;
import MusicBoard.entities.Song;
import MusicBoard.entities.SongDTO;
import MusicBoard.entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SongService {

    private final SongStorage songStorage;
    private final UserStorage userStorage;

    public Long addSong(SongDTO songDTO) {
        Optional<User> Ouser = userStorage.findById(songDTO.getUserID());
        User user = null;
        if (Ouser.isPresent())
            user = Ouser.get();
        Song song = Song.builder().songName(songDTO.getSongName())
                .instrument(songDTO.getInstrument())
                .songObject(songDTO.getSongObject())
                .user(user)
                .build();
        songStorage.add(song);
        return song.getId();
    }

    public void updateSong(Long id, String notes) {
        songStorage.update(id, notes);
    }

    public void deleteSong(Long id) {
        songStorage.delete(id);
    }

    public List<Song> findSongsByUser(Long id) {
        return songStorage.findByUserId(id);
    }
}
