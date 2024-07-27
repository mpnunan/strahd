import data from "./axiosConfig"
import type {
  Sessions,
  Npcs,
  MapLocations,
  Players,
  Session,
  Player
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

export {
  getSessions,
  getNpcs,
  getMapLocations,
  getPlayers,
  createSession,
  getSingleSession,
  getSinglePlayer
}
