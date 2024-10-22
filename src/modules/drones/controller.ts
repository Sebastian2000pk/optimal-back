import { Request, Response } from "express";

export class DronesController {
  async getDrones(req: Request, res: Response): Promise<void> {
    const drones: any[] = [];
    res.json(drones);
  }

  async getDrone(req: Request, res: Response): Promise<void> {
    const drone: any = {};
    res.json(drone);
  }

  async createDrone(req: Request, res: Response): Promise<void> {
    const drone: any = {};
    res.json(drone);
  }
}
