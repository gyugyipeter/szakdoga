package MusicBoard.controllers;

import MusicBoard.entities.Song;
import MusicBoard.entities.wrapper.Songs;
import MusicBoard.repositories.SongRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("songs")
public class SongController {

    @Autowired
    private SongRepository songRepository;

    @GetMapping("")
    public ResponseEntity<Songs> getAll() {
        final List<Song> result = Lists.newArrayList();
        songRepository.findAll().iterator().forEachRemaining(result::add);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Song> getById(@PathVariable Long id) {
        Optional<Song> oSong = songRepository.findById(id);
        return oSong.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //list update
    @PutMapping("/{id}")
    public ResponseEntity<Song> updateById(@PathVariable Long id, @RequestBody Song song) {
        Optional<Song> oSong = songRepository.findById(id);
        if (oSong.isPresent()) {
            song.setId(id);
            return ResponseEntity.ok(songRepository.save(song));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Song> deleteById(@PathVariable Long id) {
        Optional<Song> oSong = songRepository.findById(id);
        if (!oSong.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        songRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
