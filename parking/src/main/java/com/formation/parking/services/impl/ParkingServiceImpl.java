package com.formation.parking.services.impl;

import com.formation.parking.dao.ParkingAPIDAO;
import com.formation.parking.dao.entity.RecordEntity;
import com.formation.parking.dao.entity.ReponseParkingAPIEntity;
import com.formation.parking.models.Parking;
import com.formation.parking.services.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.List;

@Service
public class ParkingServiceImpl implements ParkingService {

    @Autowired
    public ParkingAPIDAO parkingAPIDAO;

    @Override
    public List<Parking> getListeParkings() {
        ReponseParkingAPIEntity reponse = parkingAPIDAO.getListeParkings();
        return transformEntityToModel(reponse);
    }

    private List<Parking> transformEntityToModel(ReponseParkingAPIEntity reponse) {
        List<Parking> resultat = new ArrayList<Parking>();
        for (RecordEntity record : reponse.getRecords()) {
            Parking parking = new Parking();
            parking.setIdentifiant(Integer.parseInt(record.getFields().getIdObj()));
            parking.setNom(record.getFields().getGrpNom());
            parking.setStatut(getGrpStatut(record));
            parking.setNbPlacesDispo(record.getFields().getGrpDisponible());
            parking.setNbPlacesTotal(record.getFields().getGrpExploitation());
            parking.setHeureMaj(getGrpHorodatage(record));
            resultat.add(parking);
        }
        return resultat;
    }

    private String getGrpHorodatage(RecordEntity record) {
        OffsetDateTime horodatage = OffsetDateTime.parse(record.getFields().getGrpHorodatage());
        OffsetDateTime dateMaj = horodatage.withOffsetSameInstant(ZoneOffset.of("+01:00"));
        return dateMaj.getHour() + "h" + dateMaj.getMinute();
    }

    private String getGrpStatut(RecordEntity record) {
        switch (record.getFields().getGrpStatut()) {
            case "1":
                return "FERME";
            case "2" :
                return "ABONNES";
            case "5" :
                return "OUVERT";
        }
        return "Données non disponibles";
    }
}
