import { Clock } from "@/application/clock";

export class RealClock implements Clock {
  getToday(): Date {
    return new Date();
  }
}
