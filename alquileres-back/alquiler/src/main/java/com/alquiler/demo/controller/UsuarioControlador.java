package com.alquiler.demo.controller;

import com.alquiler.demo.entity.Usuario;
import com.alquiler.demo.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/usuario")
public class UsuarioControlador {
    @Autowired
    private UsuarioService service;

    private ResponseEntity<?> validar(BindingResult result) {
        Map<String, Object> errores = new HashMap<>();
        result.getFieldErrors().forEach(e -> {
            errores.put(e.getField(), "El campo " + e.getField() + " " + e.getDefaultMessage());
        });
        return new ResponseEntity<>(errores, HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        Optional<Usuario> o = service.findById(id);
        if (o.isPresent()) {
            return ResponseEntity.ok().body(o.get());
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/nombre/{username}")
    public ResponseEntity<?> findByUsername(@PathVariable String username) {
        Optional<Usuario> o = service.findByUsername(username);
        if (o.isPresent()) {
            return ResponseEntity.ok().body(o.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody Usuario usuario, BindingResult result) {
        if (result.hasErrors()) {
            return this.validar(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(usuario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editar(@Valid @RequestBody Usuario usuario, BindingResult result, @PathVariable Long id) {

        if (result.hasErrors()) {
            return this.validar(result);
        }

        Optional<Usuario> o = service.findById(id);
        if (o.isPresent()) {

            Usuario usuarioDb = o.get();

            usuarioDb.setNombre(usuario.getNombre());
            usuarioDb.setApellido(usuario.getApellido());

            System.out.println(usuarioDb);
            return ResponseEntity.status(HttpStatus.CREATED).body(service.save(usuarioDb));
        }
        return ResponseEntity.notFound().build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?>delete(@PathVariable Long id){
        Optional<Usuario>o = service.findById(id);
        if (o.isPresent()){
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return  ResponseEntity.notFound().build();
    }

}
