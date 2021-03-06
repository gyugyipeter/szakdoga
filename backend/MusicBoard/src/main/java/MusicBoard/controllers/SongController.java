package MusicBoard.controllers;

import MusicBoard.entities.Song;
import MusicBoard.entities.SongDTO;
import MusicBoard.repositories.SongRepository;
import MusicBoard.services.SongService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("songs")
@RequiredArgsConstructor
public class SongController {
    private final SongService songService;

    @Autowired
    private SongRepository songRepository;

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Song>> getByUser(@PathVariable Long id) {
        try {
            final List<Song> songs = songService.findSongsByUser(id);
            return new ResponseEntity<>(songs, HttpStatus.OK);
        } catch (Exception e) {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Song>> getById(@PathVariable Long id) {
        try {
            Optional<Song> oSong = songRepository.findById(id);
            if(!oSong.isPresent())
                throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
            return ResponseEntity.ok(oSong);
        } catch (Exception e) {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("")
    public ResponseEntity<String> addNewSong(@RequestBody SongDTO song) {
        try {
            Long newId = songService.addSong(song);
            return ResponseEntity.status(HttpStatus.OK).body(newId.toString());
        } catch (Exception e) {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateById(@PathVariable Long id, @RequestBody String updatedNotes) {
        try {
            if(!songRepository.findById(id).isPresent())
                throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
            songService.updateSong(id, updatedNotes);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Song updated");
        } catch (Exception e) {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id) {
        try {
            songService.deleteSong(id);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Song deleted");
        } catch (Exception e) {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
