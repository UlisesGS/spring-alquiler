package com.alquiler.demo.entity;

import jakarta.persistence.*;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Data

public class Alquiler {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @OneToOne
    private Peticion peticion;

    private Boolean aceptarPeticion;

    private String reseña;/*OPCIONAL*/

    private List<String> foto;/*OPCIONAL*/
    @NotNull
    @Temporal(TemporalType.DATE)
    private Date fechaEntrada;
    @NotNull
    @Temporal(TemporalType.DATE)
    private Date fechaSalida;



}
