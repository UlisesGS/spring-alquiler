package com.alquiler.demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
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
    @JoinColumn(name = "propietarios")
    private Usuario usuario;

    @NotBlank
    private String ubicacion;

   /* @NotBlank*/
    private List<String> foto;

    @NotNull
    private Double precio;

    /*@Column(name = "lista_clientes")
    @ManyToMany
    private List<Usuario> listaCliente;*/

}


