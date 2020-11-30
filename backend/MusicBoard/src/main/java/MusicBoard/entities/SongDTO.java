package MusicBoard.entities;

import lombok.Data;

@Data
public class SongDTO {
    public enum InstrumentType {
        GUITAR,
        PIANO
    }

    private String songName;
    private Song.InstrumentType instrument;
    private String songObject;
    private Long userID;
}
