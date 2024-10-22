import { DroneModel } from "./models";
import { Drone } from "./interfaces";

export class DroneServices {
  async getDrones(): Promise<Drone[]> {
    return DroneModel.findAll();
  }

  async getDrone(id: number): Promise<Drone | null> {
    return DroneModel.findByPk(id);
  }

  async createDrone(drone: Drone): Promise<Drone> {
    return DroneModel.create(drone);
  }
}
