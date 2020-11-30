package MusicBoard.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Table(name = "song")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Song implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public enum InstrumentType {
        GUITAR,
        PIANO
    }

    @NotNull
    private String songName;

    @Column
    @NotNull
    @Enumerated(EnumType.STRING)
    private InstrumentType instrument;

    @Column
    @NotNull
    @Lob
    private String songObject;

    @NotNull
    @ManyToOne
    private User user;
}
