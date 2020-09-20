import { F1_TEAM } from './Teams';
import { GameHeader } from './GameHeader';

export enum AI_CONTROLLED {
    AI = 0,
    HUMAN = 1,
}

export enum READY_STATUS {
    NOT_READY = 0,
    READY = 1,
    SPECTATING = 2,
}

export interface LobbyInfo {
    m_aiControlled: AI_CONTROLLED;
    m_teamId: F1_TEAM;
    m_nationality: number;
    m_name: string;
    m_readyStatus: READY_STATUS;
}

export interface LobbyInfoData {
    m_numPlayers: number;
    m_lobbyPlayers: LobbyInfo[];
}

export interface PacketLobbyInfoData extends GameHeader, LobbyInfoData {}
