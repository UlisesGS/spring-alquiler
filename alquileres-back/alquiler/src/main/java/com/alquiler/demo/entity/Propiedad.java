package com.alquiler.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;

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
    private Usuario usuario;

    @NotBlank
    private String ubicacion;


   // @NotBlank

   /* @NotBlank*/

    private List<String> foto;

    @NotNull
    private Double precio;

    /*@Column(name = "lista_clientes")
    @ManyToMany

    private List<Usuario> listaCliente;

    public Propiedad() {

    }

    private List<Usuario> listaCliente;*/


}


