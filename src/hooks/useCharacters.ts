import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Character } from "../types";

const API_BASE_URL = "https://hp-api.onrender.com/api";

const fetchAPI = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  return response.json();
};

const createQuery = <T>(
  queryKey: string[],
  endpoint: string
): UseQueryResult<T, Error> => {
  return useQuery<T, Error>({
    queryKey,
    queryFn: () => fetchAPI<T>(endpoint),
  });
};

export const useCharacters = (): UseQueryResult<Character[], Error> =>
  createQuery<Character[]>(["characters"], "/characters");

export const useStudents = (): UseQueryResult<Character[], Error> =>
  createQuery<Character[]>(["students"], "/characters/students");

export const useStaff = (): UseQueryResult<Character[], Error> =>
  createQuery<Character[]>(["staff"], "/characters/staff");

export const useCharacter = (id: string): UseQueryResult<Character[], Error> =>
  createQuery<Character[]>(["character", id], `/character/${id}`);

export const useHouseCharacters = (
  house: string
): UseQueryResult<Character[], Error> =>
  createQuery<Character[]>(
    ["houseCharacters", house],
    `/characters/house/${house}`
  );
