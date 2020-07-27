package com.proyecto.Repositorios;

import java.util.List;

import com.proyecto.Modelos.Sala;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SalaRepo extends JpaRepository<Sala,Long>{
    
    Sala findById(long id);

    List<Sala> findAll();

}