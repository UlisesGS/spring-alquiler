package com.alquiler.demo.repository;

import com.alquiler.demo.entity.Propiedad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PropiedadRepository extends JpaRepository<Propiedad, Long> {

    @Query ("SELECT p FROM Propiedad p WHERE p.propietario.id = ?1")
    public List<Propiedad> buscarPropiedad( Long id);
}
