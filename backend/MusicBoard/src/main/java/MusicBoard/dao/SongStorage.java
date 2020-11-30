package MusicBoard.dao;

import MusicBoard.entities.Song;
import MusicBoard.entities.User;
import MusicBoard.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public class SongStorage {

    @Autowired
    private SongRepository songRepository;

    public Song add(Song song) {
        return songRepository.save(song);
    }

    public List<Song> findByUserId(Long id) {
        return songRepository.findByUserId(id);
    }

}
