package com.alquiler.demo.controller;

import com.alquiler.demo.entity.Propiedad;
import com.alquiler.demo.entity.Usuario;
import com.alquiler.demo.repository.PropiedadRepository;
import com.alquiler.demo.service.PropiedadService;
import com.alquiler.demo.service.UsuarioService;
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
@RequestMapping("/propiedad")
public class PropiedadController {

    @Autowired
    private PropiedadService propiedadService;
    @Autowired
    private UsuarioService service;

    @Autowired
    private UsuarioService usuarioService;


    @GetMapping
    public ResponseEntity<?> findAll(){

        List<Propiedad> propiedades = propiedadService.findAll();

        if (propiedades.isEmpty()){
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok().body(propiedadService.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){

        Optional<Propiedad> optional = propiedadService.findById(id);

        if (optional.isPresent()){
            return ResponseEntity.ok().body(propiedadService.findById(id));
        }

        return ResponseEntity.notFound().build();
    }


    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody Propiedad propiedad, BindingResult result ){
<<<<<<< HEAD
        Optional<Usuario> optional = service.findById(propiedad.getUsuario().getId());
        Usuario usuario=null;
        if(optional.isPresent()){
           usuario = optional.get();
        }
        propiedad.setUsuario(usuario);
                System.out.println(propiedad);
=======


>>>>>>> ulises
        if (result.hasErrors()){
            return validation(result);
        }

<<<<<<< HEAD
=======
        Optional<Usuario> usuarioOptional = usuarioService.findById(propiedad.getUsuario().getId());
        Usuario usuario = null;
        if (usuarioOptional.isPresent()){
            usuario = usuarioOptional.get();

        }

        propiedad.setUsuario(usuario);
>>>>>>> ulises

        return ResponseEntity.status(HttpStatus.CREATED).body(propiedadService.save(propiedad));

    }


    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody Propiedad propiedad, BindingResult result){
        Optional<Propiedad> optional = propiedadService.findById(id);


        if (result.hasErrors()){
            return validation(result);
        }

        if (optional.isPresent()){
            Propiedad propiedad1 = optional.get();

            propiedad1.setUsuario(propiedad.getUsuario());
            propiedad1.setUbicacion(propiedad.getUbicacion());
            propiedad1.setFoto(propiedad.getFoto());
            propiedad1.setPrecio(propiedad.getPrecio());
            /*propiedad1.setListaCliente(propiedad.getListaCliente());*/

            return ResponseEntity.status(HttpStatus.CREATED).body(propiedadService.save(propiedad1));
        }

        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        Optional<Propiedad> optional = propiedadService.findById(id);

        if (optional.isPresent()){
            propiedadService.deleteById(id);
            return  ResponseEntity.noContent().build();
        }
        return  ResponseEntity.notFound().build();
    }


    private ResponseEntity<?> validation(BindingResult result){
        Map<String, String> errors = new HashMap<>();

        result.getFieldErrors().forEach( err -> {
            errors.put(err.getField(), "El campo " + err.getField() + " " + err.getDefaultMessage());
        });

        return ResponseEntity.badRequest().body(errors);
    }
}
