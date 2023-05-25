package com.alquiler.demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@Data
@Table(name = "usuarios")
public class Usuario {

    public Usuario() {
        this.roles = new ArrayList<>();

    }

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

    @PrePersist
    private void rol(){
        Rol rol = new Rol();
        rol.setId(1L);
        rol.setNombre("ROLE_USER");
        this.roles.add(rol);
    }



}
