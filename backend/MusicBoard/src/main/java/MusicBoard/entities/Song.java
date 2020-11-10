package MusicBoard.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.checkerframework.common.aliasing.qual.Unique;

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
    private Integer id;

    public enum InstrumentType {
        GUITAR,
        PIANO
    }

    @Column//(unique=true)
    @NotNull
    private String songName;

    @Column
    @NotNull
    private InstrumentType instrument;

    @Column
    @NotNull
    private String songObject;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;
}
