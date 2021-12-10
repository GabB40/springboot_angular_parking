package com.formation.parking.controllers;

import com.formation.parking.models.Parking;
import com.formation.parking.services.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ParkingController {

    @Autowired
    private ParkingService parkingService;

    @CrossOrigin("http://localhost:4200")
    @RequestMapping(path = "/api/parkings", method = RequestMethod.GET)
    public List<Parking> getListeParkings() {
        /*Parking parkingTest = new Parking();
        parkingTest.setNom("Parking de test");
        parkingTest.setNbPlacesTotal(300);
        parkingTest.setNbPlacesDispo(125);
        parkingTest.setStatut("ouvert");
        parkingTest.setHeureMaj("20h15");
        ArrayList<Parking> liste = new ArrayList<Parking>();
        liste.add(parkingTest);*/

        return parkingService.getListeParkings();
    }
}
