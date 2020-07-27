package com.proyecto.Controladores.util;


public class CamaRequest {
 
    private long id;
    private boolean disponibilidad;
    private Time tiempo_usada;

    public CamaRequest(long id, boolean disponibilidad, Time tiempo_usada){
        this.id = id;
        this.disponibilidad= disponibilidad;
        this.tiempo_usada = tiempo_usada;
    }

    public long getId() {
        return this.id;
    }

    public int getDispo() {
        return this.disponibilidad;
    }
    
    public int getTime() {
        return this.tiempo_usada;
    }

    public void setTime(Time tiempo_usada) {
        this.tiempo_usada = tiempo_usada;
    }

    public void setDispo(int disponibilidad) {
        this.disponibilidad = disponibilidad;
    }
}