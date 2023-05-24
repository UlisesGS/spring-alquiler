package com.alquiler.demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String username;//
    @NotBlank
    private String nombre;//
    @NotBlank
    private String apellido;//
    @NotBlank
    private String dni;//
    @NotBlank
    private String telefono;//
    @NotBlank
    private String email;//
    @NotBlank
    private String password;
    private String foto;

    @ManyToMany
    private List<Rol> roles;



}
