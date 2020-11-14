package MusicBoard.dao;

import MusicBoard.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SongStorage {

    @Autowired
    private SongRepository songRepository;


}
