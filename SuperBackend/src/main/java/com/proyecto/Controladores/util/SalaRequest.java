package com.proyecto.Controladores.util;


public class SalaRequest {
 
    private long id;
    private int cant_camas;
    private long camas_ocup;

    public PacienteRequest(long id,int cant_camas, int camas_ocup){
        this.id = id;
        this.cant_camas = cant_camas;
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
        return this.camas_ocup;
    }

    public void setOcup(int camas_ocup) {
        this.camas_ocup = camas_ocup;
    }
}