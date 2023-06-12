package com.alquiler.demo.controller;

import com.alquiler.demo.entity.Alquiler;
import com.alquiler.demo.service.AlquilerService;
import com.alquiler.demo.service.FotoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
@RequestMapping("/alquiler")
public class AlquilerController {

    @Autowired
    private AlquilerService alquilerService;

    @Autowired
    private FotoService fotoService;


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
    @GetMapping("/propietario/{idPropietario}")
    public ResponseEntity<?>findByPropietario(@PathVariable Long idPropietario){
        List<Alquiler>alquilerList =alquilerService.findByPropietario(idPropietario);
        if(alquilerList.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok().body(alquilerList);
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


    @PostMapping
    public ResponseEntity<?> upload(@RequestParam("archivo")MultipartFile archivo, @RequestParam("id") Long id){
        Map<String, Object> respuesta = new HashMap<>();

        Optional<Alquiler> alquilerOptional = alquilerService.findById(id);

        Alquiler alquiler = alquilerOptional.get();

        if (!archivo.isEmpty()){
            String nombreArchivo = null;
            try {
                nombreArchivo = fotoService.copy(archivo);
            }catch (IOException e){
                respuesta.put("error", e.getMessage()+" ");
                respuesta.put("mensaje", "error al cargar la foto del alquiler");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(respuesta);
            }

            /*PARA ACTUALIZAR FOTOS
            * List<String> listaActualizada = lista.stream()
            .map(dato -> dato.equals(datoAntiguo) ? datoNuevo : dato)
            .collect(Collectors.toList());

            List<String>nombreFotoAnterior=new ArrayList<>();


            String nombreFotoAnterior = alquiler.getFoto();
            fotoService.delete(nombreFotoAnterior);*/



            alquiler.getFoto().add(nombreArchivo);
            respuesta.put("alquiler", alquiler);
            respuesta.put("mensaje", "Ha subido correctamente la imagen"+ nombreArchivo );
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(respuesta);
    }


    private ResponseEntity<?> validation(BindingResult result){

        Map<String, Object> errores = new HashMap<>();

        result.getFieldErrors().forEach( err -> {
            errores.put(err.getField(), "El campo"+ err.getField()+ " "+ err.getDefaultMessage());
        });

        return ResponseEntity.badRequest().body(errores);
    }
}
