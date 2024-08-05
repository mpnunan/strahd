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
  PlayerNote,
  PlayerNotes,
  SessionComment,
  SessionComments,
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

const createPlayerNote = async (note: PlayerNote): Promise<{name: string}> => {
  const playerNote = await data.post('/playerNotes.json', note);
  return playerNote.data;
}

const updatePlayerNote = async (id: string, note: PlayerNote): Promise<{name: string}> => {
  const playerNote = await data.patch(`/playerNotes/${id}.json`, note);
  return playerNote.data;
}

const getSinglePlayerNote = async (id: string): Promise<PlayerNote> => {
  const playerNote = await data.get(`/playerNotes/${id}.json`);
  return playerNote.data;
}

const getPlayerNotes = async (uid: string): Promise<PlayerNotes> => {
  const playerNotes = await data.get(`/playerNotes.json?orderBy="uid"&equalTo="${uid}"`);
  return Object.values(playerNotes.data);
}

const createSessionComment = async (comment: SessionComment): Promise<{name: string}> => {
  const sessionComment = await data.post('/sessionComments.json', comment);
  return sessionComment.data;
}

const updateSessionComment = async (id: string, comment: SessionComment): Promise<{name: string}> => {
  const sessionComment = await data.patch(`/sessionsComments/${id}.json`, comment);
  return sessionComment.data;
}

const getSingleSessionComment = async (id: string): Promise<SessionComment> => {
  const sessionComment = await data.get(`/sessionsComments/${id}.json`);
  return sessionComment.data;
}

const getSessionComments = async (sessionId: string): Promise<SessionComments> => {
  const sessionComments = await data.get(`/sessionComments.json?orderBy="sessionId"&equalTo="${sessionId}"`);
  return Object.values(sessionComments.data);
}

const deleteNote = async (id: string): Promise<any> => {
  const note = await data.delete(`/playerNotes/${id}`);
  return note.data;
}

const deleteComment = async (id: string): Promise<any> => {
  const comment = await data.delete(`/sessionComments/${id}`);
  return comment.data;
}

export {
  getSessions,
  getNpcs,
  getMapLocations,
  getPlayers,
  getSingleSession,
  getSinglePlayer,
  getSessionMapLocations,
  getSessionNpcs,
  getSingleMapLocation,
  getSingleNpc,
  createPlayerNote,
  updatePlayerNote,
  getSinglePlayerNote,
  getPlayerNotes,
  createSessionComment,
  updateSessionComment,
  getSingleSessionComment,
  getSessionComments,
  deleteNote,
  deleteComment,
}
