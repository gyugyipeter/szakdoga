package MusicBoard.controllers;

import MusicBoard.entities.User;
import MusicBoard.repositories.UserRepository;
import MusicBoard.services.UserService;
import com.google.common.collect.Lists;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class UserController {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<Optional<User>> login(@RequestBody User user) {
        try {
            Optional<User> oUser = userService.findUserByUsername(user.getUserName());
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    user.getUserName(), user.getPassword()));
            return ResponseEntity.ok(oUser);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        } catch (Exception e) {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        try {
            userService.register(user);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Registration was successful");
        } catch (Exception e) {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("")
    public ResponseEntity<List<User>> getAll() {
        try {
            final List<User> result = Lists.newArrayList();
            userRepository.findAll().iterator().forEachRemaining(result::add);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /* have not used these endpoints, but they might get handy in the future
    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        Optional<User> oUser = userRepository.findById(id);
        return oUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateById(@PathVariable Long id, @RequestBody User user) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            user.setId(id);
            return ResponseEntity.ok(userRepository.save(user));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteById(@PathVariable Long id) {
        Optional<User> oUser = userRepository.findById(id);
        if (!oUser.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/username/{userName}")
    public ResponseEntity<User> getByUserName(@PathVariable("userName") String userName) {
        Optional<User> oUser = userRepository.findByUserName(userName);
        return oUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/username/{userName}")
    public ResponseEntity<User> updateByName(@PathVariable("userName") String userName, @RequestBody User user) {
        Optional<User> oUser = userRepository.findByUserName(userName);
        if (oUser.isPresent()) {
            user.setId(oUser.get().getId());
            return ResponseEntity.ok(userRepository.save(user));
        }
        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/username/{userName}")
    public ResponseEntity<User> deleteByUserName(@PathVariable("userName") String userName) {
        Optional<User> oUser = userRepository.findByUserName(userName);
        if (!oUser.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        userRepository.delete(oUser.get());
        return ResponseEntity.ok().build();
    }*/
}
