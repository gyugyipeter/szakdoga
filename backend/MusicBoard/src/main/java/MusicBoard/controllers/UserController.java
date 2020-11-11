package MusicBoard.controllers;

import java.util.List;
import java.util.Optional;

import MusicBoard.security.AuthenticatedUser;
import MusicBoard.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.google.common.collect.Lists;

import MusicBoard.entities.User;
import MusicBoard.entities.wrapper.Users;
import MusicBoard.repositories.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    AuthenticatedUser authenticatedUser;

    @GetMapping("/who_am_i")
    public ResponseEntity whoami() { return ResponseEntity.ok(authenticatedUser.getUser());
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        return ResponseEntity.ok(userService.register(user));
    }

    @PostMapping("/logout")
    public ResponseEntity<User> logout() {
        SecurityContextHolder.getContext().setAuthentication(null);
        return new ResponseEntity("Successfully logged out", HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<Users> getAll() {
        final List<User> result = Lists.newArrayList();
        userRepository.findAll().iterator().forEachRemaining(result::add);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Integer id) {
        Optional<User> oUser = userRepository.findById(id);
        return oUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //list update
    @PutMapping("/{id}")
    public ResponseEntity<User> updateById(@PathVariable Integer id, @RequestBody User user) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            user.setId(id);
            return ResponseEntity.ok(userRepository.save(user));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteById(@PathVariable Integer id) {
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
    }
}
