package com.alquiler.demo.entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import jakarta.validation.constraints.NotNull;



import lombok.Data;


import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "propiedades")
public class Propiedad {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne
    @JsonIgnoreProperties(ignoreUnknown = true)
    @JoinColumn(name = "propietarios")
    private Usuario propietario;

    @NotBlank
    private String ubicacion;




<<<<<<< HEAD
    private List<String> fotos ;
=======
    private List<String> fotos;
>>>>>>> a9784d3704f6912f7ee2b0cc386a1d9fd94910dc

    @NotNull
    private Double precio;



    public Propiedad() {
        this.fotos = new ArrayList<>();
<<<<<<< HEAD
    //    this.propietario= new Usuario();
    }

    public void addFoto(String nombre){
        System.out.println(nombre);

        this.fotos.add(nombre);
=======
    }



    public void addFotosNull(String foto){
        this.fotos = new ArrayList<>();
        this.fotos.add(foto);
    }

    public void addFotos(String foto){
        this.fotos.add(foto);
>>>>>>> a9784d3704f6912f7ee2b0cc386a1d9fd94910dc
    }
}


