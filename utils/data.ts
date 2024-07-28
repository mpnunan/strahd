import data from "./axiosConfig"
import type {
  Sessions,
  Npcs,
  MapLocations,
  Players,
  Session,
  Player,
  SessionMapLocations,
  SessionNpcs,
  MapLocation,
  Npc,
} from "./types";

const getSessions = async (): Promise<Sessions> => {
  const sessions = await data.get('/sessions.json');
  return Object.values(sessions.data);
}

const getNpcs = async (): Promise<Npcs> => {
  const npcs = await data.get('/npcs.json');
  return Object.values(npcs.data);
}

const getMapLocations = async (): Promise<MapLocations> => {
  const mapLocations = await data.get('/mapLocations.json');
  return Object.values(mapLocations.data);
}

const getPlayers = async (): Promise<Players> => {
  const players = await data.get('/players.json');
  return Object.values(players.data);
}

const createSession = async (payload: Session): Promise<any> => {
  const session = await data.post('/sessions.json', payload);
  return session.data;
}

const getSingleSession = async (id: string| null): Promise<Session> => {
  const singleSession = await data.get(`/sessions/${id}.json`);
  return singleSession.data;
}

const getSinglePlayer = async (id: string| null): Promise<Player> => {
  const singlePlayer = await data.get(`/players/${id}.json`);
  return singlePlayer.data;
}

const getSessionMapLocations = async (sessionId: string): Promise<SessionMapLocations> => {
  const mapLocations = await data.get(`/sessionLocations.json?orderBy="sessionId"&equalTo="${sessionId}"`);
  return Object.values(mapLocations.data);
}

const getSessionNpcs = async (sessionId: string): Promise<SessionNpcs> => {
  const npcs = await data.get(`/sessionNpcs.json?orderBy="sessionId"&equalTo="${sessionId}"`);
  return Object.values(npcs.data);
}

const getSingleMapLocation = async (id: string| null): Promise<MapLocation> => {
  const singleMapLocation = await data.get(`/mapLocations/${id}.json`);
  return singleMapLocation.data;
}

const getSingleNpc = async (id: string| null): Promise<Npc> => {
  const singleNpc = await data.get(`/npcs/${id}.json`);
  return singleNpc.data;
}

export {
  getSessions,
  getNpcs,
  getMapLocations,
  getPlayers,
  createSession,
  getSingleSession,
  getSinglePlayer,
  getSessionMapLocations,
  getSessionNpcs,
  getSingleMapLocation,
  getSingleNpc,
}
