import { Request, Response } from "express";
import { DroneServices } from "./services";
import type { Drone } from "./interfaces";

export class DronesController {
  async getDrones(req: Request, res: Response): Promise<any> {
    const droneServices = new DroneServices();
    const drones: Drone[] = await droneServices.getDrones();
    res.status(200).json(drones);
  }

  async getDrone(req: Request, res: Response): Promise<void> {
    const droneServices = new DroneServices();
    const droneId = Number(req.params.id);
    const drone: Drone | null = await droneServices.getDrone(droneId);
    if (drone) {
      res.status(200).json(drone);
    } else {
      res.status(404).json({ message: "Drone not found" });
    }
  }

  async createDrone(req: Request, res: Response): Promise<void> {
    const body = req.body;
    const drone: Drone = {
      name: body.name,
    };

    const droneServices = new DroneServices();
    const newDrone: Drone = await droneServices.createDrone(drone);
    res.status(201).json(newDrone);
  }

  async updateDrone(req: Request, res: Response): Promise<void> {
    const body = req.body;
    const droneId = Number(req.params.id);
    const drone: Drone = {
      name: body.name,
      status: body.status,
      deliveryObject: body.deliveryObject,
    };

    const droneServices = new DroneServices();
    const updatedDrone: Drone | null = await droneServices.updateDrone(droneId, drone);
    if (updatedDrone) {
      res.status(200).json(updatedDrone);
    } else {
      res.status(404).json({ message: "Drone not found" });
    }
  }

  async deleteDrone(req: Request, res: Response): Promise<void> {
    const droneId = Number(req.params.id);
    const droneServices = new DroneServices();
    const deletedDrone = await droneServices.deleteDrone(droneId);
    if (deletedDrone) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Drone not found" });
    }
  }
}
