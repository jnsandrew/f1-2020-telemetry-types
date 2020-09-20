import { GameHeader } from './GameHeader';
import { RESULT_STATUS } from './FinalClassification';

export enum PIT_STATUS {
    NONE = 0,
    PITTING = 1,
    IN_PIT_AREA = 2,
}

export enum CURRENT_LAP_INVALID {
    VALID = 0,
    INVALID = 1,
}

export enum DRIVER_STATUS {
    IN_GARAGE = 0,
    FLYING_LAP = 1,
    IN_LAP = 2,
    OUT_LAP = 3,
    ON_TRACK = 4,
}

export interface LapData {
    m_lastLapTime: number;
    m_currentLapTime: number;
    m_sector1TimeInMS: number;
    m_sector2TimeInMS: number;
    m_bestLapTime: number;
    m_bestLapNum: number;
    m_bestLapSector1TimeInMS: number;
    m_bestLapSector2TimeInMS: number;
    m_bestLapSector3TimeInMS: number;
    m_bestOverallSector1TimeInMS: number;
    m_bestOverallSector1LapNum: number;
    m_bestOverallSector2TimeInMS: number;
    m_bestOverallSector2LapNum: number;
    m_bestOverallSector3TimeInMS: number;
    m_bestOverallSector3LapNum: number;
    m_lapDistance: number;
    m_totalDistance: number;
    m_safetyCarDelta: number;
    m_carPosition: number;
    m_currentLapNum: number;
    m_pitStatus: PIT_STATUS;
    m_sector: number;
    m_currentLapInvalid: CURRENT_LAP_INVALID;
    m_penalties: number;
    m_gridPosition: number;
    m_driverStatus: DRIVER_STATUS;
    m_resultStatus: RESULT_STATUS;
}

export interface PacketLap extends GameHeader {
    m_lapData: LapData[];
}
