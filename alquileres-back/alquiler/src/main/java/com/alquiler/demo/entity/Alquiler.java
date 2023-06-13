package com.alquiler.demo.entity;

import jakarta.persistence.*;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "alquileres")
public class Alquiler {


    public Alquiler() {
        this.foto = new ArrayList<>();

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @OneToOne
    private Peticion peticion;

    @Column(name = "aceptar_peticion")
    private Boolean aceptarPeticion;

    private String reseña;/*OPCIONAL*/


    private List<String> foto;/*OPCIONAL*/

<<<<<<< HEAD

    @NotNull
=======
<<<<<<< HEAD
=======
    @NotNull
>>>>>>> fe733dddf1a2bfeaaac2d5ae29e5cf027e95cbc0
>>>>>>> df8d0d0384c89a91abfe9126297ef1a29be4b407
    @Future(message = "Debe indicar una fecha posterior a la de hoy")
    @Column(name = "fecha_entrada")
    @Temporal(TemporalType.DATE)
    private Date fechaEntrada;


    @NotNull
    @Future(message = "Debe indicar una fecha posterior a la de hoy")
    @Column(name = "fecha_salida")
    @Temporal(TemporalType.DATE)
    private Date fechaSalida;

    public Alquiler() {
        this.foto = new ArrayList<>();
    }
    public void addFoto(String foto){
        this.foto.add(foto);

    }
}
