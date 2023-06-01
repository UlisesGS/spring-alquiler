package com.alquiler.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Data
public class Alquiler {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Peticion peticion;

    private Boolean aceptarPeticion;

    private String reseña;/*OPCIONAL*/

    private List<String> foto;/*OPCIONAL*/

    @Temporal(TemporalType.DATE)
    private Date calendario;


}
