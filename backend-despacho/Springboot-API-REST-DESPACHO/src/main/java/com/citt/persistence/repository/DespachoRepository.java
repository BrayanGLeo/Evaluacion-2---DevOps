package com.citt.persistence.repository;

import com.citt.persistence.entity.Despacho;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DespachoRepository extends JpaRepository<Despacho, Long> {
}
