package MusicBoard.entities.wrapper;

import MusicBoard.entities.Song;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class Songs extends CollectionResource<Song> {

    private static final long serialVersionUID = 1L;

    @JsonCreator
    public Songs(@JsonProperty("items") List<Song> items) {
        super(items);
    }
}
