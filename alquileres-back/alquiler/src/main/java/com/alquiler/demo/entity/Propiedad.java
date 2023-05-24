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
<<<<<<< HEAD
    @JoinColumn(name = "propietarios")
    @ManyToOne
=======
    @ManyToOne
    @JoinColumn(name = "propietarios")
>>>>>>> 26c26e60a59b4841a75f17eeb3e6ffa29f75f25d
    private Usuario usuario;

    @NotBlank
    private String ubicacion;

    @NotBlank
    private List<String> foto;

    @NotBlank
    private Double precio;

    @Column(name = "lista_clientes")
    @ManyToMany
    private List<Usuario> listaCliente;
}
