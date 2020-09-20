import { GameHeader } from './GameHeader';

export enum RESULT_STATUS {
    INVALID = 0,
    INACTIVE = 1,
    ACTIVE = 2,
    FINISHED = 3,
    DISQUALIFIED = 4,
    NOT_CLASSIFIED = 5,
    RETIRED = 6,
}

export interface FinalClassification {
    m_position: number;
    m_numLaps: number;
    m_gridPosition: number;
    m_points: number;
    m_numPitStops: number;
    m_resultStatus: RESULT_STATUS;

    m_bestLapTime: number;
    m_totalRaceTime: number;
    m_penaltiesTime: number;
    m_numPenalties: number;
    m_numTyreStints: number;

    m_tyreStintsActual: number[];
    m_tyreStintsVisual: number[];
}

export interface FinalClassificationData {
    m_numCars: number;
    m_classificationData: FinalClassificationData[];
}

export interface PacketFinalClassificationData extends GameHeader, FinalClassificationData {}
