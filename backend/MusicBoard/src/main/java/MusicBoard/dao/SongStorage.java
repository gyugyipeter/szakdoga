package MusicBoard.dao;

import MusicBoard.entities.Song;
import MusicBoard.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class SongStorage {

    @Autowired
    private SongRepository songRepository;

    public void add(Song song) {
        songRepository.save(song);
    }

    public void update(Long id, String notes) {
        Optional<Song> currentVersion = songRepository.findById(id);
        if(currentVersion.isPresent()) {
            currentVersion.get().setSongObject(notes);
            Song updatedVersion = currentVersion.get();
            songRepository.save(updatedVersion);
        }
    }

    public List<Song> findByUserId(Long id) {
        return songRepository.findByUserId(id);
    }

}
