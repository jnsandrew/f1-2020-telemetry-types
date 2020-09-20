export enum PACKET_ID {
    MOTION = 0,
    SESSION = 1,
    LAP_DATA = 2,
    EVENT = 3,
    PARTICIPANTS = 4,
    CAR_SETUP = 5,
    CAR_TELEMETRY = 6,
    CAR_STATUS = 7,
    FINAL_CLASSIFICATION = 8,
    LOBBY = 9,
}

export interface GameHeader {
    m_frameIdentifier: number;
    m_gameMajorVersion: number;
    m_gameMinorVersion: number;
    m_packetFormat: number;
    m_packetId: PACKET_ID;
    m_packetVersion: number;
    m_playerCarIndex: number;
    m_secondaryPlayerCarIndex: number;
    m_sessionTime: number;
}
