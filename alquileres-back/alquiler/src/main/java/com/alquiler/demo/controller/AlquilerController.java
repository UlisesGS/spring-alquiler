package com.alquiler.demo.controller;

import com.alquiler.demo.entity.Alquiler;
import com.alquiler.demo.service.AlquilerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/alquiler")
public class AlquilerController {

    @Autowired
    private AlquilerService alquilerService;

    @GetMapping
    public ResponseEntity<?> findAll(){
        List<Alquiler> alquileres = alquilerService.findAll();

        if (alquileres.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok().body(alquileres);
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Optional<Alquiler> alquilerOptional = alquilerService.findById(id);

        if (alquilerOptional.isPresent()){
            return ResponseEntity.ok().body(alquilerOptional.get());
        }

        return ResponseEntity.notFound().build();
    }


    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody Alquiler alquiler, BindingResult result){

        if (result.hasErrors()){
            return this.validation(result);
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(alquilerService.save(alquiler));

    }


    @PutMapping("/{id}")
    public ResponseEntity<?> update(@Valid @RequestBody Alquiler alquiler, BindingResult result, @PathVariable Long id){

        if (result.hasErrors()){
            return this.validation(result);
        }

        Optional<Alquiler> alquilerOptional = alquilerService.findById(id);

        if (alquilerOptional.isPresent()){
            Alquiler alquiler1 = alquilerOptional.get();

            alquiler1.setReseña(alquiler.getReseña());
            alquiler1.setFoto(alquiler.getFoto());

            return ResponseEntity.status(HttpStatus.CREATED).body(alquilerService.save(alquiler1));
        }

        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        Optional<Alquiler> alquilerOptional = alquilerService.findById(id);

        if (alquilerOptional.isPresent()){
            alquilerService.deleteById(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }


    private ResponseEntity<?> validation(BindingResult result){

        Map<String, Object> errores = new HashMap<>();

        result.getFieldErrors().forEach( err -> {
            errores.put(err.getField(), "El campo"+ err.getField()+ " "+ err.getDefaultMessage());
        });

        return ResponseEntity.badRequest().body(errores);
    }
}
