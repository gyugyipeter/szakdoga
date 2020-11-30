package MusicBoard.repositories;

import java.util.List;
import java.util.Optional;

import MusicBoard.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import MusicBoard.entities.Song;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface SongRepository extends JpaRepository<Song, Long> {
    Optional<Song> findBySongName(String songName);
    @Query("select s from Song s where s.user = :userid")
    List<Song> getAllSongsByUserId(@Param("userid") Long id);
    List<Song> findByUserId(Long id);
}
