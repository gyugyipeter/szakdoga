package MusicBoard.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import MusicBoard.entities.Song;

@Repository
public interface SongRepository extends CrudRepository<Song, Integer> {
    Optional<Song> findBySongName(String songName);
}
