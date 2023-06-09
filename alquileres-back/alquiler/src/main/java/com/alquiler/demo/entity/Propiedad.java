package com.alquiler.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import jakarta.validation.constraints.NotNull;



import lombok.Data;


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


   // @NotBlank

   /* @NotBlank*/

    private List<String> foto;

    @NotNull
    private Double precio;

   /* @Column(name = "lista_clientes")
    @ManyToMany
    private List<Usuario> listaCliente;*/


    public Propiedad() {
        this.propietario= new Usuario();
    }
}


