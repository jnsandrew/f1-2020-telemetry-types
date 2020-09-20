import { GameHeader } from './GameHeader';

export enum SessionType {
    UNKNOWN = 0,
    P1 = 1,
    P2 = 2,
    P3 = 3,
    SHORT_PRACTICE = 4,
    Q1 = 5,
    Q2 = 6,
    Q3 = 7,
    SHORT_QUALIFYING = 8,
    ONE_SHOT_QUALIFYING = 9,
    RACE = 10,
    RACE_2 = 11,
    TIME_TRIAL = 12,
}

export interface MARSHAL_ZONE {
    m_zoneStart: number;
    m_zoneFlag: VEHICLE_FLAGS;
}

export enum VEHICLE_FLAGS {
    UNKNOWN = -1,
    NONE = 0,
    GREEN = 1,
    BLUE = 2,
    YELLOW = 3,
    RED = 4,
}

export enum WEATHER_TYPE {
    CLEAR = 0,
    LIGHT_CLOUD = 1,
    OVERCAST = 2,
    LIGHT_RAIN = 3,
    HEAVY_RAIN = 4,
    STORM = 5,
}

export enum TRACK_ID {
    MELBOURNE = 0,
    PAUL_RICARD = 1,
    SHANGHAI = 2,
    SAKHIR_BAHRAIN = 3,
    CATALUNYA = 4,
    MONACO = 5,
    MONTREAL = 6,
    SILVERSTONE = 7,
    HOCKENHEIM = 8,
    HUNGARORING = 9,
    SPA = 10,
    MONZA = 11,
    SINGAPORE = 12,
    SUZUKA = 13,
    ABU_DHABI = 14,
    TEXAS = 15,
    BRAZIL = 16,
    AUSTRIA = 17,
    SOCHI = 18,
    MEXICO = 19,
    BAKU = 20,
    SAKHIR_SHORT = 21,
    SILVERSTONE_SHORT = 22,
    TEXAS_SHORT = 23,
    SUZUKA_SHORT = 24,
    HANOI = 25,
    ZANDVOORT = 26,
}

export enum FORMULA {
    MODERN = 0,
    CLASSIC = 1,
    F2 = 2,
    F1_GENERIC = 3,
}

export interface WeatherForecastSample {
    m_sessionType: SessionType;
    m_timeOffset: number;
    m_weather: WEATHER_TYPE;
    m_trackTemperature: number;
    m_airTemperature: number;
}

export interface SessionData {
    m_weather: WEATHER_TYPE;
    m_trackTemperature: number;
    m_airTemperature: number;
    m_totalLaps: number;
    m_trackLength: number;
    m_sessionType: SessionType;
    m_trackId: TRACK_ID;
    m_formula: FORMULA;
    m_sessionTimeLeft: number;
    m_sessionDuration: number;
    m_pitSpeedLimit: number;
    m_gamePaused: number;
    m_isSpectating: number;
    m_spectatorCarIndex: number;
    m_sliProNativeSupport: number;
    m_numMarshalZones: number;
    m_marshalZones: MARSHAL_ZONE[];
    m_safetyCarStatus: number;
    m_networkGame: number;
    m_numWeatherForecastSamples: number;
    m_weatherForecastSamples: WeatherForecastSample[];
}

export interface PacketSessionData extends GameHeader, SessionData {}
