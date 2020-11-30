package MusicBoard.services;

import MusicBoard.dao.SongStorage;
import MusicBoard.dao.UserStorage;
import MusicBoard.entities.Song;
import MusicBoard.entities.SongDTO;
import MusicBoard.entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SongService {

    private final SongStorage songStorage;
    private final UserStorage userStorage;

    public Song addSong(SongDTO songDTO) {
        Optional<User> Ouser = userStorage.findById(songDTO.getUserID());
        User user = null;
        if(Ouser.isPresent())
            user = Ouser.get();
        Song song = Song.builder().songName(songDTO.getSongName())
                .instrument(songDTO.getInstrument())
                .songObject(songDTO.getSongObject())
                .user(user)
                .build();
        return songStorage.add(song);
    }

    public List<Song> findSongsByUser(Long id) {
        return songStorage.findByUserId(id);
    }
}
