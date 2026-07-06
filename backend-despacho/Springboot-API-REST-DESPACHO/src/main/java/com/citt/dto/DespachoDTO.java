package com.citt.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class DespachoDTO {
    private Long idDespacho;
    private LocalDate fechaDespacho;
    private String patenteCamion;
    private int intento;
    private Long idCompra;
    private String direccionCompra;
    private Long valorCompra;
    private boolean despachado;
}
