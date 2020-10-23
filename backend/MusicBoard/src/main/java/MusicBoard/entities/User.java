package MusicBoard.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class User extends BaseEntity implements Serializable {

    @Column
    @NotNull
    private String userName;

    @Column
    @NotNull
    private String password;
    
    /*@JsonIgnore
    @ManyToMany(targetEntity = Instrument.class, mappedBy = "users")
    private List<Instrument> instruments;*/
    
    public static User.Builder builder() {
    	return new User.Builder();
    }
    
    public static class Builder {
    	private String userName;
        private String password;
        //private List<Instrument> instruments = new ArrayList<Instrument>();
        
        public Builder userName(final String userName) {
        	this.userName = userName;
        	return this;
        }
        
        public Builder password(final String password) {
        	this.password = password;
        	return this;
        }

        /*public Builder instruments(final List<Instrument> instruments) {
        	this.instruments = instruments;
        	return this;
        }*/
        
        public User build() {
        	return new User(userName, password/*, instruments*/);
        }
    }
}
