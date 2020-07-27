package com.proyecto.Modelos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="sala")
public class Sala {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private long id;

    @Column(name="cant_camas")
    private int cant_camas;

    @Column(name="camas_ocup")
    private int camas_ocup;

    public Sala(long id, int cant_camas, int camas_ocup) {
        this.id = id;
        this.cant_camas= cant_camas;
        this.camas_ocup = camas_ocup;
    }

    public long getId() {
        return this.id;
    }

    public int getCamas() {
        return this.cant_camas;
    }

    public void setCamas(int cant_camas) {
        this.cant_camas = cant_camas;
    }

    public int getOcup() {
        return this.camas_ocup
    }

    public void setOcup(int camas_ocup) {
        this.camas_ocup = camas_ocup;
    }
}