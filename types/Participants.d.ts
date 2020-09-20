import { F1_TEAM } from './Teams';
import { GameHeader } from './GameHeader';

export enum CONTROLLED_BY {
    AI = 0,
    HUMAN = 1,
}

export enum YOUR_TELEMETRY {
    RESTRICTED = 0,
    PUBLIC = 1,
}

export interface Participant {
    m_header: GameHeader;
    m_aiControlled: CONTROLLED_BY;
    m_driverId: number;
    m_teamId: F1_TEAM;
    m_raceNumber: number;
    m_nationality: number;
    m_name: string;
    m_yourTelemetry: YOUR_TELEMETRY;
}

export interface ParticipantsData {
    m_numActiveCars: number;
    m_participants: Participant[];
}

export interface PacketParticipantsData extends GameHeader, ParticipantsData {}
