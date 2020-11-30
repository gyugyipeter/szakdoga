package MusicBoard.controllers;

import java.rmi.ServerError;
import java.rmi.ServerException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import MusicBoard.security.AuthenticatedUser;
import MusicBoard.services.UserService;
import javassist.NotFoundException;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.google.common.collect.Lists;

import MusicBoard.entities.User;
import MusicBoard.entities.wrapper.Users;
import MusicBoard.repositories.UserRepository;
import org.springframework.web.client.HttpServerErrorException;

import javax.servlet.http.HttpServletResponse;

@CrossOrigin
@RestController
@RequestMapping("user")
@RequiredArgsConstructor
public class UserController {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final UserService userService;

    @Autowired
    AuthenticatedUser authenticatedUser;

    @PostMapping("/login")
    public ResponseEntity<Optional<User>> login(@RequestBody User user) {
        try {
            Optional<User> oUser = userRepository.findByUserName(user.getUserName());
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
    public ResponseEntity<Users> getAll() {
        final List<User> result = Lists.newArrayList();
        userRepository.findAll().iterator().forEachRemaining(result::add);
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        Optional<User> oUser = userRepository.findById(id);
        return oUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //list update
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
    }
}
