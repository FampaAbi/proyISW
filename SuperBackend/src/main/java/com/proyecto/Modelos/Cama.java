package com.proyecto.Modelos;

import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cama")
public class Cama {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private long id;

    @Column(name="disponibilidad")
    private boolean disponibilidad;

    @Column(name="tiempo_usada")
    private Time tiempo_usada;

    public Cama(long id, boolean disponibilidad, Time tiempo_usada) {
        this.id = id;
        this.disponibilidad = disponibilidad;
        this.tiempo_usada = tiempo_usada;
    }

    public long getId() {
        return this.id;
    }

    public int getDispo() {
        return this.disponibilidad;
    }

    public int getTiempo() {
        return this.tiempo_usada
    }

    public void setDispo(boolean disponibilidad) {
        this.disponibilidad= disponibilidad;
    }

    public void setTime(Time tiempo_usada) {
        this.tiempo_usada = tiempo_usada;
    }
}