package MusicBoard.repositories;

import MusicBoard.entities.Song;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface SongRepository extends JpaRepository<Song, Long> {
    List<Song> findByUserId(Long id);
}
