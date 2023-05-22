package com.alquiler.demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "propiedades")
public class Propiedad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private Usuario usuario;

    @NotBlank
    private String ubicacion;

    @NotBlank
    private List<String> foto;

    @NotBlank
    private Double precio;

    @Column(name = "lista_clientes")
    private List<Usuario> listaCliente;
}
