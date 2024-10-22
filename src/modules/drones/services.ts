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

  async updateDrone(id: number, drone: Drone): Promise<Drone | null> {
    const [, [updatedDrone]] = await DroneModel.update(drone, {
      where: { id },
      returning: true,
    });
    return updatedDrone;
  }

  async deleteDrone(id: number): Promise<number> {
    return DroneModel.destroy({ where: { id } });
  }
}
