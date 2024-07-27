import data from "./axiosConfig"
import type {
  Sessions,
  Npcs,
  MapLocations,
  Players,
  Session, 
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

const getCharacters = async (): Promise<Players> => {
  const characters = await data.get('/characters.json');
  return Object.values(characters.data);
}

const createSession = async (payload: Session): Promise<any> => {
  const session = await data.post('/sessions.json', payload);
  return session.data;
}

const getSingleSession = async (id: string| null): Promise<Session> => {
  const singleSession = await data.get(`/sessions/${id}.json`);
  return singleSession.data;
}

export {
  getSessions,
  getNpcs,
  getMapLocations,
  getCharacters,
  createSession,
  getSingleSession,
}
