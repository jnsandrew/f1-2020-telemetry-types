import { GameHeader } from './GameHeader';

export enum SURFACE_TYPES {
    TARMAC = 0,
    RUMBLE_STRIP = 1,
    CONCRETE = 2,
    ROCK = 3,
    GRAVEL = 4,
    MUD = 5,
    SAND = 6,
    GRASS = 7,
    WATER = 8,
    COBBLESTONE = 9,
    METAL = 10,
    RIDGED = 11,
}

export enum BUTTON_FLAGS {
    CROSS_OR_A = '0x0001',
    TRIANGLE_OR_Y = '0x0002',
    CIRCLE_OR_B = '0x0004',
    SQUARE_OR_X = '0x0008',
    DPAD_LEFT = '0x0010',
    DPAD_RIGHT = '0x0020',
    DPAD_UP = '0x0040',
    DPAD_DOWN = '0x0080',
    OPTIONS_OR_MENU = '0x0100',
    L1_OR_LB = '0x0200',
    R1_OR_RB = '0x0400',
    L2_OR_LT = '0x0800',
    R2_OR_RT = '0x1000',
    LEFT_STICK_CLICK = '0x2000',
    RIGHT_STICK_CLICK = '0x4000',
}

export interface CarTelemetry {
    um_speed: number;
    flm_throttle: number;
    flm_steer: number;
    flm_brake: number;
    m_clutch: number;
    m_gear: number;
    um_engineRPM: number;
    m_drs: number;
    m_revLightsPercent: number;
    m_brakesTemperature: number[];
    m_tyresSurfaceTemperature: number[];
    m_tyresInnerTemperature: number[];
    m_engineTemperature: number;
    m_tyresPressure: number[];
    m_surfaceType: SURFACE_TYPES[];
}

export interface CarTelemetryData {
    m_carSetups: CarTelemetry[];
    m_buttonStatus: BUTTON_FLAGS;
    m_mfdPanelIndex: number;
    m_mfdPanelIndexSecondaryPlayer: number;
    m_suggestedGear: number;
}

export interface PacketCarTelemetaryData extends GameHeader, CarTelemetryData {}
