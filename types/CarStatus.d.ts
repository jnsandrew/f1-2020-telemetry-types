import { GameHeader } from './GameHeader';
import { VEHICLE_FLAGS } from './Session';

export enum TRACTION_CONTROL {
    OFF = 0,
    MEDIUM = 1,
    HIGH = 2,
}

export enum ANTI_LOCK_BRAKES {
    OFF = 0,
    ON = 1,
}

export enum FUEL_MIX {
    LEAN = 0,
    STANDARD = 1,
    RICH = 2,
    MAX = 3,
}

export enum PIT_LIMITER {
    OFF = 0,
    ON = 1,
}

export enum DRS_FAULT {
    FALSE = 0,
    TRUE = 1,
}

export enum DRS_ALLOWED {
    NOT_ALLOWED = 0,
    ALLOWED = 1,
    UNKNOWN = -1,
}

export enum TYRE_COMPOUND_ACTUAL {
    C5 = 16,
    C4 = 17,
    C3 = 18,
    C2 = 19,
    C1 = 20,
    INTER = 7,
    WET = 8,
    CLASSIC_DRY = 9,
    CLASSIC_WET = 10,
    F2_SUPER_SOFT = 11,
    F2_SOFT = 12,
    F2_MEDIUM = 13,
    F2_HARD = 14,
    F2_WET = 15,
}

export enum TYRE_COMPOUND_VISUAL {
    SOFT = 16,
    MEDIUM = 17,
    HARD = 18,
    INTER = 7,
    WET = 8,
}

export enum ERS_DEPLOY_MODE {
    NONE = 0,
    MEDIUM = 1,
    OVERTAKE = 2,
    HOTLAP = 3,
}

export interface CarStatusData {
    m_actualTyreCompound: TYRE_COMPOUND_ACTUAL;
    m_antiLockBrakes: ANTI_LOCK_BRAKES;
    m_drsActivationDistance: number;
    m_drsAllowed: DRS_ALLOWED;
    m_drsFault: DRS_FAULT;
    m_engineDamage: number;
    m_ersDeployMode: ERS_DEPLOY_MODE;
    m_ersDeployedThisLap: number;
    m_ersHarvestedThisLapMGUH: number;
    m_ersHarvestedThisLapMGUK: number;
    m_ersStoreEnergy: number;
    m_frontBrakeBias: number;
    m_frontLeftWingDamage: number;
    m_frontRightWingDamage: number;
    m_fuelCapacity: number;
    m_fuelInTank: number;
    m_fuelMix: FUEL_MIX;
    m_fuelRemainingLaps: number;
    m_gearBoxDamage: number;
    m_idleRPM: number;
    m_maxGears: number;
    m_maxRPM: number;
    m_pitLimiterStatus: PIT_LIMITER;
    m_rearWingDamage: number;
    m_tractionControl: TRACTION_CONTROL;
    m_tyresAgeLaps: number;
    m_tyresDamage: number[];
    m_tyresWear: number[];
    m_vehicleFiaFlags: VEHICLE_FLAGS;
    m_visualTyreCompound: TYRE_COMPOUND_VISUAL;
}

export interface PacketCarStatusData extends GameHeader {
    m_carSetups: CarStatusData[];
}
